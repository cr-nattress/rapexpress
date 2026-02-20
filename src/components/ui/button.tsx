/**
 * INTENT: Primary interactive element for user actions and navigation.
 * UX_CONSTRAINTS:
 *   - Primary (orange) for main CTAs — one per visible section max.
 *   - Secondary (navy) for supporting actions.
 *   - Outline for cancel/back actions or on dark backgrounds.
 *   - Ghost for low-emphasis actions (close, dismiss).
 * STATES:
 *   - default: styled per variant
 *   - hover: darker shade of variant color
 *   - focus-visible: orange-500 ring with offset
 *   - disabled: 50% opacity, pointer-events-none
 * A11Y:
 *   - Renders a native <button> — inherits keyboard support (Enter/Space).
 *   - Disabled state removes from interaction but keeps in tab order.
 *   - Icon-only buttons need an aria-label on the parent.
 * RESPONSIVE:
 *   - Size "sm" for compact layouts, "lg" for hero CTAs.
 *   - Stacks full-width on mobile via parent flex-col.
 * PITFALLS:
 *   - buttonVariants() takes POSITIONAL args (variant, size), not an object.
 *   - Use buttonVariants() for <Link> elements that need button styling.
 */
import { type ButtonHTMLAttributes } from "react";

/** Visual treatment: "primary" (orange CTA), "secondary" (navy), "outline" (border), "ghost" (transparent). */
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
/** Padding and text size: "sm" (compact), "md" (default), "lg" (hero). */
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-orange-500 text-white hover:bg-orange-600 focus-visible:ring-orange-500",
  secondary: "bg-navy-900 text-white hover:bg-navy-800 focus-visible:ring-navy-500",
  outline:
    "border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white focus-visible:ring-navy-500",
  ghost: "text-navy-900 hover:bg-gray-100 focus-visible:ring-gray-400",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3 text-lg",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

export function buttonVariants(variant: ButtonVariant = "primary", size: ButtonSize = "md") {
  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${buttonVariants(variant, size)} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
