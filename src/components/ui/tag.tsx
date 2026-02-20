/**
 * INTENT: Inline label/badge for categorization or status indication.
 * UX_CONSTRAINTS:
 *   - Use semantic variants: "success" for active/completed, "error" for failures, "orange" for highlights.
 *   - Keep text short (1-2 words). Not for sentences.
 * A11Y:
 *   - Rendered as <span> — purely visual. If status is important, pair with visually-hidden text or aria-label on parent.
 * RESPONSIVE:
 *   - Inline-flex, wraps naturally in parent layout.
 */
type TagVariant = "default" | "navy" | "orange" | "success" | "warning" | "error";

interface TagProps {
  variant?: TagVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<TagVariant, string> = {
  default: "bg-gray-100 text-gray-700",
  navy: "bg-navy-100 text-navy-900",
  orange: "bg-orange-100 text-orange-800",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  error: "bg-red-100 text-red-800",
};

export function Tag({ variant = "default", children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
