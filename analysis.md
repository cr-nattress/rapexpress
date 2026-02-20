# Rap Express Discovery Notes

_Last updated: 2026-02-19_

## 1. Collected Assets

| Asset | Location |
|-------|----------|
| Full HTML scrape (five public pages + manifest) | `~/git/rapexpress/site-scrape/www.rapxpress.com/`
| Plain-text extracts for each page | `*.clean.txt` inside the directory above |
| Downloaded hero/brand/payment images (26 files from the CDN) | `~/git/rapexpress/site-assets/` |
| High-resolution screenshots (home, courier service, tracking portal, contact, employment) | `~/git/rapexpress/screenshots/` |

These folders can be versioned in Git or zipped for handoff. The text dumps are handy for copy rewrites and keyword analysis.

## 2. Business Snapshot (from current site)

- **Company:** Rap Express, Inc. (locally owned courier founded 1984)
- **Service area:** Colorado Springs, Denver Metro, Pueblo, Canon City, Front Range; emphasis on same-day + scheduled routes.
- **Service tiers:**
  - **Standard RAP:** 3-hour window within Colorado Springs (ready by 2 PM)
  - **Same Day:** Delivered by 5 PM (ready by noon)
  - **Stat:** 90-minute rush (ready by 2 PM)
  - **Overnight / Priority Overnight:** Delivered by noon or 10 AM next day (70 minutes pickup lead)
  - **Special:** Direct/after-hours/holidays with surcharges
- **Operations:** Fleet of uniformed drivers using Courier Complete dispatch + handhelds; bonded/insured; accepts online payments (credit cards + PayPal).
- **Contact:** 2486 Waynoka Rd, Colorado Springs, CO 80915 · (719) 597-9667 · Dispatch window 7:30 AM – 5:30 PM weekdays.
- **Team:** President Tom Dubel, Dispatch Manager Wayne Weyerman.
- **Client portal:** Powered by Complete Innovations + AT&T for order tracking, notifications, POD, invoices.

## 3. Current Site Diagnostics

| Area | Observations | Opportunities |
|------|--------------|---------------|
| **Platform/Tech** | Site is built on Duda (see `SiteType: DUDAONE`). Heavy inline scripts, duplicated navigation, minimal performance optimizations. | Rebuilding in Next.js / Astro / modern stack will improve Core Web Vitals, allow modular content, integrate CMS/CRM. |
| **Brand & Messaging** | Tagline “Your Business Is Our Priority” + “Serving the Front Range Since 1984.” No proof (case studies, stats, testimonials). Visuals look generic/stock. | Introduce brand story (family-owned, 40-year legacy), highlight differentiators (two dispatchers, bonded drivers, same-day coverage). Add photography of fleet/team. |
| **UX & IA** | All pages share same hero and nav repeated twice (likely template bug). Buttons labelled “Button”. CTAs mostly “Contact Us” with no forms except on contact/employment. Tracking page lacks login info beyond “call us”. | Clean up IA: Home (overview), Services (detailed service cards with SLA & pricing), Industries served (legal, medical, defense), Coverage map, Portal CTA with request form, Careers portal. Use consistent CTA copy (“Schedule a delivery”, “Request a quote”). |
| **Content & SEO** | Titles duplicate, no meta descriptions, no schema. Copy lacks keywords like “Colorado Springs courier”, “same-day delivery”, “Front Range logistics”. Sitemap absent. | Implement keyword-focused copy, metadata, schema for LocalBusiness + Service. Add blog/resources for shipping tips, compliance (HIPAA/legal). |
| **Trust & Social Proof** | No reviews, testimonials, client logos, certifications, or safety stats. Payment logos appear twice but link nowhere. | Pull Yelp/Google reviews, add testimonials, mention long-term clients (with permission). Add proof of insurance/bonding, fleet size, average response times. |
| **Conversion Paths** | Only a generic contact form. No quick quote, no scheduling wizard, no portal sign-up capture. Phone number repeated but not clickable on desktop. | Build multi-step quote form, portal request workflow, online payment embed, live chat/AI concierge for after-hours requests. |
| **Accessibility** | Text overlays on busy image, insufficient color contrast, navigation repeated causing screen-reader noise. | Use semantic headings, accessible forms, proper alt text for brand images, reduce redundant nav items. |

## 4. Page Content Inventory

### Home
- Hero: “Your Business Is Our Priority / Serving The Front Range Since 1984” with CTA to contact.
- Value props: personalized service vs. corporate couriers, fleet with handhelds, two dispatchers, bonded & insured, smart-phone workflow, pre-printed forms.
- CTA blocks: “Schedule a delivery”, “Ready to RAP?”, contact details, online payment note.

### Courier Service
- Service cards for six delivery speeds (described above) with requirements (cutoff times, delivery windows) but no pricing.

