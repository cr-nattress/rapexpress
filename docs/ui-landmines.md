# UI Landmines

Known gotchas and tricky mechanics. Read before modifying UI code.

## buttonVariants() Takes Positional Args

```tsx
// CORRECT
buttonVariants("primary", "lg")

// WRONG — will crash at runtime
buttonVariants({ variant: "primary", size: "lg" })
```

The function signature is `buttonVariants(variant, size)`. If you need to add custom classes, concatenate:

```tsx
`${buttonVariants("primary")} mt-4 w-full`
```

## HeroImage Requires Parent Layout

`HeroImage` renders with `position: absolute` via `next/image` `fill` prop. The parent `<section>` **must** have:
- `relative` — so the image positions within it
- `overflow-hidden` — so the image doesn't bleed out

Content inside the section **must** have `relative` (or a higher z-index) to appear above the image and gradient overlay.

```tsx
// This will render content BEHIND the image (invisible):
<section className="bg-navy-900">  {/* missing relative overflow-hidden */}
  <HeroImage src="..." alt="..." />
  <div>Content here is invisible</div>  {/* missing relative */}
</section>
```

## Next.js Image Quality Config

`next/image` quality must match Next.js configured qualities. Currently using `quality={75}`. Changing to an unconfigured value (e.g., 80) will produce a build warning.

## Tailwind CSS v4 — No Config File

This project uses Tailwind v4 with `@import "tailwindcss"` and `@theme {}` blocks in `globals.css`. There is **no** `tailwind.config.js/ts` file. Custom colors, fonts, and sizes are defined in the `@theme` block.

To add a new design token, add it to `src/app/globals.css` inside `@theme {}`:

```css
@theme {
  --color-brand-new: #abc123;
}
```

## StatModal Has No Focus Trap

The `StatModal` component uses `role="dialog"` and `aria-modal="true"` but does **not** implement a focus trap. Users can Tab out of the modal into background content. This is a known accessibility gap — a focus trap library (e.g., `focus-trap-react`) would fix it.

## z-index Layers

| z-index | Element |
|---------|---------|
| `z-50` | StatModal overlay |
| `z-40` | Header (if made sticky — currently static) |
| (default) | Everything else |

The header is currently not sticky. If you make it sticky, use `z-40` and ensure modals (`z-50`) still layer above.

## Form State Is Local

All forms (contact, quote, tracking, careers, stat-modal) manage state with local `useState`. There is no global form library (no react-hook-form, no formik). The pattern is:

```tsx
const [formData, setFormData] = useState({...});
const [errors, setErrors] = useState<Record<string, string>>({});
const [submitted, setSubmitted] = useState(false);
const [submitting, setSubmitting] = useState(false);
```

Validation is inline in `handleSubmit`. Server-side validation uses Zod schemas from `src/lib/validations.ts`.

## Client vs Server Components

- Pages with forms or interactive state are `"use client"` (contact, quote, tracking, careers).
- Pages that are purely presentational are server components (services, industries, coverage, api-docs).
- Metadata must be exported from a **server** component. For client pages, metadata is in a separate `layout.tsx` file.

## Supabase Lazy Init

`getSupabase()` in `src/lib/supabase.ts` returns `null` if env vars aren't set. All API routes that use it must check for `null`:

```tsx
const supabase = getSupabase();
if (!supabase) {
  // Handle gracefully — log and continue
}
```

## SVG Icons Are Inline

All icons are inline SVGs, not from a library. They use `aria-hidden="true"` for decorative icons. If an icon is the only content of a button, the button needs `aria-label`.

## Scroll Behavior

No scroll locking is implemented. When `StatModal` opens, the background can still scroll. This is a known UX gap.
