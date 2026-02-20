# US-032: Payments & Notification Layer

**Epic:** Backend/Integrations

## Description
- Integrate Stripe for deposits/invoices (Checkout or Payment Links) triggered from quote acceptance.
- Connect SendGrid for email confirmations + Twilio for SMS STAT alerts.
- Template notifications (quote received, portal request received, STAT escalated).

## Acceptance Criteria
- Test transactions succeed in Stripe sandbox; webhooks update job status.
- Email templates stored version-controlled; SMS goes to configured test numbers.
- Secrets managed via Vercel env vars.

## Dependencies
- US-030 (API), design of notification copy.
