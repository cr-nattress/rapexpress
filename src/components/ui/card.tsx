/**
 * INTENT: Content container with consistent border, radius, and shadow.
 * UX_CONSTRAINTS:
 *   - Use CardHeader/CardContent/CardFooter for structured layouts.
 *   - CardFooter has a top border separator — use for actions.
 * STATES:
 *   - Static presentation only — no interactive states.
 * A11Y:
 *   - Semantic div wrapper — add role="region" or aria-label if card is a landmark.
 * RESPONSIVE:
 *   - Full-width on mobile, constrained by parent grid.
 * PITFALLS:
 *   - highlighted ring (e.g., ServiceCard) uses ring-2 ring-orange-500 on the Card className.
 */
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }: CardProps) {
  return <div className={`p-6 pb-0 ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }: CardProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }: CardProps) {
  return (
    <div className={`border-t border-gray-100 px-6 py-4 ${className}`}>{children}</div>
  );
}
