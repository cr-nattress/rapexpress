# Rap Express Rebuild Plan

_Last updated: 2026-02-19_

This plan consolidates all discovery and competitor research gathered in the `rapexpress` workspace into an actionable blueprint for rebuilding Rap Express’s digital experience. It defines UX strategy, visual system, content requirements, backend/API architecture, integrations, and a prioritized backlog so design and engineering teams can execute without additional context.

---

## 1. Project Objectives

1. **Modernize brand presence** with a fast, trustworthy experience that reflects a 40-year locally owned courier.
2. **Increase conversion rate** by replacing the generic contact form with instant quote, scheduling, and client portal onboarding flows.
3. **Differentiate versus top competitors** (Couriers Colorado, Denver Boulder Couriers, Colorado Courier Co., Trip-Savers, Your Courier Service, Metrobi, Shamrock, Road Runner, Uber Direct, Bald Eagle) by showcasing SLAs, localized expertise, and technology stack.
4. **Unify operations** (dispatch, CRM, payments, portal) through APIs and automation so dispatchers receive clear, structured requests.

---

## 2. Core Audiences & Jobs To Be Done

| Persona | Needs | Opportunities |
|---------|-------|---------------|
| **Operations Manager (local business)** | Reliable same-day/next-day delivery with transparent pricing and proof of delivery. | Instant quote, service-tier cards, real-time tracking dashboard via portal. |
| **Legal Administrator** | On-time filings, chain-of-custody, courthouse familiarity. | Dedicated "Legal" page with SLA, compliance badges, process service workflow. |
| **Medical/Pharma Coordinator** | HIPAA-compliant specimen transport, temperature control, off-hours availability. | Highlight Courier Complete tech, bonded/drug-tested drivers, optional cold-chain partners. |
| **Enterprise Logistics Lead** | Coverage map, multi-city runs, API/webhook integration. | API docs, webhook schema, account manager contact. |
| **Driver Applicant (semi-retired)** | Easy application, culture insight, requirements (background check, notary). | Careers microsite with ATS forms, benefits, video content. |

---

## 3. Information Architecture & Content Map

1. **Home**
   - Hero with value prop + CTA (“Schedule a Delivery” + “Get a Quote”).
   - Stats panel (years in business, on-time %, avg pickup time, fleet size).
   - Service tier overview linking to Services page.
   - Industries slider (Legal, Medical, Defense, Manufacturing, E-Comm).
   - Testimonials (pull from Yelp/Google) + client logos.
   - Technology block (Courier Complete, portal, dispatch team).
   - CTA strip for Portal Request / Quote / Careers.

2. **Services**
   - Cards for Standard RAP, Same Day, Stat, Overnight, Priority Overnight, Special.
   - SLA, cutoff times, coverage notes, price ranges.
   - Add-ons: After-hours surcharge, direct-drive, cold-chain partner, scheduled routes.

3. **Industries**
   - Dedicated sections for Legal, Medical, Defense/Aerospace, E-commerce/3PL, Real Estate/Title.
   - Each section lists pain points, compliance statements, sample clients, CTA to request tailored quote.

4. **Coverage & Fleet**
   - Interactive map (Colorado Springs ↔ Pueblo ↔ Denver ↔ Canon City). Mark mountain resort partners.
   - Fleet gallery (sedans, vans, box trucks) with capability table (payload, dimensions).
   - Dispatch & operations timeline (7:30 AM–5:30 PM standard, on-call flows after hours).

5. **Technology & Tracking**
   - Explain Courier Complete integration, handheld devices, proof-of-delivery, automated notifications.
   - Portal request workflow, link to client login, API/webhook overview for enterprise.
   - Security/compliance badges (bonded, insured, HIPAA-ready, TSA if applicable).

6. **Pricing & Quotes**
   - Tiered pricing examples, zone-based estimator, form to capture pickup/drop-off, weight, priority.
   - Payment options (credit cards, PayPal, ACH) with secure checkout reference.

