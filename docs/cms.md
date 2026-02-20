# CMS Schema Reference (Sanity)

## Overview

Content is managed through Sanity Studio. The schema is defined in `src/sanity/schemas/` and organized into **document types** (content with their own URLs in the studio) and **object types** (reusable blocks embedded within documents).

## Document Types

### `page`
Top-level pages with composable section blocks.

| Field | Type | Notes |
|-------|------|-------|
| title | string | Page title (required) |
| slug | slug | URL slug from title (required) |
| seoTitle | string | Override for `<title>` tag |
| seoDescription | text | Meta description |
| sections | array | Ordered list of heroSection, statsSection, ctaSection blocks |

### `serviceTier`
Delivery service levels (Standard RAP, Same Day, Stat, etc.).

| Field | Type | Notes |
|-------|------|-------|
| name | string | Service name (required) |
| slug | slug | URL-safe identifier |
| description | text | Service overview |
| deliveryWindow | string | e.g., "Within 3 hours" |
| cutoffTime | string | e.g., "Ready by 2:00 PM" |
| pickupLeadTime | string | e.g., "70 minutes" |
| priceRange | string | e.g., "$25–$45" |
| icon | image | Service icon |
| sortOrder | number | Display order |
| features | string[] | Feature bullet points |
| surcharges | text | Surcharge notes |

### `testimonial`
Customer reviews and testimonials.

| Field | Type | Notes |
|-------|------|-------|
| author | string | Reviewer name (required) |
| company | string | Company name |
| industry | string | Legal, Medical, Defense, E-commerce, etc. |
| text | text | Review content (required) |
| rating | number | 1–5 stars |
| source | string | Google, Yelp, or Direct |
| approved | boolean | Must be true to display on site |

### `coverageZone`
Cities and regions served.

| Field | Type | Notes |
|-------|------|-------|
| city | string | City name (required) |
| region | string | COS Metro, Denver Metro, Front Range, Southern |
| latitude/longitude | number | Map coordinates |
| description | text | Area description |
| servicesAvailable | reference[] | Links to serviceTier documents |
| hasLandingPage | boolean | Whether city has dedicated landing page |

### `industry`
Industry verticals served (Legal, Medical, Defense, etc.).

| Field | Type | Notes |
|-------|------|-------|
| name | string | Industry name (required) |
| slug | slug | URL slug |
| headline | string | Section heading |
| description | text | Overview |
| painPoints | string[] | Problems addressed |
| complianceStatements | string[] | Certifications / compliance notes |
| icon / heroImage | image | Visual assets |
| sortOrder | number | Display order |

### `blogPost`
Blog articles and resources.

| Field | Type | Notes |
|-------|------|-------|
| title | string | Article title (required) |
| slug | slug | URL slug |
| excerpt | text | Summary for cards/feeds |
| coverImage | image | Header image |
| body | portable text | Rich content with images |
| author | string | Author name |
| publishedAt | datetime | Publication date |
| categories | string[] | shipping-tips, industry-news, etc. |
| seoTitle / seoDescription | string/text | SEO overrides |

### `faq`
Frequently asked questions.

| Field | Type | Notes |
|-------|------|-------|
| question | string | The question (required) |
| answer | text | The answer (required) |
| category | string | General, Services, Pricing, Tracking, Careers |
| sortOrder | number | Display order |

## Section Types (Objects)

These are used within the `page.sections` array.

### `heroSection`
Full-width hero with heading, subheading, background image, and two CTAs.

### `statsSection`
Stats ribbon with heading and array of value/label pairs.

### `ctaSection`
Call-to-action band with heading, body, button, and style variant (default/navy/orange).

## Queries

Pre-built GROQ queries are available in `src/sanity/lib/queries.ts` for all common data fetching needs.
