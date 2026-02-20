/**
 * INTENT: Prominent metric display with large value and descriptive label.
 * UX_CONSTRAINTS:
 *   - Value should be short (e.g., "40+", "98%", "24/7"). Avoid long strings.
 *   - Used in horizontal stat ribbons — typically 3-4 per row.
 * A11Y:
 *   - Read naturally by screen readers as "40+ Years in Business".
 * RESPONSIVE:
 *   - Centers text. Parent grid handles column layout.
 */
interface StatBlockProps {
  value: string;
  label: string;
  className?: string;
}

export function StatBlock({ value, label, className = "" }: StatBlockProps) {
  return (
    <div className={`text-center ${className}`}>
      <p className="text-4xl font-bold text-navy-900">{value}</p>
      <p className="mt-1 text-sm text-gray-500">{label}</p>
    </div>
  );
}