7. **Careers**
   - Culture video/photos, benefits, requirements, download application, DocuSign / ATS embed, background check instructions.
   - CTA: “Apply Now” (uploads) + contact for HR.

8. **Contact / Support**
   - Multi-channel info (phone, SMS, email, live chat, after-hours hotline).
   - Dispatch escalation paths, FAQ, map.

9. **Blog / Resources**
   - Logistics tips, holiday cutoff calendars, regulatory updates, customer stories.

---

## 4. UX Flows & Components

### 4.1 Quote & Scheduling Flow
1. User selects service priority.
2. Enters pickup/drop-off addresses, package dimensions, special instructions.
3. Form calculates estimated price range (pull from rate table API) and offers two CTAs: “Schedule Now” (creates job) or “Save as Quote” (sends to dispatch).
4. Confirmation page shows job ID, estimated pickup time, ability to upload documents, pay deposit.

### 4.2 Portal Request Flow
1. User selects “Request Portal Access.”
2. Form collects company info, contact, desired features (tracking, invoicing, API).
3. Submission triggers onboarding workflow: dispatch notified via Slack/email + CRM entry.

### 4.3 After-Hours STAT Flow
1. Banner indicates after-hours support.
2. CTA opens modal capturing urgent job info + contact.
3. Backend triggers SMS/email to on-call dispatcher.

### 4.4 Careers Flow
1. Candidate chooses role (Driver FT/PT, Dispatcher, Ops).
2. Guided steps: upload application PDF, driving record, fill form.
3. Confirmation with timeline + HR contact.

### 4.5 Testimonials & Proof Modules
- Carousel pulling review text + rating + source.
- Stats ribbon (served 500+ businesses, 98% on-time, etc.).

---

## 5. Visual & Content System

