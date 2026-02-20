"use client";

import { useState } from "react";
import { Section, SectionHeader, Button } from "@/components/ui";
import { FormField, Input, Textarea, Select } from "@/components/forms/form-field";
import { StatModal } from "@/components/forms/stat-modal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [statOpen, setStatOpen] = useState(false);

  function update(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.message) newErrors.message = "Message is required.";

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
            Get In Touch
          </p>
          <h1 className="text-4xl font-bold text-white md:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Have a question, need a quote, or want to set up a recurring route? Our dispatch
            team is ready to help.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-navy-900">Dispatch Office</h2>
            <address className="mt-4 space-y-4 text-gray-600 not-italic">
              <div>
                <p className="font-semibold text-navy-900">Address</p>
                <p>2486 Waynoka Rd</p>
                <p>Colorado Springs, CO 80915</p>
              </div>
              <div>
                <p className="font-semibold text-navy-900">Phone</p>
                <p>
                  <a href="tel:+17195979667" className="text-orange-500 hover:text-orange-600">
                    (719) 597-9667
                  </a>
                </p>
              </div>
              <div>
                <p className="font-semibold text-navy-900">Hours</p>
                <p>Monday – Friday</p>
                <p>7:30 AM – 5:30 PM</p>
              </div>
            </address>

            {/* After-hours banner */}
            <div className="mt-8 rounded-lg border-2 border-dashed border-orange-300 bg-orange-50 p-4">
              <p className="font-semibold text-navy-900">Need an after-hours delivery?</p>
              <p className="mt-1 text-sm text-gray-600">
                Our on-call dispatcher can handle urgent STAT requests evenings, weekends, and
                holidays.
              </p>
              <Button
                variant="primary"
                size="sm"
                className="mt-3"
                onClick={() => setStatOpen(true)}
              >
                Submit STAT Request
              </Button>
            </div>

            <div className="mt-6">
              <p className="font-semibold text-navy-900">Leadership</p>
              <p className="mt-1 text-sm text-gray-600">Tom Dubel, President</p>
              <p className="text-sm text-gray-600">Wayne Weyerman, Dispatch Manager</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-navy-900">Message Sent</h3>
                <p className="mt-2 text-gray-600">
                  Thank you for reaching out. We&apos;ll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField label="Full Name" name="name" error={errors.name} required>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => update("name", e.target.value)}
                      error={!!errors.name}
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
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField label="Phone" name="phone">
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => update("phone", e.target.value)}
                    />
                  </FormField>
                  <FormField label="Subject" name="subject">
                    <Select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => update("subject", (e.target as HTMLSelectElement).value)}
                    >
                      <option value="">Select a topic...</option>
                      <option value="quote">Request a Quote</option>
                      <option value="portal">Portal Access</option>
                      <option value="account">Account Question</option>
                      <option value="careers">Employment</option>
                      <option value="other">Other</option>
                    </Select>
                  </FormField>
                </div>
                <FormField label="Message" name="message" error={errors.message} required>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Tell us how we can help..."
                    error={!!errors.message}
                    required
                  />
                </FormField>
                <Button type="submit" disabled={submitting}>
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Section>

      <StatModal open={statOpen} onClose={() => setStatOpen(false)} />
    </>
  );
}
