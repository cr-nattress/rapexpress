# Launch Runbook

## Pre-Launch Checklist

### 1. Content & Design (T-7 days)

- [ ] All pages populated with final copy (no placeholder text)
- [ ] All images uploaded and optimized in CMS
- [ ] Testimonials entered and approved
- [ ] Blog has at least 2-3 initial posts
- [ ] Service tier details verified with operations
- [ ] Contact information verified (phone, email, address)
- [ ] Legal pages reviewed (privacy policy, terms of service)

### 2. Technical Verification (T-5 days)

- [ ] Production build succeeds with no errors
- [ ] All API routes tested with real data
- [ ] Supabase database migrations applied to production
- [ ] Environment variables set in Vercel:
  - [ ] `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - [ ] `NEXT_PUBLIC_SANITY_DATASET`
  - [ ] `SANITY_API_TOKEN`
  - [ ] `NEXT_PUBLIC_SUPABASE_URL`
  - [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - [ ] `SUPABASE_SERVICE_ROLE_KEY`
  - [ ] `STRIPE_SECRET_KEY`
  - [ ] `STRIPE_WEBHOOK_SECRET`
  - [ ] `SENDGRID_API_KEY`
  - [ ] `SENDGRID_FROM_EMAIL`
  - [ ] `TWILIO_ACCOUNT_SID`
  - [ ] `TWILIO_AUTH_TOKEN`
  - [ ] `TWILIO_PHONE_NUMBER`
  - [ ] `DISPATCH_PHONE_NUMBER`
  - [ ] `HUBSPOT_API_KEY`
  - [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID`
  - [ ] `NEXT_PUBLIC_SITE_URL`
- [ ] Stripe webhook endpoint configured and tested
- [ ] SendGrid sender domain verified
- [ ] Twilio phone number provisioned and tested
- [ ] HubSpot pipelines created (Quotes, Portal Onboarding, Applications)

### 3. SEO & Analytics (T-3 days)

- [ ] Google Analytics 4 property created
- [ ] GA4 measurement ID deployed
- [ ] Google Search Console domain verified
- [ ] Sitemap submitted to Search Console
- [ ] Schema.org validation passes (test with Google Rich Results)
- [ ] OpenGraph tags verified (test with Facebook Sharing Debugger)
- [ ] Twitter Card tags verified (test with Twitter Card Validator)
- [ ] robots.txt accessible and correct

### 4. QA & Testing (T-2 days)

- [ ] Lighthouse scores 90+ on all key pages
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Mobile responsive testing (iOS Safari, Android Chrome)
- [ ] Form submission tested end-to-end (each form type)
- [ ] Email notifications arriving correctly
- [ ] SMS STAT alerts working
- [ ] CRM deals created for each form type
- [ ] 404 page displays correctly
- [ ] All internal links working (no broken links)

### 5. Stakeholder Sign-Off (T-1 day)

- [ ] Client walkthrough completed
- [ ] Content approved in writing
- [ ] CMS training session conducted
- [ ] Emergency contacts documented
- [ ] Rollback plan reviewed and approved

## Go-Live Procedure

### DNS Update

1. **Backup current DNS records** — Screenshot or export current configuration
2. **Update DNS** — Point domain to Vercel:
   - A record: `76.76.21.21`
   - Or CNAME: `cname.vercel-dns.com`
3. **SSL certificate** — Vercel auto-provisions via Let's Encrypt
4. **Verify propagation** — Check with `dig rapexpress.com` or online DNS checker
5. **Test HTTPS** — Confirm `https://rapexpress.com` loads correctly

### Verification (First 30 Minutes)

- [ ] Homepage loads correctly
- [ ] All pages accessible and rendering
- [ ] Forms submit successfully
- [ ] Email notifications arriving
- [ ] GA4 receiving events
- [ ] SSL certificate valid
- [ ] www redirect working
- [ ] Old URLs redirect properly (if applicable)

### Communications

- [ ] Update Google My Business with new website URL
- [ ] Email blast to existing clients announcing new website
- [ ] Social media posts (Facebook, LinkedIn)
- [ ] Update email signatures with new website
- [ ] Notify partners and vendors

## Post-Launch Monitoring (48 Hours)

### Hour 1-4

- Monitor Vercel deployment dashboard for errors
- Check runtime logs for API errors
- Verify form submissions flowing through
- Confirm email/SMS notifications working

### Day 1

- [ ] Review GA4 data — traffic, bounce rate, conversions
- [ ] Check Search Console for crawl errors
- [ ] Review form submissions in CRM
- [ ] Check Vercel analytics for performance metrics
- [ ] Address any reported issues

### Day 2

- [ ] Review cumulative analytics data
- [ ] Check error logs for recurring issues
- [ ] Gather initial user feedback
- [ ] Document any bugs or improvements for backlog

## Rollback Plan

If critical issues arise during launch:

1. **Revert DNS** — Point domain back to previous hosting
2. **Vercel rollback** — Use Vercel dashboard to deploy previous version
3. **Database** — Supabase point-in-time recovery if data issues

### Decision Matrix

| Severity | Action | Timeline |
|----------|--------|----------|
| Pages not loading | Rollback DNS immediately | Minutes |
| Forms broken | Fix and redeploy | 1-2 hours |
| Styling issues | Hotfix and redeploy | 2-4 hours |
| Minor content errors | Fix in CMS | Same day |

## Emergency Contacts

| Role | Contact | Phone |
|------|---------|-------|
| Developer | TBD | TBD |
| Rap Express Operations | TBD | TBD |
| Vercel Support | support@vercel.com | — |
| Domain Registrar | TBD | TBD |

## Post-Launch Review Template

After 48 hours, create a review document covering:

1. **Traffic metrics** — Sessions, users, page views, bounce rate
2. **Conversion metrics** — Quote submissions, contact forms, portal requests
3. **Performance** — Lighthouse scores, Core Web Vitals
4. **Issues encountered** — Bugs found and resolved
5. **User feedback** — Qualitative feedback from stakeholders and users
6. **Action items** — Follow-up tasks for post-launch backlog
