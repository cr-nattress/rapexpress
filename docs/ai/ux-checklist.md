# UX Checklist for UI Changes

Use this checklist when implementing or reviewing any UI change.

## Responsive

- [ ] Works at 375px width (mobile)
- [ ] Works at 768px width (tablet)
- [ ] Works at 1280px+ width (desktop)
- [ ] Touch targets are at least 44x44px on mobile
- [ ] No horizontal scroll on any viewport
- [ ] Text remains readable without zooming on mobile

## Accessibility

- [ ] All interactive elements are keyboard-reachable (Tab order)
- [ ] Focus states are visible (orange-500 ring, already global)
- [ ] Images have meaningful `alt` text (or `alt=""` + `aria-hidden` for decorative)
- [ ] Form inputs have associated `<label>` elements (via `FormField`)
- [ ] Error messages use `role="alert"`
- [ ] Modals trap focus and have `role="dialog"` + `aria-modal="true"`
- [ ] Color contrast meets WCAG AA (4.5:1 for normal text, 3:1 for large text)
- [ ] Required fields marked with `aria-required` or visible indicator

## States

- [ ] **Default/idle** state renders correctly
- [ ] **Loading** state shows spinner or skeleton (for async operations)
- [ ] **Empty** state provides guidance (for lists, search results, dashboards)
- [ ] **Error** state shows actionable message with recovery path
- [ ] **Success** state confirms the action completed
- [ ] **Disabled** state is visually distinct and non-interactive

## Content & Copy

- [ ] Follows tone guidelines in `docs/design/content.md`
- [ ] Error messages are specific and actionable (not "Something went wrong")
- [ ] Button labels describe the action ("Send Message" not "Submit")
- [ ] No truncated text without tooltip or expand option

## Performance

- [ ] Images use `next/image` with appropriate `sizes` prop
- [ ] Large lists consider virtualization (>100 items)
- [ ] Client components use `"use client"` only when needed
- [ ] No layout shift (CLS) on load — reserve space for async content
