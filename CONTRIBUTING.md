# Contributing to Rap Express

## Getting Started

```bash
npm install
npm run dev        # Start dev server on localhost:3000
npm run test       # Run unit tests
npm run lint       # Lint src/
npm run storybook  # Start Storybook (component explorer)
```

## Code Standards

- **TypeScript**: Strict mode enabled. No `any` types.
- **Formatting**: Prettier (auto-formatted on save; run `npm run format` to fix all).
- **Linting**: ESLint with Next.js rules + jsx-a11y. Run `npm run lint` before committing.
- **Commits**: Conventional commits enforced by commitlint (`feat:`, `fix:`, `chore:`, `docs:`, etc.).
- **Styling**: Tailwind CSS v4. Custom tokens in `src/app/globals.css`. No tailwind.config file.

## UI Change PR Checklist

Before submitting a PR that changes UI, verify:

- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
- [ ] `npm run test` passes
- [ ] Tested at 375px, 768px, and 1280px+ viewports
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] JSDoc design contract added/updated for modified components
- [ ] Storybook story added/updated (for reusable components)
- [ ] Screenshot attached for visual changes
- [ ] Design tokens updated in `docs/design/tokens.md` (if changed)
- [ ] Gotchas documented in `docs/ui-landmines.md` (if discovered)

## Documentation

| Doc | Purpose |
|-----|---------|
| [AI Guidelines](docs/ai/ai-guidelines.md) | How to propose and validate UI changes |
| [UX Checklist](docs/ai/ux-checklist.md) | Responsive, a11y, states checklist |
| [Definition of Done](docs/ai/definition-of-done.md) | Completion criteria for UI work |
| [Design Tokens](docs/design/tokens.md) | Colors, typography, spacing, radii |
| [Component Reference](docs/design/components.md) | Canonical usage for shared components |
| [UI Patterns](docs/design/patterns.md) | Empty, loading, error, success states |
| [Content Guidelines](docs/design/content.md) | Microcopy tone, error templates |
| [UI Landmines](docs/ui-landmines.md) | Known gotchas and tricky mechanics |

## Project Structure

```
src/
  app/              # Pages, layouts, API routes (Next.js App Router)
  components/
    ui/             # Shared design system (Button, Card, Section, etc.)
    forms/          # Form components (FormField, Input, StatModal)
    home/           # Homepage sections
    services/       # Service page components
    coverage/       # Coverage components
    layout/         # Header, Footer
    marketing/      # Newsletter signup
  lib/              # Utilities (validation, API, notifications)
  sanity/           # CMS client, schemas, queries
docs/               # Project documentation
public/             # Static assets (images)
```

## Adding a New Component

1. Create the component in the appropriate `src/components/` subdirectory.
2. Add a JSDoc design contract header (see existing components for format).
3. Export from the relevant barrel file (`index.ts`).
4. Add a Storybook story covering default, disabled, error, and edge-case states.
5. Add unit tests for key behaviors.

## Adding a New Page

1. Create `src/app/{route}/page.tsx`.
2. Export metadata (title, description) — use a `layout.tsx` if the page is `"use client"`.
3. Add the route to `src/app/sitemap.ts`.
4. Use the hero section pattern from `docs/design/patterns.md`.
