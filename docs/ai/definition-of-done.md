# Definition of Done — UI/UX Changes

A UI/UX change is complete when all applicable items are checked.

## Code Quality

- [ ] `npm run lint` passes with no new warnings
- [ ] `npm run build` succeeds
- [ ] `npm run test` passes
- [ ] No TypeScript errors (`strict: true`)
- [ ] No new `any` types introduced

## Component Standards

- [ ] JSDoc design contract header added/updated for new or modified components
- [ ] Props have JSDoc descriptions for any non-obvious behavior
- [ ] Component uses existing design system primitives where possible
- [ ] Storybook story added/updated (if component is reusable)

## Visual & UX

- [ ] Matches design intent (screenshot or Storybook verification)
- [ ] Responsive at mobile (375px), tablet (768px), desktop (1280px+)
- [ ] All interactive states covered: default, hover, focus, active, disabled
- [ ] Loading/empty/error states implemented where applicable

## Accessibility

- [ ] Keyboard navigable (Tab, Enter, Escape where applicable)
- [ ] Screen reader tested or aria attributes verified
- [ ] eslint-plugin-jsx-a11y rules pass
- [ ] Color contrast meets WCAG AA

## Documentation

- [ ] Design token changes reflected in `docs/design/tokens.md`
- [ ] New patterns documented in `docs/design/patterns.md`
- [ ] Any gotchas added to `docs/ui-landmines.md`
- [ ] Sitemap updated if new route added

## Testing

- [ ] Unit tests cover key behaviors and edge cases
- [ ] Form validation tested (valid + invalid inputs)
- [ ] a11y attributes tested (roles, aria-labels, error announcements)
