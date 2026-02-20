/**
 * INTENT: Urgent after-hours STAT delivery request modal. Triggers dispatcher notification.
 * UX_CONSTRAINTS:
 *   - Opens from "Submit STAT Request" button on contact page.
 *   - Red pulsing badge signals urgency.
 *   - Submitting disables button and shows "Sending..." state.
 *   - Success state confirms dispatcher notification with close button.
 * STATES:
 *   - closed: returns null (not rendered)
 *   - open/form: shows form fields
 *   - submitting: button disabled, "Sending..." label
 *   - success: green checkmark, confirmation message, close button
 * A11Y:
 *   - role="dialog" + aria-modal="true" + aria-label on overlay.
 *   - Close button has aria-label="Close dialog".
 *   - SVG icons have aria-hidden="true".
 *   - KNOWN GAP: No focus trap — user can Tab into background content.
 * RESPONSIVE:
 *   - max-w-lg centered, max-h-[90vh] with overflow scroll.
 *   - p-4 outer padding for mobile safe area.
 * PITFALLS:
 *   - No scroll lock on body when open.
 *   - Form data resets only on remount (not on close).
 */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { FormField, Input, Textarea } from "@/components/forms/form-field";

interface StatModalProps {
  open: boolean;
  onClose: () => void;
}

export function StatModal({ open, onClose }: StatModalProps) {
  const [data, setData] = useState({
    name: "",
    phone: "",
    pickupAddress: "",
    dropoffAddress: "",
    urgency: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // Placeholder — will trigger Twilio/Slack notification via US-032
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="After-hours STAT delivery request"
    >
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl bg-white p-6 shadow-xl">
        <button
          type="button"
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-navy-900">STAT Request Sent</h3>
            <p className="mt-2 text-sm text-gray-600">
              Our on-call dispatcher has been notified and will call you shortly.
            </p>
            <Button variant="ghost" className="mt-4" onClick={onClose}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-1 inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              After-Hours STAT
            </div>
            <h2 className="mt-3 text-xl font-bold text-navy-900">
              Urgent Delivery Request
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Submit this form and our on-call dispatcher will contact you within minutes.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
              <FormField label="Your Name" name="stat-name" required>
                <Input
                  id="stat-name"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  required
                />
              </FormField>
              <FormField label="Phone (best to reach you)" name="stat-phone" required>
                <Input
                  id="stat-phone"
                  type="tel"
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                  required
                />
              </FormField>
              <FormField label="Pickup Address" name="stat-pickup" required>
                <Input
                  id="stat-pickup"
                  value={data.pickupAddress}
                  onChange={(e) => setData({ ...data, pickupAddress: e.target.value })}
                  required
                />
              </FormField>
              <FormField label="Drop-off Address" name="stat-dropoff" required>
                <Input
                  id="stat-dropoff"
                  value={data.dropoffAddress}
                  onChange={(e) => setData({ ...data, dropoffAddress: e.target.value })}
                  required
                />
              </FormField>
              <FormField label="What needs to be delivered?" name="stat-urgency">
                <Textarea
                  id="stat-urgency"
                  rows={2}
                  value={data.urgency}
                  onChange={(e) => setData({ ...data, urgency: e.target.value })}
                  placeholder="Brief description of the package and any special needs"
                />
              </FormField>
              <Button type="submit" disabled={submitting} className="w-full">
                {submitting ? "Sending..." : "Send STAT Request"}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