- **Brand Voice:** Confident, service-driven, friendly. Emphasize local roots and firsthand dispatch expertise.
- **Palette:** Navy (#0B2545), safety orange (#FF6B35), warm gray (#F2F4F7). Use orange for CTAs.
- **Typography:** Sans-serif (e.g., Inter or Source Sans). Headings bold, body medium weight for readability.
- **Imagery:** Commission shoot for fleet, drivers, dispatch, client interactions. Replace stock photography entirely.
- **Iconography:** Line icons for services, compliance badges, technologies.

---

## 6. Technical Architecture

### 6.1 Frontend
- **Framework:** Next.js 15 (App Router) with TypeScript.
- **Styling:** TailwindCSS or CSS Modules; integrate theme tokens.
- **State management:** React Query for data fetching (quotes, testimonials, blog, etc.).
- **CMS:** Sanity or Contentful for page sections, testimonials, blog posts, service tables, FAQs.
- **Map:** Mapbox GL JS or Leaflet for coverage visualization.

### 6.2 Backend / APIs

| Service | Purpose |
|---------|---------|
| **API Gateway (Next.js API routes / serverless)** | Handles quote calculations, submissions, contact forms, careers uploads, portal requests. |
| **Database** | PostgreSQL (Supabase) or MongoDB for storing quotes, leads, portal requests, application submissions, rate tables. |
| **Auth** | Clerk/Auth0 for portal access if building custom client dashboard; otherwise integrate with Courier Complete single sign-on (if available).
| **Dispatch Integration** | Courier Complete lacks open API; use email/SFTP/Zapier triggers or headless browser automation. Document manual steps + future upgrade path. |
| **CRM** | HubSpot or Airtable—store lead records, automate follow-ups. |
| **Payments** | Stripe for deposits / invoice links; QuickBooks integration optional. |
| **Notifications** | Twilio/SendGrid for SMS & email alerts (quote confirmation, STAT alerts). |

#### Data Models (examples)
- `quotes`: id, contact info, pickup_location, dropoff_location, package_details, service_level, status, price_range, created_at.
- `jobs`: id, quote_id, scheduled_datetime, portal_user_id, status, proof_of_delivery_url.
- `portal_requests`: id, company_name, contact, desired_features, status.
- `testimonials`: id, source, rating, text, author, industry, display_flag.
- `blog_posts`, `faq_items`, `service_tiers`, `coverage_zones`.

#### External Integrations
- **Google Maps / Places** for address autocomplete.
- **Zapier/Make** to push form submissions to Courier Complete (email parser) and Slack.
- **DocuSign** for driver onboarding (optional).
- **Google Reviews API** to sync testimonials nightly.

### 6.3 Security & Compliance
- HTTPS everywhere, HSTS.
- Input validation + rate limiting on forms.
- Data encryption at rest (Supabase), S3 for file uploads.
- HIPAA Lite: ensure medical form submissions are encrypted + limited access.

---

## 7. Backlog & Roadmap

### Phase 0 – Foundations (Week 0-1)
1. Set up repo, CI/CD (Vercel), environment variables.
2. Configure CMS schema (Sanity/Contentful) for pages, components, blog.
3. Establish design system tokens + Tailwind theme.

### Phase 1 – UX & Content (Week 1-3)
1. Wireframes for all IA sections.
2. Copy deck for hero, services, industries, portal, careers.
3. Photography plan + shot list.
4. SEO keyword research + metadata plan.

### Phase 2 – Frontend Build (Week 3-7)
1. Layout + navigation + global components (header, footer, CTA ribbons).
2. Home page sections (hero, stats, service overview, testimonials, tech block).
3. Services page with tier cards + rate table.
4. Industries & coverage map.
5. Quote form, portal request form, contact page.
6. Careers page with upload pipeline.
7. Blog/resource hub templates.

### Phase 3 – Backend & Integrations (Week 4-8 concurrent)
1. Build API routes for quote submission, portal request, contact, careers.
2. Connect to Supabase (Postgres) and CRM.
3. Hook up Stripe (payments) + Twilio/SendGrid for notifications.
4. Implement Google Maps autocomplete + Mapbox coverage map.
5. Automate dispatcher alerts (email/SMS) for STAT / after-hours forms.

### Phase 4 – QA & Launch Prep (Week 8-9)
1. Accessibility audit (WCAG 2.1 AA), cross-browser testing.
2. Performance tuning (image optimization, caching, incremental static regen).
3. SEO review (metadata, schema, sitemap, robots).
4. Content entry, final approvals, stakeholder training on CMS.

### Phase 5 – Post-Launch (Week 10+)
1. Add testimonials integration (Google/Yelp sync).
2. Build dashboards for portal users (if required) + API docs.
3. Expand to city-specific landing pages (Pueblo, Denver, Canon City) using CMS templates.
4. Launch marketing campaigns (blog cadence, LinkedIn posts, case studies).

---

## 8. Success Metrics

- **Conversion:** +30% increase in qualified quote submissions within 90 days.
- **Lead Quality:** 80% of web leads enter CRM with complete data.
- **Operational Efficiency:** 50% reduction in manual emails for STAT requests (thanks to automated notifications).
- **SEO:** Top 3 rankings for “Colorado Springs same-day courier,” “Front Range courier service,” “legal courier Colorado Springs.”
- **Recruiting:** 25% more driver applications via careers page vs. prior year.

---

## 9. Open Questions / Dependencies

1. Does Courier Complete offer API/webhook access or do we rely on email ingestion? (Need meeting with vendor.)
2. Confirm insurance/compliance assets (certificates, HIPAA statements) for website.
3. Decide on CRM (HubSpot vs. Airtable) and who owns it internally.
4. Clarify weekend/on-call process to correctly message service availability.
5. Gather testimonials and client logo approvals.

---

## 10. References

- Discovery artifacts (`analysis.md`, screenshots, text extracts in `site-scrape`/`site-assets`).
- Competitor briefs (`competitor-research/*.md`).
- Rapid asset paths summarized in `analysis.md` §1.

This plan should be kept at the project root (`PLAN.md`) and updated as milestones complete.
