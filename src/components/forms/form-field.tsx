/**
 * INTENT: Consistent form field wrapper and input primitives for all forms.
 * UX_CONSTRAINTS:
 *   - FormField provides label, required asterisk, and error message display.
 *   - Input/Textarea/Select accept `error` boolean to toggle red border styling.
 *   - The `id` on the input MUST match the `name` on FormField for label association.
 * STATES:
 *   - default: gray-300 border, navy-500 focus ring
 *   - error: red-300 border, red-500 focus ring, error message below in role="alert"
 *   - disabled: inherit from native HTML disabled attribute
 * A11Y:
 *   - Labels linked via htmlFor/id pairing.
 *   - Required fields show red asterisk with aria-hidden (visual only).
 *   - Error messages use role="alert" for screen reader announcement.
 * RESPONSIVE:
 *   - Full-width by default. Use parent grid for side-by-side layout.
 * PITFALLS:
 *   - Select uses InputHTMLAttributes<HTMLSelectElement> — cast e.target in onChange.
 *   - No built-in validation — validation is handled in form handleSubmit.
 */
import { type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";

interface FormFieldProps {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  children?: React.ReactNode;
}

export function FormField({ label, name, error, required, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-navy-900">
        {label}
        {required && <span className="ml-1 text-red-500" aria-hidden="true">*</span>}
      </label>
      <div className="mt-1">{children}</div>
      {error && (
        <p className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
};

export function Input({ error, className = "", ...props }: InputProps) {
  return (
    <input
      className={`block w-full rounded-lg border px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
        error
          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
          : "border-gray-300 focus:border-navy-500 focus:ring-navy-500"
      } ${className}`}
      {...props}
    />
  );
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean;
};

export function Textarea({ error, className = "", ...props }: TextareaProps) {
  return (
    <textarea
      className={`block w-full rounded-lg border px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
        error
          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
          : "border-gray-300 focus:border-navy-500 focus:ring-navy-500"
      } ${className}`}
      {...props}
    />
  );
}

type SelectProps = InputHTMLAttributes<HTMLSelectElement> & {
  error?: boolean;
  children: React.ReactNode;
};

export function Select({ error, className = "", children, ...props }: SelectProps) {
  return (
    <select
      className={`block w-full rounded-lg border px-3 py-2 text-sm shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 ${
        error
          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
          : "border-gray-300 focus:border-navy-500 focus:ring-navy-500"
      } ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}
