/**
 * INTENT: Standalone max-width wrapper with responsive horizontal padding.
 * UX_CONSTRAINTS:
 *   - Use inside hero sections or other non-Section contexts.
 *   - Do NOT nest inside Section (Section already wraps content in a container).
 * RESPONSIVE:
 *   - max-w-7xl (1280px), px-4 / sm:px-6 / lg:px-8.
 */
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
  );
}
