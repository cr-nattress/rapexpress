# US-033: Client Portal Automation

**Epic:** Backend/Integrations

## Description
- Build workflow to onboard clients to Courier Complete portal (or custom portal if required).
- Send welcome email with instructions, attach credentials/manual.
- If custom dashboard planned, set up auth (Clerk/Auth0) + placeholder page gating.

## Acceptance Criteria
- Portal request submission triggers onboarding checklist in CRM + email instructions.
- Documentation outlines manual steps for Courier Complete until API integration available.
- Future state backlog created for fully custom portal.

## Dependencies
- US-031 (CRM integration), business decision on portal direction.
