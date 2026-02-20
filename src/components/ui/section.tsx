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
