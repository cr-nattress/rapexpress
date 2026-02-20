# US-030: Database & Core API

**Epic:** Backend/Integrations

## Description
- Provision Supabase (Postgres) project.
- Create tables for quotes, jobs, portal_requests, testimonials, blog_posts, service_tiers, coverage_zones.
- Build Next.js API routes (or serverless functions) for quote submission, portal request, contact, careers.

## Acceptance Criteria
- Migrations checked into repo.
- API endpoints accept/validate payloads, persist data, return success/failure.
- Unit tests cover happy/edge paths.

## Dependencies
- Environment config, data models from PLAN.