### Tracking / Client Portal
- Explains portal benefits (tracking, notifications, POD, invoices) and technology stack (AT&T + Courier Complete). CTA is “Contact us to set up portal.”

### Contact Us
- Form collecting name/phone/email/details, instructions to call dispatch for specifics, business address/hours repeated, placeholder social buttons.

### Employment
- Recruiting copy for part-time/full-time drivers (semi-retired target). Links to Monster.com ad, application download (PDF) + notary requirement. Form for uploading application & driving record. Lists leadership contacts.

## 5. Competitor Scan

| Competitor | Offerings & Positioning | Digital Observations | Takeaways |
|------------|-------------------------|----------------------|-----------|
| **Couriers Colorado** ([site](https://www.courierscolorado.com/locations/colorado-springs)) | Statewide courier network with sedans → freight trucks. Specialized medical & legal courier services, HIPAA/OSHA trained drivers, covers Colorado Springs healthcare + courts. | Strong local SEO page per city, detailed copy on industries, fleet list, highlight GPS tracking. Offers online quoting and 24/7 dispatch. | Need to spotlight Rap’s specialization (e.g., defense corridor, personalized dispatch) and add industry-specific content & quote workflow to compete. |
| **Denver Boulder Couriers** ([site](https://dbcouriers.com/colorado-springs-courier-services)) | 30+ years same-day service along entire Front Range; legal messenger/process service, coverage up to Fort Collins. | Content emphasizes geographic expertise, multi-vehicle fleet, quick quote CTA, phone prominent. Modern layout with hero imagery. | Rap Express should showcase coverage map + multi-city runs and integrate quote CTA on every page. |
| **Colorado Courier Co.** ([site](https://www.coloradocourier.co/)) | Modern on-demand courier in Denver metro with 4 service speeds, transparent coverage list (dozens of cities). | Minimalist design, interactive service area list, targeted landing pages. Likely app-based ordering. | Users expect clean UI, service tiers, coverage map. Rap rebuild should deliver similar clarity + upcoming app/portal messaging. |

(See Yelp + Facebook for additional social proof references; Yelp reviews highlight responsiveness.)

## 6. Rebuild Ideas / Requirements

1. **Architecture**
   - Home (hero, differentiators, industries, testimonials, service tiers).
   - Services (detailed cards with SLA, price ranges, add-ons, after-hours policy).
   - Industries (legal, medical, aerospace/defense, e-commerce, lab).
   - Coverage & fleet (map, towns served, vehicle types, average ETA).
   - Technology & tracking (portal tease, integration with Courier Complete, API/webhooks for enterprise clients).
   - Careers (ATS integration, downloadable packet, culture/benefits, driver spotlight).
   - Contact / quote (multi-step wizard + scheduling, integrate with CRM + email triggers).

2. **Functionality**
   - Instant quote or “schedule now” form with priority level, pickup/drop-off, weight, special instructions.
   - Portal CTA: allow clients to request login or deep link to Courier Complete with help docs.
   - Online payments (Stripe/QuickBooks) embedded rather than vague statement.
   - Testimonials slider fed from Yelp/Google via API.
   - Real-time chatbot or callback scheduler for dispatch.

3. **Design & Content**
   - Replace stock photography with actual fleet/building/team imagery (shoot on-site).
   - Use bold color palette (e.g., navy + safety orange) for logistics vibe.
   - Provide hero stats (avg pickup time, on-time rate, number of runs/day, years in business).
   - Include compliance badges (bonded, insured, HIPAA-trained, TSA-approved if applicable).

4. **SEO & Marketing**
   - Schema.org LocalBusiness + Service, embed Google Map, add FAQ with structured data.
   - Blog/resource hub for shipping tips, regulatory updates, holiday cutoff calendars.
   - Build landing pages for key cities (Colorado Springs, Pueblo, Denver, Canon City) + industries to capture long-tail searches.

5. **Operations Integration**
   - Connect forms to CRM (HubSpot/Airtable) for dispatch follow-up.
   - Trigger email/SMS to dispatch when urgent STAT request submitted after hours.
   - Provide driver hiring funnel with DocuSign + background check instructions.

## 7. Next Steps

1. **Content interviews:** Talk with Tom & Wayne about differentiators, fleet size, SLAs, client stories, portal screenshots.
2. **Photography/video:** Schedule shoot for fleet, facility, leadership to replace stock imagery.
3. **IA & wireframes:** Draft sitemap + low-fidelity wireframes capturing the flows above.
4. **CMS decision:** Choose stack (Next.js + Sanity/Contentful) to allow marketing team edits.
5. **Portal integration plan:** Document how Courier Complete portal login/signup works so we can embed or deep-link properly.
6. **Compliance & legal:** Verify insurance certificates, service contracts, and embed accessible PDFs where needed.

With these assets captured locally, we can now experiment freely without repeatedly hitting the live site.
