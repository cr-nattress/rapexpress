# US-003: Design System Tokens & Components

**Epic:** Foundations

## Description
- Define typography scale, color palette (navy/orange/gray), spacing system, shadows, button variants.
- Implement Tailwind (or CSS variables) reflecting tokens.
- Build base components: Button, Tag, Card shell, Stat block, Section wrapper, Grid utilities.
- Document usage in Storybook or MDX reference.

## Acceptance Criteria
- Tokens stored centrally (e.g., `tokens.json` or Tailwind config) and referenced across components.
- Storybook (or equivalent) running with documented components.
- Accessibility check (contrast ratios) passes for primary/secondary colors.

## Dependencies
- US-001 (environment). Possibly photography decisions later.
