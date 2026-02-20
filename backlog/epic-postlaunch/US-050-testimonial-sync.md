# US-050: Testimonial & Review Sync Automation

**Epic:** Post-Launch Enhancements

## Description
- Build nightly job pulling Google/Yelp reviews via API or scraping tool and pushing into CMS testimonial collection (with moderation workflow).
- Display newest reviews on site automatically once approved.

## Acceptance Criteria
- Automated job runs (CRON/Serverless) logging success/failure.
- Admin UI/flag in CMS for "approved" reviews.
- Testimonials component shows live synced data.

## Dependencies
- Live site, API keys for review platforms.
