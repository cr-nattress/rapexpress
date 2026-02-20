# AI Agent Guidelines for Rap Express

## How to Propose UI Changes

1. **Read the design contract** — every shared component has a JSDoc header documenting INTENT, UX_CONSTRAINTS, STATES, A11Y, RESPONSIVE, and PITFALLS. Respect these before modifying.
2. **Check `docs/design/`** — tokens, component patterns, and content tone are documented there.
3. **Prefer existing components** — use `Button`, `Card`, `Section`, `Container`, `FormField`, `Tag`, `StatBlock` from `@/components/ui` and `@/components/forms/form-field`. Do not create new primitives without justification.
4. **Follow the variant system** — components use variant props (e.g., `variant="primary"`) rather than ad-hoc className overrides.
5. **Use `buttonVariants(variant, size)` for links** — this function takes positional args, NOT an object. Never use `buttonVariants({ variant: "primary" })`.

## Required Validations Before Merging UI Changes

| Check | How |
|-------|-----|
| Lint passes | `npm run lint` |
| Tests pass | `npm run test` |
| Build succeeds | `npm run build` |
| Storybook renders | `npm run storybook` (if stories were added/changed) |
| A11y basics | eslint-plugin-jsx-a11y rules pass; manual keyboard test for interactive elements |
| Responsive | Test at 375px (mobile), 768px (tablet), 1280px (desktop) |
| States covered | loading, empty, error, success states exist where applicable |

## How to Update Docs Alongside Code

- **New component** — add a JSDoc design contract header and a Storybook story.
- **New page/route** — add metadata export (title, description) and consider adding to `sitemap.ts`.
- **Design token change** — update `docs/design/tokens.md` to match `globals.css`.
- **New UI pattern** — document in `docs/design/patterns.md`.
- **Known gotcha discovered** — add to `docs/ui-landmines.md`.

## Key Conventions

- **Styling**: Tailwind CSS v4 with custom theme in `src/app/globals.css` (`@theme {}` block). No tailwind.config file.
- **Colors**: `navy-*` (brand primary), `orange-*` (brand accent/CTA), `gray-*` (neutrals), semantic `success`/`warning`/`error`.
- **Component exports**: All shared UI components barrel-exported from `@/components/ui/index.ts`.
- **Forms**: Use `FormField` wrapper + `Input`/`Textarea`/`Select` from `@/components/forms/form-field`.
- **Validation**: Zod schemas in `src/lib/validations.ts`. Use `.safeParse()` and check `.issues` (not `.errors`).
- **API responses**: Use helpers from `src/lib/api-response.ts`.
- **CMS**: Sanity with GROQ queries in `src/sanity/lib/queries.ts`.
- **Database**: Supabase with lazy-initialized client via `getSupabase()` from `src/lib/supabase.ts`.
- **Commits**: Conventional commits enforced by commitlint + husky.

## File Structure Quick Reference

```
src/
  app/              # Next.js App Router (pages, layouts, API routes)
  components/
    ui/             # Shared design system primitives
    forms/          # Form components (FormField, Input, StatModal)
    home/           # Homepage sections
    services/       # Service page components
    coverage/       # Coverage page components
    layout/         # Header, Footer
    marketing/      # Newsletter signup
  lib/              # Utilities (validation, API, notifications, CRM, payments)
  sanity/           # CMS client, schemas, queries
docs/
  ai/              # AI agent guidelines (you are here)
  design/          # Design tokens, components, patterns, content
  qa/              # QA reports
```
