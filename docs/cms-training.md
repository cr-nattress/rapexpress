# CMS Content Entry & Training Guide

## Overview

Rap Express uses Sanity CMS to manage website content. This guide covers how to create, edit, and publish content.

## Accessing the CMS

1. Navigate to the Sanity Studio URL (provided by your administrator)
2. Log in with your Sanity account credentials
3. You'll see the content dashboard with document types in the left sidebar

## Content Types

### Pages

General website pages with customizable sections.

**Fields:**
- **Title** — Page heading (required)
- **Slug** — URL path, auto-generated from title (required)
- **SEO Title** — Custom browser tab title (optional, falls back to Title)
- **SEO Description** — Search engine description (recommended: 150-160 characters)
- **Sections** — Drag-and-drop content blocks (Hero, Stats, CTA)

### Service Tiers

Define delivery service levels shown on the Services page.

**Fields:**
- **Name** — Service tier name (e.g., "Standard RAP")
- **Description** — Brief overview of the service
- **SLA** — Delivery timeframe guarantee
- **Cutoff Time** — Latest time to place an order
- **Price Range** — Pricing indication
- **Features** — List of included features

### Blog Posts

News articles and company updates.

**Fields:**
- **Title** — Article headline (required)
- **Slug** — URL path (required, auto-generated)
- **Author** — Author name
- **Published Date** — Display date for the article
- **Excerpt** — Short summary for listings (2-3 sentences)
- **Body** — Full article content (rich text with formatting)
- **Featured Image** — Header image (recommended: 1200x630px)
- **Category** — Article category tag

### Testimonials

Customer reviews displayed on the home page.

**Fields:**
- **Author** — Customer name
- **Company** — Customer's company
- **Quote** — Testimonial text
- **Rating** — Star rating (1-5)

### Coverage Zones

Service areas displayed on the Coverage page.

**Fields:**
- **City Name** — City or area name
- **Region** — Geographic region
- **Service Types** — Available services in this area

### Industries

Industry-specific content for the Industries page.

**Fields:**
- **Name** — Industry name (e.g., "Legal", "Medical")
- **Description** — How Rap Express serves this industry
- **Key Services** — Relevant service offerings
- **Compliance Notes** — Regulatory requirements met

### FAQs

Frequently asked questions for the Services page.

**Fields:**
- **Question** — The FAQ question
- **Answer** — The response
- **Category** — Grouping category

## Common Tasks

### Publishing a Blog Post

1. Click **Blog Post** in the sidebar → **Create new**
2. Fill in Title, Author, Published Date
3. Write the Excerpt (shown on blog listing page)
4. Write the Body using the rich text editor
5. Upload a Featured Image (crop to 1200x630px recommended)
6. Select a Category
7. Click **Publish** in the bottom bar

### Editing Existing Content

1. Navigate to the content type in the sidebar
2. Click the document you want to edit
3. Make your changes
4. Click **Publish** to make changes live

### Uploading Images

- Drag and drop images into image fields
- Recommended formats: WebP, JPEG, PNG
- Sanity automatically optimizes and serves via CDN
- Set alt text for accessibility (required for all images)

### Rich Text Formatting

The body editor supports:
- **Bold**, *italic*, ~~strikethrough~~
- Headings (H2, H3, H4 — never use H1, it's reserved for the page title)
- Bulleted and numbered lists
- Links (internal and external)
- Block quotes
- Images inline

## Form Response Workflows

### Quote Requests

1. Submissions arrive via email notification to the dispatch inbox
2. Review in HubSpot CRM (Quotes pipeline)
3. Respond to customer within 30 minutes (business hours)
4. Update deal stage in CRM as quote progresses

### Portal Access Requests

1. Email notification received by operations
2. Review in HubSpot CRM (Portal Onboarding pipeline)
3. If approved, use admin API to trigger onboarding workflow
4. Follow manual Courier Complete setup (see `docs/portal-onboarding.md`)

### Contact Form Submissions

1. Email notification to dispatch inbox
2. Review and respond via email
3. If it's a potential client, create CRM contact manually

### STAT Requests (Urgent)

1. SMS alert sent to on-call dispatcher immediately
2. Email notification also sent
3. Call customer within minutes to confirm pickup
4. Log response time in CRM

### Job Applications

1. Email notification to HR/operations
2. Review in HubSpot CRM (Applications pipeline)
3. Download resume from attached link
4. Update application status as it progresses

## Tips

- **Preview before publishing** — Use the Preview feature to see how content looks
- **Keep URLs short** — Slugs should be concise and descriptive (e.g., "holiday-delivery-schedule")
- **Image alt text** — Always describe what's in the image for accessibility
- **Consistent formatting** — Use the same heading levels and structure across posts
- **Schedule posts** — Set a future Published Date to plan content in advance
