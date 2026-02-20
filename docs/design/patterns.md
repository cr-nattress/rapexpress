# UI/UX Patterns

Recurring patterns used across the Rap Express site.

## Page Structure

Every page follows this structure:

```
<Hero section>         — relative overflow-hidden bg-navy-900, with HeroImage
<Content sections>     — alternating Section variant="default" / variant="gray"
<CTA section>          — final call-to-action (optional)
```

## Hero Sections

All heroes share the same pattern:

```tsx
<section className="relative overflow-hidden bg-navy-900 py-16 md:py-24">
  <HeroImage src="/images/heroes/hero-{page}.png" alt="..." />
  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange-400">
      Eyebrow Text
    </p>
    <h1 className="text-4xl font-bold text-white md:text-5xl">Page Title</h1>
    <p className="mt-4 max-w-2xl text-lg text-gray-300">
      Subtitle description.
    </p>
  </div>
</section>
```

**Key rules**:
- Eyebrow: uppercase, tracking-wider, orange-400
- Title: white, 4xl mobile, 5xl desktop
- Subtitle: gray-300, max-w-2xl

## Empty States

When a list or search has no results:

```tsx
<div className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-center">
  <p className="text-gray-500">No results found.</p>
  <p className="mt-2 text-sm text-gray-400">Try adjusting your search or filters.</p>
</div>
```

## Loading States

For form submissions, use inline button loading:

```tsx
<Button type="submit" disabled={submitting}>
  {submitting ? "Sending..." : "Send Message"}
</Button>
```

For page-level loading (future use with Suspense):

```tsx
<div className="flex items-center justify-center py-16">
  <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-orange-500" />
</div>
```

## Error States

### Form Validation Errors

Inline under each field via `FormField`:

```tsx
<FormField label="Email" name="email" error="Please enter a valid email." required>
  <Input error={true} ... />
</FormField>
```

Error text: `text-sm text-red-600`, wrapped in `role="alert"`.

### API/Server Errors

Banner at top of form:

```tsx
<div className="rounded-lg border border-red-200 bg-red-50 p-4">
  <p className="font-semibold text-red-800">Unable to submit your request</p>
  <p className="mt-1 text-sm text-red-600">Please try again or contact dispatch at (719) 597-9667.</p>
</div>
```

## Success States

After form submission:

```tsx
<div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
    <svg className="h-6 w-6 text-green-600" ...><path d="M5 13l4 4L19 7" /></svg>
  </div>
  <h3 className="text-lg font-bold text-navy-900">Message Sent</h3>
  <p className="mt-2 text-gray-600">
    Thank you. We'll get back to you within one business day.
  </p>
</div>
```

## Section Alternation

Sections alternate backgrounds to create visual rhythm:

```
Section variant="default"  (white)
Section variant="gray"     (gray-50)
Section variant="default"  (white)
```

Use `variant="navy"` sparingly for high-impact CTAs.

## Grid Layouts

- **2-column on desktop, 1 on mobile**: `grid gap-8 sm:grid-cols-2`
- **3-column on desktop**: `grid gap-8 sm:grid-cols-2 lg:grid-cols-3`
- **Form 2-column**: `grid gap-4 sm:grid-cols-2`
- **Content + sidebar**: `grid gap-12 lg:grid-cols-5` (content: `lg:col-span-3`, sidebar: `lg:col-span-2`)

## Form Layout

All forms follow this pattern:

```tsx
<form onSubmit={handleSubmit} className="space-y-4" noValidate>
  <div className="grid gap-4 sm:grid-cols-2">
    {/* Two fields side-by-side on desktop */}
  </div>
  {/* Full-width fields */}
  <Button type="submit" disabled={submitting}>
    {submitting ? "Submitting..." : "Submit"}
  </Button>
</form>
```

## Call-to-Action Strips

Full-width CTA at page bottom:

```tsx
<Section variant="navy">
  <div className="text-center">
    <h2 className="text-3xl font-bold text-white">Ready to RAP?</h2>
    <p className="mt-4 text-gray-300">Description text.</p>
    <div className="mt-8 flex justify-center gap-4">
      <Link href="/quote" className={buttonVariants("primary", "lg")}>Get a Quote</Link>
      <Link href="/contact" className={`${buttonVariants("outline", "lg")} border-white text-white`}>
        Contact Us
      </Link>
    </div>
  </div>
</Section>
```
