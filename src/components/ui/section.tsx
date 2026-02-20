/**
 * INTENT: Page-level content block with consistent vertical padding and max-width container.
 * UX_CONSTRAINTS:
 *   - Alternate "default" (white) and "gray" variants for visual rhythm.
 *   - "navy" variant for high-impact CTAs only (max one per page).
 *   - SectionHeader centers title/subtitle above content.
 * STATES:
 *   - Static presentation only.
 * A11Y:
 *   - Renders as <section> — use id prop for skip-link targets.
 * RESPONSIVE:
 *   - Padding: py-16 (mobile) / py-24 (desktop).
 *   - Container: max-w-7xl with responsive horizontal padding.
 * PITFALLS:
 *   - Section already includes a max-w-7xl container. Don't nest another Container inside.
 */
type SectionVariant = "default" | "gray" | "navy";

interface SectionProps {
  children: React.ReactNode;
  variant?: SectionVariant;
  className?: string;
  id?: string;
}

const variantClasses: Record<SectionVariant, string> = {
  default: "bg-white",
  gray: "bg-gray-50",
  navy: "bg-navy-900 text-white",
};

export function Section({ children, variant = "default", className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${variantClasses[variant]} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-gray-500">{subtitle}</p>}
    </div>
  );
}
