# Rap Express

Colorado Springs' trusted same-day courier since 1984. This is the company website built with Next.js 16, React 19, and Tailwind CSS v4.

## Quick Start

```bash
npm install
npm run dev          # http://localhost:3000
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Lint source files |
| `npm run test` | Run unit tests |
| `npm run storybook` | Start Storybook component explorer |
| `npm run format` | Format all files with Prettier |

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router + Turbopack)
- **UI**: [React 19](https://react.dev/) + [Tailwind CSS 4](https://tailwindcss.com/)
- **CMS**: [Sanity](https://www.sanity.io/) (blog posts, service tiers, FAQs)
- **Database**: [Supabase](https://supabase.com/) (form submissions, quotes, applications)
- **Validation**: [Zod](https://zod.dev/)
- **Testing**: [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/)
- **Hosting**: [Vercel](https://vercel.com/)

## Documentation

| Doc | Description |
|-----|-------------|
| [Setup Guide](docs/setup.md) | Environment variables and local setup |
| [Integrations](docs/integrations.md) | Supabase, Stripe, SendGrid, Twilio, CRM |
| [CMS Guide](docs/cms.md) | Sanity schema and content model |
| [CMS Training](docs/cms-training.md) | How to manage content in Sanity |
| [Launch Runbook](docs/launch-runbook.md) | Go-live checklist |

### Design & UI

| Doc | Description |
|-----|-------------|
| [Design Tokens](docs/design/tokens.md) | Colors, typography, spacing, radii |
| [Component Reference](docs/design/components.md) | Canonical usage for shared components |
| [UI Patterns](docs/design/patterns.md) | Empty, loading, error, success state patterns |
| [Content Guidelines](docs/design/content.md) | Microcopy tone, error templates, terminology |
| [UI Landmines](docs/ui-landmines.md) | Known gotchas and tricky mechanics |

### AI & Contribution

| Doc | Description |
|-----|-------------|
| [AI Guidelines](docs/ai/ai-guidelines.md) | How AI agents should propose UI changes |
| [UX Checklist](docs/ai/ux-checklist.md) | Responsive, a11y, states checklist |
| [Definition of Done](docs/ai/definition-of-done.md) | Completion criteria for UI work |
| [Contributing](CONTRIBUTING.md) | PR checklist and project conventions |

### QA

| Doc | Description |
|-----|-------------|
| [Accessibility Report](docs/qa/accessibility-report.md) | WCAG 2.1 AA audit results |
