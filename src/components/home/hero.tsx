/**
 * INTENT: Homepage hero banner — primary landing impression with CTA.
 * UX_CONSTRAINTS:
 *   - "Serving the Front Range Since 1984" eyebrow always visible.
 *   - Two CTAs: primary (orange, links to /quote) + secondary (outline white, links to /contact).
 *   - All props have defaults — can render with zero props.
 * STATES:
 *   - Static only — no loading or error states.
 * A11Y:
 *   - HeroImage has descriptive alt text.
 *   - CTAs are native Link elements with button styling.
 * RESPONSIVE:
 *   - Heading: 4xl (mobile) -> 5xl -> 6xl (desktop).
 *   - CTAs stack vertically on mobile (flex-col), side-by-side on desktop (flex-row).
 *   - Padding: py-20 (mobile) / py-32 (desktop).
 * ANALYTICS:
 *   - Track clicks on primary CTA ("Schedule a Delivery" -> /quote).
 */
import Link from "next/link";
import { buttonVariants, HeroImage } from "@/components/ui";

interface HeroProps {
  heading?: string;
  subheading?: string;
  primaryCta?: string;
  primaryCtaLink?: string;
  secondaryCta?: string;
  secondaryCtaLink?: string;
}

const defaults: Required<HeroProps> = {
  heading: "Your Business Is Our Priority",
  subheading:
    "Colorado's trusted same-day courier since 1984. From legal filings to medical specimens, we deliver across the Front Range with speed, security, and personal service.",
  primaryCta: "Schedule a Delivery",
  primaryCtaLink: "/quote",
  secondaryCta: "Contact Us",
  secondaryCtaLink: "/contact",
};

export function Hero(props: HeroProps) {
  const p = { ...defaults, ...props };

  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 md:py-32">
      <HeroImage
        src="/images/heroes/hero-home.png"
        alt="Courier van driving through Colorado Springs with Pikes Peak in the background"
        priority
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange-400">
            Serving the Front Range Since 1984
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {p.heading}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-300 md:text-xl">
            {p.subheading}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href={p.primaryCtaLink} className={buttonVariants("primary", "lg")}>
              {p.primaryCta}
            </Link>
            <Link
              href={p.secondaryCtaLink}
              className={`${buttonVariants("outline", "lg")} border-white text-white hover:bg-white hover:text-navy-900`}
            >
              {p.secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
