# US-001: Environment & Tooling Setup

**Epic:** Foundations  
**Goal:** Stand up repo, CI/CD, and base tooling so designers/devs can work in parallel.

## Description
- Initialize Next.js + TypeScript repo hosted on GitHub.
- Configure Vercel project with preview deployments per branch.
- Add ESLint, Prettier, Husky hooks, commitlint.
- Create `.env.example` with placeholders (CMS, Supabase, Stripe, Google Maps, Twilio).

## Acceptance Criteria
- `npm run lint` and `npm run test` (if placeholder tests) succeed in CI.
- Push to `main` triggers Vercel build with success notification.
- Documentation `docs/setup.md` outlines how to clone, install, run dev server, and add env vars.

## Dependencies
- None.

## Notes
- Use GitHub Projects board to track all backlog stories.
