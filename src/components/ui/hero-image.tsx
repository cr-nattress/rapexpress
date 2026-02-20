/**
 * INTENT: Background image layer for hero sections with gradient overlay for text readability.
 * UX_CONSTRAINTS:
 *   - Place inside a `relative overflow-hidden` container.
 *   - Content above must have `relative` class to appear over the image.
 *   - Gradient: left-to-right navy overlay (90% -> 75% -> 50%) for left-aligned text.
 * STATES:
 *   - Static — no loading/error states (Next.js Image handles lazy loading).
 * A11Y:
 *   - alt text describes the scene for screen readers.
 *   - Gradient overlay div has aria-hidden="true".
 *   - Set priority={true} for above-the-fold heroes to avoid layout shift.
 * RESPONSIVE:
 *   - fill + object-cover scales to any container size.
 *   - sizes="100vw" since it's always full-width.
 * PITFALLS:
 *   - quality must be 75 (configured in Next.js). Other values cause build warnings.
 *   - Image files are in public/images/heroes/ as PNGs.
 */
import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

/**
 * Background image layer for hero sections.
 * Place inside a `relative overflow-hidden` container.
 * Renders with a dark gradient overlay for text readability.
 */
export function HeroImage({ src, alt, priority = false }: HeroImageProps) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="100vw"
        priority={priority}
        quality={75}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/75 to-navy-900/50"
        aria-hidden="true"
      />
    </>
  );
}
