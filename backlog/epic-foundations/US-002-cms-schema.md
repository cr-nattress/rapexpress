# US-002: CMS Schema & Content Model

**Epic:** Foundations

## Description
- Deploy Sanity/Contentful space and define schemas for:
  - Pages (home, services, industries, coverage, technology, careers, blog posts).
  - Modular sections (hero, stats, testimonials, CTA bands, FAQs).
  - Service tiers, coverage zones, testimonials, blog posts, FAQs.
- Seed CMS with placeholder content pulled from PLAN.md + analysis.

## Acceptance Criteria
- Editors can log in and edit sections without touching code.
- Preview webhooks configured to revalidate Vercel pages on publish (ISR).
- Schema documented in `docs/cms.md` with field descriptions.

## Dependencies
- US-001 (repo + env file for CMS keys).
