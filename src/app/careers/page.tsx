"use client";

import { useState, useRef } from "react";
import { Section, SectionHeader, Button, Card, CardContent, HeroImage } from "@/components/ui";
import { FormField, Input, Select } from "@/components/forms/form-field";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const roles = [
  {
    title: "Courier Driver (Full-Time)",
    description:
      "Join our team of professional drivers covering the Front Range. Steady hours, competitive pay, and a supportive team.",
    requirements: [
      "Valid Colorado driver's license with clean record",
      "Reliable personal vehicle (sedan or larger)",
      "Pass background check and drug screening",
      "Notarized application required",
    ],
  },
  {
    title: "Courier Driver (Part-Time)",
    description:
      "Flexible hours perfect for semi-retired individuals or those seeking supplemental income. Morning and afternoon shifts available.",
    requirements: [
      "Valid Colorado driver's license",
      "Reliable personal vehicle",
      "Background check required",
      "Minimum 15 hours/week",
    ],
  },
  {
    title: "Dispatch Coordinator",
    description:
      "Manage driver routes, coordinate with clients, and keep operations running smoothly from our Colorado Springs office.",
    requirements: [
      "Strong organizational and communication skills",
      "Experience in logistics or dispatch preferred",
      "Proficiency with Courier Complete or similar systems",
      "In-office, full-time position",
    ],
  },
];

const benefits = [
  "Competitive pay with mileage reimbursement",
  "Flexible scheduling options",
  "Locally owned — your voice matters",
  "Stable, growing company (40+ years)",
  "Uniformed, professional team environment",
  "Simple, streamlined hiring process",
];

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  function update(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;

    if (!ALLOWED_TYPES.includes(f.type)) {
      setFileError("Please upload a PDF or Word document.");
      setFile(null);
      return;
    }
    if (f.size > MAX_FILE_SIZE) {
      setFileError("File must be under 5 MB.");
      setFile(null);
      return;
    }
    setFileError("");
    setFile(f);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone is required.";
    if (!formData.role) newErrors.role = "Please select a role.";

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
      <section className="relative overflow-hidden bg-navy-900 py-16 md:py-24">
        <HeroImage
          src="/images/heroes/hero-careers.png"
          alt="Diverse team of courier drivers standing in front of delivery vehicles"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange-400">
            Join Our Team
          </p>
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Drive Your Career Forward
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Rap Express has been a home for professional drivers and dispatchers for over 40
            years. We&apos;re always looking for reliable, friendly team members.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <Section>
        <SectionHeader
          title="Why Rap Express?"
          subtitle="A locally owned company where you're a person, not a number."
        />
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4"
            >
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-medium text-navy-900">{benefit}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Open Positions */}
      <Section variant="gray">
        <SectionHeader title="Open Positions" />
        <div className="grid gap-6 md:grid-cols-3">
          {roles.map((role) => (
            <Card key={role.title} className="flex flex-col">
              <CardContent className="flex-1">
                <h3 className="text-lg font-bold text-navy-900">{role.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{role.description}</p>
                <h4 className="mt-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Requirements
                </h4>
                <ul className="mt-2 space-y-1">
                  {role.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" aria-hidden="true" />
                      {req}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Application Form */}
      <Section id="apply">
        <SectionHeader
          title="Apply Now"
          subtitle="Upload your application and driving record. All applications require notarization."
        />
        <div className="mx-auto max-w-2xl">
          {submitted ? (
            <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy-900">Application Received</h3>
              <p className="mt-2 text-gray-600">
                Thank you for your interest in Rap Express. Our team will review your
                application and contact you within 3–5 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Full Name" name="apply-name" error={errors.name} required>
                  <Input
                    id="apply-name"
                    value={formData.name}
                    onChange={(e) => update("name", e.target.value)}
                    error={!!errors.name}
                    required
                  />
                </FormField>
                <FormField label="Email" name="apply-email" error={errors.email} required>
                  <Input
                    id="apply-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => update("email", e.target.value)}
                    error={!!errors.email}
                    required
                  />
                </FormField>
                <FormField label="Phone" name="apply-phone" error={errors.phone} required>
                  <Input
                    id="apply-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    error={!!errors.phone}
                    required
                  />
                </FormField>
                <FormField label="Position" name="apply-role" error={errors.role} required>
                  <Select
                    id="apply-role"
                    value={formData.role}
                    onChange={(e) => update("role", (e.target as HTMLSelectElement).value)}
                    error={!!errors.role}
                  >
                    <option value="">Select a role...</option>
                    {roles.map((r) => (
                      <option key={r.title} value={r.title}>
                        {r.title}
                      </option>
                    ))}
                  </Select>
                </FormField>
              </div>

              {/* File upload */}
              <FormField label="Application / Resume (PDF or Word, max 5 MB)" name="apply-file" error={fileError}>
                <input
                  ref={fileRef}
                  id="apply-file"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-navy-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-navy-900 hover:file:bg-navy-100"
                />
                {file && (
                  <p className="mt-1 text-xs text-gray-500">
                    Selected: {file.name} ({(file.size / 1024).toFixed(0)} KB)
                  </p>
                )}
              </FormField>

              <div className="rounded-lg bg-orange-50 p-4">
                <p className="text-sm font-semibold text-navy-900">
                  Notarization Required
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  All applications must be notarized before submission. You can download the
                  application form, complete and notarize it, then upload it here.
                </p>
              </div>

              <Button type="submit" disabled={submitting}>
                {submitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          )}
        </div>
      </Section>
    </>
  );
}
