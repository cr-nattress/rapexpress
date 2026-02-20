# US-023: Quote, Portal, and STAT Forms

**Epic:** Frontend

## Description
- Build multi-step quote form with address autocomplete, package info, service selection.
- Create portal request form + STAT after-hours modal.
- Add validation, progress indicators, success states.

## Acceptance Criteria
- Forms submit to backend API, store entries, and send confirmation emails.
- STAT form triggers immediate notification (Twilio/Slack) in staging.
- Loading/error states and form-level accessibility (labels, aria) implemented.

## Dependencies
- Backend endpoints (US-030+), Google Maps API key.
