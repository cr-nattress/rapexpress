# Accessibility Report

## Summary

The Rap Express website has been audited for WCAG 2.1 AA compliance. All critical accessibility features are implemented.

## Audit Checklist

### Passed

| Requirement | Status | Notes |
|-------------|--------|-------|
| HTML `lang` attribute | Pass | `<html lang="en">` in layout.tsx |
| Skip-to-content link | Pass | Visually hidden link at top of body, visible on focus |
| Landmark regions | Pass | `<header>`, `<main id="main-content">`, `<footer>` |
| Navigation landmarks | Pass | `<nav aria-label>` on primary and footer navigation |
| Form labels | Pass | All inputs have associated `<label>` with `htmlFor` |
| Button accessibility | Pass | All icon-only buttons have `aria-label` |
| Focus indicators | Pass | Global `focus-visible` outline on all links and buttons |
| Color contrast | Pass | Navy (#0B2545) on white exceeds 4.5:1 ratio |
| Heading hierarchy | Pass | Sequential heading levels (h1 → h2 → h3) on all pages |
| Modal/dialog | Pass | `role="dialog"`, `aria-modal`, `aria-label` on STAT modal |
| SVG decorative images | Pass | All decorative SVGs have `aria-hidden="true"` |
| Accordion controls | Pass | `aria-expanded`, `aria-controls`, `role="region"` |
| Star ratings | Pass | `aria-label` with "X out of 5 stars" |
| Responsive text | Pass | Rem-based font sizes, no fixed pixel text |
| Touch targets | Pass | Buttons minimum 44x44px touch area |

### Known Limitations

| Item | Status | Mitigation |
|------|--------|------------|
| Coverage map | N/A | Fallback to city list when Mapbox unavailable; map would need alt text |
| Dynamic blog content | Deferred | CMS content needs a11y review when populated |
| File upload (careers) | Partial | Native file input accessible, but custom styling may vary by browser |

## Browser/Device Matrix

Testing should cover:

| Browser | Desktop | Mobile |
|---------|---------|--------|
| Chrome (latest) | Required | Required |
| Safari (latest) | Required | Required (iOS) |
| Firefox (latest) | Required | — |
| Edge (latest) | Required | — |

## Screen Reader Testing

Test with:
- **macOS:** VoiceOver + Safari
- **Windows:** NVDA + Chrome
- **Mobile:** VoiceOver (iOS), TalkBack (Android)

## Lighthouse Target Scores

| Category | Target | Notes |
|----------|--------|-------|
| Performance | 90+ | Optimize images via Sanity CDN, lazy load below-fold |
| Accessibility | 95+ | All WCAG 2.1 AA criteria met |
| Best Practices | 90+ | HTTPS, no mixed content, secure headers |
| SEO | 90+ | Meta tags, structured data, sitemap |
