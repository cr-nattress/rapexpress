"use client";

import { useState } from "react";
import { Section, SectionHeader, Button } from "@/components/ui";
import { FormField, Input, Select, Textarea } from "@/components/forms/form-field";

const portalFeatures = [
  {
    title: "Real-Time Tracking",
    description: "Follow your package from pickup to delivery with live GPS updates.",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
  },
  {
    title: "Automated Notifications",
    description: "Get email or SMS alerts at every delivery milestone.",
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  },
  {
    title: "Proof of Delivery",
    description: "View delivery photos, signatures, and timestamps for every job.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Invoice Management",
    description: "Access invoices, payment history, and run reports from your dashboard.",
    icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z",
  },
];

export default function TrackingPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    features: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function update(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.companyName) newErrors.companyName = "Company name is required.";
    if (!formData.contactName) newErrors.contactName = "Contact name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange-400">
            Technology & Tracking
          </p>
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Client Portal & Tracking
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Powered by Courier Complete and AT&T, our client portal gives you full visibility
            into every delivery — from dispatch to proof of delivery.
          </p>
        </div>
      </section>

      {/* Features */}
      <Section>
        <SectionHeader
          title="Portal Features"
          subtitle="Everything you need to manage your deliveries in one place."
        />
        <div className="grid gap-8 sm:grid-cols-2">
          {portalFeatures.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-navy-900">{feature.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Portal Request Form */}
      <Section variant="gray" id="request-access">
        <SectionHeader
          title="Request Portal Access"
          subtitle="Fill out the form below and our team will set up your account within one business day."
        />
        <div className="mx-auto max-w-2xl">
          {submitted ? (
            <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy-900">Request Submitted</h3>
              <p className="mt-2 text-gray-600">
                We&apos;ll reach out within one business day with your portal login credentials.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Company Name" name="companyName" error={errors.companyName} required>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => update("companyName", e.target.value)}
                    error={!!errors.companyName}
                    required
                  />
                </FormField>
                <FormField label="Contact Name" name="contactName" error={errors.contactName} required>
                  <Input
                    id="contactName"
                    value={formData.contactName}
                    onChange={(e) => update("contactName", e.target.value)}
                    error={!!errors.contactName}
                    required
                  />
                </FormField>
                <FormField label="Email" name="email" error={errors.email} required>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => update("email", e.target.value)}
                    error={!!errors.email}
                    required
                  />
                </FormField>
                <FormField label="Phone" name="phone">
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                </FormField>
              </div>
              <FormField label="Desired Features" name="features">
                <Select
                  id="features"
                  value={formData.features}
                  onChange={(e) => update("features", (e.target as HTMLSelectElement).value)}
                >
                  <option value="">Select primary interest...</option>
                  <option value="tracking">Real-Time Tracking</option>
                  <option value="invoicing">Invoice Management</option>
                  <option value="api">API Integration</option>
                  <option value="all">All Features</option>
                </Select>
              </FormField>
              <FormField label="Additional Notes" name="notes">
                <Textarea
                  id="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  placeholder="Tell us about your delivery volume, special needs, etc."
                />
              </FormField>
              <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
                {submitting ? "Submitting..." : "Request Portal Access"}
              </Button>
            </form>
          )}
        </div>
      </Section>
    </>
  );
}
