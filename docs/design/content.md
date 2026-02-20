# Content & Microcopy Guidelines

## Brand Voice

Rap Express is a family-owned courier company (est. 1984) in Colorado Springs. The voice is:

- **Professional but approachable** — not corporate jargon, not casual slang
- **Confident and direct** — state facts plainly, avoid hedging language
- **Service-oriented** — emphasize reliability, speed, and personal service
- **Local and specific** — reference Colorado, the Front Range, Pikes Peak, specific cities

## Tone Examples

| Do | Don't |
|----|-------|
| "We'll pick up within 70 minutes" | "We endeavor to facilitate prompt collection" |
| "Contact our dispatch team" | "Reach out to us" |
| "Serving the Front Range since 1984" | "We have many years of experience" |
| "Your package is our priority" | "We strive to deliver excellence" |

## Button Labels

Buttons should describe the action, not be generic.

| Do | Don't |
|----|-------|
| "Send Message" | "Submit" |
| "Get a Quote" | "Go" |
| "Request Portal Access" | "Sign Up" |
| "Send STAT Request" | "Submit Form" |
| "Apply Now" | "Click Here" |

## Error Messages

Error messages must be:
1. **Specific** — say what's wrong
2. **Actionable** — say how to fix it
3. **Concise** — one sentence

### Templates

| Scenario | Message |
|----------|---------|
| Required field empty | "{Field name} is required." |
| Invalid email | "Please enter a valid email address." |
| Too short | "{Field name} must be at least {n} characters." |
| API failure | "Unable to submit your request. Please try again or call (719) 597-9667." |
| Network error | "Connection lost. Please check your internet and try again." |

## Success Messages

After form submission:

| Form | Heading | Body |
|------|---------|------|
| Contact | "Message Sent" | "Thank you for reaching out. We'll get back to you within one business day." |
| Quote | "Quote Request Received" | "We'll prepare your quote and respond within one business day." |
| Portal | "Request Submitted" | "We'll reach out within one business day with your portal login credentials." |
| STAT | "STAT Request Sent" | "Our on-call dispatcher has been notified and will call you shortly." |
| Application | "Application Received" | "Thank you for your interest. We'll review your application and be in touch." |

## Page Titles & Descriptions

Each page exports metadata following this pattern:

```tsx
export const metadata: Metadata = {
  title: "Page Title",  // Appended with " | Rap Express" via template
  description: "1-2 sentence description for SEO and social sharing.",
};
```

## Numbers & Formatting

- Phone numbers: `(719) 597-9667` (display), `tel:+17195979667` (link)
- Addresses: "2486 Waynoka Rd, Colorado Springs, CO 80915"
- Hours: "Monday - Friday, 7:30 AM - 5:30 PM"
- Years: "Since 1984" or "40+ Years"

## Terminology

| Use | Avoid |
|-----|-------|
| "delivery" | "shipment" (we're couriers, not freight) |
| "package" | "parcel" |
| "client" | "customer" (emphasizes relationship) |
| "dispatch" | "support" (accurate to our operation) |
| "STAT" | "rush" or "urgent" (STAT is our brand term) |
| "Front Range" | "Colorado area" (be specific) |
