# Design Tokens

All tokens are defined in `src/app/globals.css` inside the `@theme {}` block (Tailwind CSS v4).

## Colors

### Navy (Brand Primary)

Used for headings, backgrounds, and primary UI surfaces.

| Token | Hex | Usage |
|-------|-----|-------|
| `navy-50` | `#e8ecf1` | Lightest tint, subtle backgrounds |
| `navy-100` | `#c5ceda` | Light borders, hover states |
| `navy-200` | `#9eaec0` | Secondary borders |
| `navy-300` | `#778ea6` | Muted text |
| `navy-400` | `#597593` | — |
| `navy-500` | `#3b5d80` | Focus rings (secondary) |
| `navy-600` | `#335578` | — |
| `navy-700` | `#294b6b` | — |
| `navy-800` | `#1f415e` | Button hover (secondary variant) |
| `navy-900` | `#0b2545` | **Primary brand color**: headings, secondary buttons, hero backgrounds |
| `navy-950` | `#071a30` | Deepest navy, hero gradient overlay |

### Orange (Brand Accent / CTA)

Used for primary actions, links, highlights, and accent elements.

| Token | Hex | Usage |
|-------|-----|-------|
| `orange-50` | `#fff3ec` | Lightest tint, alert backgrounds |
| `orange-100` | `#ffe0cf` | Tag backgrounds |
| `orange-400` | `#ffa677` | Eyebrow/kicker text on dark backgrounds |
| `orange-500` | `#ff6b35` | **Primary CTA color**: buttons, links, focus rings |
| `orange-600` | `#e55e2d` | Button hover state |
| `orange-800` | `#a34119` | Tag text on orange background |

### Gray (Neutrals)

| Token | Hex | Usage |
|-------|-----|-------|
| `gray-50` | `#f2f4f7` | Section backgrounds (`variant="gray"`) |
| `gray-100` | `#e4e7ec` | Borders, dividers |
| `gray-200` | `#c8cdd6` | Secondary borders |
| `gray-300` | `#98a2b3` | Placeholder text, muted icons |
| `gray-400` | `#667085` | Helper text, icon defaults |
| `gray-500` | `#475467` | Subtitle text, description labels |
| `gray-600` | `#344054` | Body text (secondary) |
| `gray-900` | `#101828` | Body text (primary) |

### Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `success` | `#12b76a` | Success states, check icons |
| `warning` | `#f79009` | Warning badges |
| `error` | `#f04438` | Error states, required field indicators |

## Typography

| Token | Size | Usage |
|-------|------|-------|
| `text-xs` | 0.75rem (12px) | Labels, tags, badges |
| `text-sm` | 0.875rem (14px) | Body text (compact), form labels, helper text |
| `text-base` | 1rem (16px) | Default body text, button text (md) |
| `text-lg` | 1.125rem (18px) | Subtitles, lead paragraphs |
| `text-xl` | 1.25rem (20px) | Card headings |
| `text-2xl` | 1.5rem (24px) | Section sub-headings |
| `text-3xl` | 1.875rem (30px) | Section headings (mobile) |
| `text-4xl` | 2.25rem (36px) | Section headings (desktop), hero (mobile) |
| `text-5xl` | 3rem (48px) | Hero heading (desktop) |
| `text-6xl` | 3.75rem (60px) | Hero heading (large desktop) |

**Font family**: `Inter` with system fallbacks (`ui-sans-serif, system-ui, sans-serif`).

**Base styles** (applied globally):
- All headings: `font-bold tracking-tight text-navy-900`
- Body: `bg-white text-gray-900 antialiased`

## Spacing

Tailwind default scale (rem-based): `0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24`

Key patterns:
- **Section padding**: `py-16 md:py-24` (4rem / 6rem)
- **Container max-width**: `max-w-7xl` (80rem / 1280px)
- **Container horizontal padding**: `px-4 sm:px-6 lg:px-8`
- **Section header margin-bottom**: `mb-12`
- **Card padding**: `p-6`
- **Form field spacing**: `space-y-4`
- **Grid gaps**: `gap-4`, `gap-8`, `gap-12`

## Border Radius

| Token | Usage |
|-------|-------|
| `rounded-sm` | Focus rings on text links |
| `rounded-lg` | Buttons, inputs, code blocks |
| `rounded-xl` | Cards, panels, modals |
| `rounded-full` | Tags, badges, avatar placeholders |

## Shadows

| Token | Usage |
|-------|-------|
| `shadow-sm` | Cards, inputs |
| `shadow-xl` | Modals, dropdowns |

## Focus States

All interactive elements share a consistent focus style:
- **Links**: `rounded-sm outline-2 outline-offset-2 outline-orange-500`
- **Buttons**: `outline-2 outline-offset-2 outline-orange-500`
- **Inputs**: `ring-2 ring-offset-1 ring-navy-500` (or `ring-red-500` on error)
