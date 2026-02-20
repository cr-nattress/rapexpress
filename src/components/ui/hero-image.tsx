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
