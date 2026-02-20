# Integrations Architecture

## Overview

Rap Express integrates with external services through abstraction layers in `src/lib/`. Each integration degrades gracefully — if API keys aren't configured, the system logs actions to console and continues operating.

## Data Flow

```
User submits form
    → Next.js API route validates with Zod
    → Persists to Supabase (Postgres)
    → Sends notification (email/SMS/Slack)
    → Pushes to CRM (HubSpot)
    → Returns success response
```

## CRM (HubSpot)

**File:** `src/lib/crm.ts`

### Pipelines

| Pipeline | Trigger | Initial Stage |
|----------|---------|---------------|
| `quotes` | Quote form submission | `new` |
| `portal_onboarding` | Portal access request | `requested` |
| `applications` | Careers application | `received` |

### Setup

1. Create a HubSpot account and generate a private app token
2. Create pipelines: Quotes, Portal Onboarding, Applications
3. Set `HUBSPOT_API_KEY` in Vercel environment variables

### Fallback

Without `HUBSPOT_API_KEY`, all CRM operations log to console. Form submissions still persist to Supabase.

## Notifications

**File:** `src/lib/notifications.ts`

### Channels

| Channel | Provider | Use Case | Env Vars |
|---------|----------|----------|----------|
| Email | SendGrid | All form submissions → dispatch inbox | `SENDGRID_API_KEY`, `SENDGRID_FROM_EMAIL` |
| SMS | Twilio | STAT urgent alerts to dispatcher | `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_PHONE_NUMBER`, `DISPATCH_PHONE_NUMBER` |
| Console | Built-in | Development fallback | Always active |

### Notification Types

| Type | Trigger | Channels | Urgent? |
|------|---------|----------|---------|
| `quote` | Quote submission | Email | No |
| `portal_request` | Portal request | Email | No |
| `contact` | Contact form | Email | No |
| `stat_request` | STAT form | Email + SMS | Yes |
| `application` | Job application | Email | No |

### Email Templates

All emails use a branded HTML template with:
- Navy header with Rap Express branding
- Type label (e.g., "Quote Request", "STAT Urgent Request")
- Subject and body content
- Red urgent banner for STAT requests
- Footer with admin dashboard link

### SMS Format

Urgent SMS messages are prefixed with `[RAP EXPRESS URGENT]` followed by the subject and body.

### Setup

1. **SendGrid:** Create account, verify sender domain, generate API key
2. **Twilio:** Create account, get phone number, note Account SID and Auth Token
3. Set all env vars in Vercel dashboard

## Payments (Stripe)

**File:** `src/lib/payments.ts`

Stripe integration creates Checkout Sessions for accepted quotes. Webhook handler at `/api/webhooks/stripe` updates quote status and creates jobs on payment completion.

### Flow

```
Quote accepted → createPaymentLink() → Stripe Checkout Session
Customer pays → Stripe webhook → quote status → "accepted"
                                → new job created (status: "scheduled")
```

### Webhook Events

| Event | Action |
|-------|--------|
| `checkout.session.completed` | Update quote to "accepted", create job |
| `checkout.session.expired` | Log expiration |

### Signature Verification

Webhooks are verified using HMAC-SHA256 with the Web Crypto API. Timestamp tolerance is 5 minutes to prevent replay attacks.

### Setup

1. Create Stripe account, get API keys
2. Set `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` in env vars
3. Configure webhook endpoint: `https://yourdomain.com/api/webhooks/stripe`
4. Subscribe to `checkout.session.completed` and `checkout.session.expired` events

## Courier Complete

Courier Complete (dispatch software) does not offer a public API. Current integration approach:

1. **Email parser:** Form submissions trigger structured emails to dispatch inbox
2. **Manual workflow:** Dispatcher reviews submissions in CRM and creates jobs in Courier Complete manually
3. **Future state:** If Courier Complete adds API/webhook support, build direct integration

## Supabase (Database)

**File:** `src/lib/supabase.ts`

PostgreSQL database via Supabase. Schema migrations in `supabase/migrations/`.

### Tables

| Table | Purpose |
|-------|---------|
| `quotes` | Quote form submissions |
| `jobs` | Active delivery jobs (from accepted quotes) |
| `portal_requests` | Portal access requests |
| `contact_submissions` | General contact form entries |
| `stat_requests` | After-hours STAT requests |
| `applications` | Job applications |
