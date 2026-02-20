# Component Reference

Canonical usage for shared UI components. All exported from `@/components/ui`.

## Button

**File**: `src/components/ui/button.tsx`

```tsx
import { Button, buttonVariants } from "@/components/ui";

// As a button element
<Button variant="primary" size="md">Schedule a Delivery</Button>
<Button variant="secondary">Learn More</Button>
<Button variant="outline" size="sm">Cancel</Button>
<Button variant="ghost">Close</Button>
<Button disabled>Processing...</Button>

// As a link (use buttonVariants with positional args)
import Link from "next/link";
<Link href="/quote" className={buttonVariants("primary", "lg")}>
  Get a Quote
</Link>
```

**Variants**: `primary` (orange), `secondary` (navy), `outline` (navy border), `ghost` (transparent)
**Sizes**: `sm`, `md` (default), `lg`

> **IMPORTANT**: `buttonVariants()` takes positional args: `buttonVariants(variant, size)`. Never use object syntax.

## Card

**File**: `src/components/ui/card.tsx`

```tsx
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui";

<Card>
  <CardHeader><h3>Title</h3></CardHeader>
  <CardContent><p>Body text</p></CardContent>
  <CardFooter><Button>Action</Button></CardFooter>
</Card>
```

All sub-components accept `className` for overrides.

## Section & SectionHeader

**File**: `src/components/ui/section.tsx`

```tsx
import { Section, SectionHeader } from "@/components/ui";

<Section variant="gray" id="features">
  <SectionHeader
    title="Portal Features"
    subtitle="Everything you need in one place."
    centered={true}  // default
  />
  {/* Section content */}
</Section>
```

**Variants**: `default` (white), `gray` (gray-50), `navy` (navy-900 + white text)

Section wraps content in `max-w-7xl` container with responsive padding.

## Container

**File**: `src/components/ui/container.tsx`

```tsx
import { Container } from "@/components/ui";

<Container className="relative">
  {/* max-w-7xl with responsive horizontal padding */}
</Container>
```

Use when you need the standard container without a full Section wrapper.

## HeroImage

**File**: `src/components/ui/hero-image.tsx`

```tsx
import { HeroImage } from "@/components/ui";

<section className="relative overflow-hidden bg-navy-900 py-16 md:py-24">
  <HeroImage
    src="/images/heroes/hero-contact.png"
    alt="Description of scene"
    priority  // for above-the-fold heroes
  />
  <div className="relative">  {/* content must be relative to appear above image */}
    <h1>Page Title</h1>
  </div>
</section>
```

**Requirements**: Parent must have `relative overflow-hidden`. Content div must have `relative`.

## Tag

**File**: `src/components/ui/tag.tsx`

```tsx
import { Tag } from "@/components/ui";

<Tag variant="orange">Popular</Tag>
<Tag variant="success">Active</Tag>
<Tag variant="error">Overdue</Tag>
```

**Variants**: `default`, `navy`, `orange`, `success`, `warning`, `error`

## StatBlock

**File**: `src/components/ui/stat-block.tsx`

```tsx
import { StatBlock } from "@/components/ui";

<StatBlock value="40+" label="Years in Business" />
```

Renders a large number with a small label beneath. Used in stats ribbons.

## FormField, Input, Textarea, Select

**File**: `src/components/forms/form-field.tsx`

```tsx
import { FormField, Input, Textarea, Select } from "@/components/forms/form-field";

<FormField label="Email" name="email" error={errors.email} required>
  <Input
    id="email"
    type="email"
    value={formData.email}
    onChange={(e) => update("email", e.target.value)}
    error={!!errors.email}
    required
  />
</FormField>
```

- `FormField` provides label, required indicator, and error message display.
- `Input`/`Textarea`/`Select` accept an `error` boolean to switch border styling.
- Error messages render with `role="alert"` for screen reader announcement.
- The `id` on the input must match the `name` on `FormField` for label association.

## ServiceCard

**File**: `src/components/services/service-card.tsx`

```tsx
import { ServiceCard, type ServiceTierData } from "@/components/services/service-card";

<ServiceCard service={serviceTierData} />
```

Renders a card with service name, description, delivery details (definition list), features checklist, and a CTA linking to `/quote?service={slug}`.

## FaqAccordion

**File**: `src/components/services/faq-accordion.tsx`

```tsx
import { FaqAccordion } from "@/components/services/faq-accordion";

<FaqAccordion items={[{ question: "...", answer: "..." }]} />
```

Single-open accordion with `aria-expanded` and `aria-controls`. Falls back to built-in default FAQs if no items provided.
