# Portal Onboarding Workflow

## Overview

When a client requests portal access via the website, a semi-automated workflow handles onboarding. The system sends emails and updates CRM records; the operations team manually creates Courier Complete accounts.

## Flow

```
Client submits portal request form
    → Supabase: portal_requests (status: "pending")
    → Notification: email to dispatch
    → CRM: deal in portal_onboarding pipeline (stage: "requested")

Admin approves request (POST /api/portal-requests/:id/approve)
    → Supabase: status → "onboarding"
    → Email: welcome message to client
    → Email: onboarding checklist to operations
    → CRM: deal stage → "onboarding" (manual update in HubSpot)

Operations completes Courier Complete setup
    → Sends credentials to client (from Courier Complete)
    → Schedules onboarding call
    → Updates request status to "active"
```

## Manual Steps (Courier Complete)

Courier Complete does not offer a public API. The following steps must be performed manually in the Courier Complete admin panel:

### 1. Create Client Account

1. Log into Courier Complete admin dashboard
2. Navigate to **Clients** → **Add New Client**
3. Enter company name, primary contact, billing address
4. Set pricing tier per the service agreement
5. Save and note the generated client ID

### 2. Set Up User Credentials

1. Navigate to **Users** → **Add User**
2. Enter contact name and email from the portal request
3. Set role to "Client Portal User"
4. System auto-generates temporary password
5. Send credentials via Courier Complete's built-in email function

### 3. Configure Services

1. Enable applicable service tiers for the client
2. Set default pickup/dropoff locations if recurring
3. Configure billing method (invoice, credit card, PO)
4. Set notification preferences

### 4. Finalize

1. Complete the onboarding call with the client
2. Verify the client can log in and place a test order
3. Update the portal request status to "active" in the admin dashboard

## Future State

When Courier Complete adds API or webhook support, the following automations become possible:

- **Account creation:** Auto-create client accounts from approved portal requests
- **Credential delivery:** Auto-send login credentials via API
- **Status sync:** Webhook updates when accounts are activated
- **Custom portal:** If a custom client portal is built (using Clerk/Auth0 for auth), it could replace the Courier Complete portal entirely

These items are tracked in the post-launch backlog.
