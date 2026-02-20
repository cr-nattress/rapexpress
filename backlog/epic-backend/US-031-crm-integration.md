# US-031: CRM & Dispatch Integration

**Epic:** Backend/Integrations

## Description
- Choose CRM (HubSpot/Airtable) and create pipelines for quotes, portal requests, STAT alerts.
- Implement automation (Zapier/Make) to push API submissions into CRM + dispatch inbox.
- Document fallback if Courier Complete lacks API (email parser instructions).

## Acceptance Criteria
- New quote triggers CRM deal + Slack/Email notification to dispatch.
- Portal requests assigned to onboarding pipeline automatically.
- Confluence/`docs/integrations.md` describes flow diagrams.

## Dependencies
- US-030 (API), stakeholder decision on CRM.
