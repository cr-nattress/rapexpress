"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Button, HeroImage } from "@/components/ui";
import { FormField, Input, Textarea, Select } from "@/components/forms/form-field";
import { StepIndicator } from "@/components/forms/step-indicator";

const STEPS = ["Service", "Locations", "Package", "Contact"];

const serviceLevels = [
  { value: "standard-rap", label: "Standard RAP — Within 3 hours" },
  { value: "same-day", label: "Same Day — By 5:00 PM" },
  { value: "stat", label: "STAT — 90 minutes (rush)" },
  { value: "overnight", label: "Overnight — By 12:00 PM next day" },
  { value: "priority-overnight", label: "Priority Overnight — By 10:00 AM next day" },
  { value: "special", label: "Special — Custom / After-Hours" },
];

interface QuoteFormData {
  serviceLevel: string;
  pickupAddress: string;
  pickupCity: string;
  dropoffAddress: string;
  dropoffCity: string;
  packageDescription: string;
  weight: string;
  specialInstructions: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  company: string;
}

const initialData: QuoteFormData = {
  serviceLevel: "",
  pickupAddress: "",
  pickupCity: "Colorado Springs",
  dropoffAddress: "",
  dropoffCity: "Colorado Springs",
  packageDescription: "",
  weight: "",
  specialInstructions: "",
  contactName: "",
  contactEmail: "",
  contactPhone: "",
  company: "",
};

function QuoteFormInner() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("service") || searchParams.get("industry") || "";

  const [step, setStep] = useState(0);
  const [data, setData] = useState<QuoteFormData>({
    ...initialData,
    serviceLevel: preselected,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function update(field: keyof QuoteFormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function validateStep(): boolean {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};

    if (step === 0 && !data.serviceLevel) {
      newErrors.serviceLevel = "Please select a service level.";
    }
    if (step === 1) {
      if (!data.pickupAddress) newErrors.pickupAddress = "Pickup address is required.";
      if (!data.dropoffAddress) newErrors.dropoffAddress = "Drop-off address is required.";
    }
    if (step === 2) {
      if (!data.packageDescription) newErrors.packageDescription = "Please describe the package.";
    }
    if (step === 3) {
      if (!data.contactName) newErrors.contactName = "Name is required.";
      if (!data.contactEmail) newErrors.contactEmail = "Email is required.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contactEmail)) {
        newErrors.contactEmail = "Please enter a valid email.";
      }
      if (!data.contactPhone) newErrors.contactPhone = "Phone number is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleNext() {
    if (!validateStep()) return;
    if (step < STEPS.length - 1) setStep(step + 1);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateStep()) return;

    setSubmitting(true);
    // API submission placeholder — will connect to US-030 backend
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-20 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-navy-900">Quote Request Received</h2>
        <p className="mx-auto mt-3 max-w-md text-gray-600">
          Thank you! Our dispatch team will review your request and get back to you within 30
          minutes during business hours. For urgent requests, call{" "}
          <a href="tel:+17195979667" className="font-semibold text-orange-500">
            (719) 597-9667
          </a>.
        </p>
      </div>
    );
  }

  return (
    <>
      <StepIndicator steps={STEPS} currentStep={step} />

      <form onSubmit={handleSubmit} noValidate>
        {/* Step 0: Service Level */}
        {step === 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-navy-900">Select Service Level</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {serviceLevels.map((level) => (
                <button
                  key={level.value}
                  type="button"
                  className={`rounded-lg border-2 p-4 text-left transition-colors ${
                    data.serviceLevel === level.value
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => update("serviceLevel", level.value)}
                >
                  <span className="font-semibold text-navy-900">{level.label}</span>
                </button>
              ))}
            </div>
            {errors.serviceLevel && (
              <p className="text-sm text-red-600" role="alert">{errors.serviceLevel}</p>
            )}
          </div>
        )}

        {/* Step 1: Locations */}
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-navy-900">Pickup & Drop-off</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-700">Pickup</h3>
                <FormField label="Address" name="pickupAddress" error={errors.pickupAddress} required>
                  <Input
                    id="pickupAddress"
                    value={data.pickupAddress}
                    onChange={(e) => update("pickupAddress", e.target.value)}
                    placeholder="123 Main St"
                    error={!!errors.pickupAddress}
                    required
                  />
                </FormField>
                <FormField label="City" name="pickupCity">
                  <Select
                    id="pickupCity"
                    value={data.pickupCity}
                    onChange={(e) => update("pickupCity", (e.target as HTMLSelectElement).value)}
                  >
                    <option>Colorado Springs</option>
                    <option>Denver</option>
                    <option>Pueblo</option>
                    <option>Canon City</option>
                    <option>Castle Rock</option>
                    <option>Monument</option>
                    <option>Other</option>
                  </Select>
                </FormField>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-700">Drop-off</h3>
                <FormField label="Address" name="dropoffAddress" error={errors.dropoffAddress} required>
                  <Input
                    id="dropoffAddress"
                    value={data.dropoffAddress}
                    onChange={(e) => update("dropoffAddress", e.target.value)}
                    placeholder="456 Oak Ave"
                    error={!!errors.dropoffAddress}
                    required
                  />
                </FormField>
                <FormField label="City" name="dropoffCity">
                  <Select
                    id="dropoffCity"
                    value={data.dropoffCity}
                    onChange={(e) => update("dropoffCity", (e.target as HTMLSelectElement).value)}
                  >
                    <option>Colorado Springs</option>
                    <option>Denver</option>
                    <option>Pueblo</option>
                    <option>Canon City</option>
                    <option>Castle Rock</option>
                    <option>Monument</option>
                    <option>Other</option>
                  </Select>
                </FormField>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Package Details */}
        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-navy-900">Package Details</h2>
            <FormField label="Package Description" name="packageDescription" error={errors.packageDescription} required>
              <Input
                id="packageDescription"
                value={data.packageDescription}
                onChange={(e) => update("packageDescription", e.target.value)}
                placeholder="e.g., Legal documents, lab specimens, small box"
                error={!!errors.packageDescription}
                required
              />
            </FormField>
            <FormField label="Approximate Weight" name="weight">
              <Input
                id="weight"
                value={data.weight}
                onChange={(e) => update("weight", e.target.value)}
                placeholder="e.g., 5 lbs"
              />
            </FormField>
            <FormField label="Special Instructions" name="specialInstructions">
              <Textarea
                id="specialInstructions"
                rows={3}
                value={data.specialInstructions}
                onChange={(e) => update("specialInstructions", e.target.value)}
                placeholder="Fragile, temperature sensitive, requires signature, etc."
              />
            </FormField>
          </div>
        )}

        {/* Step 3: Contact Info */}
        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-navy-900">Your Information</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="Full Name" name="contactName" error={errors.contactName} required>
                <Input
                  id="contactName"
                  value={data.contactName}
                  onChange={(e) => update("contactName", e.target.value)}
                  error={!!errors.contactName}
                  required
                />
              </FormField>
              <FormField label="Company" name="company">
                <Input
                  id="company"
                  value={data.company}
                  onChange={(e) => update("company", e.target.value)}
                />
              </FormField>
              <FormField label="Email" name="contactEmail" error={errors.contactEmail} required>
                <Input
                  id="contactEmail"
                  type="email"
                  value={data.contactEmail}
                  onChange={(e) => update("contactEmail", e.target.value)}
                  error={!!errors.contactEmail}
                  required
                />
              </FormField>
              <FormField label="Phone" name="contactPhone" error={errors.contactPhone} required>
                <Input
                  id="contactPhone"
                  type="tel"
                  value={data.contactPhone}
                  onChange={(e) => update("contactPhone", e.target.value)}
                  error={!!errors.contactPhone}
                  required
                />
              </FormField>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          {step > 0 ? (
            <Button type="button" variant="ghost" onClick={() => setStep(step - 1)}>
              Back
            </Button>
          ) : (
            <div />
          )}
          {step < STEPS.length - 1 ? (
            <Button type="button" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button type="submit" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit Quote Request"}
            </Button>
          )}
        </div>
      </form>
    </>
  );
}

export default function QuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 py-12 md:py-16">
        <HeroImage
          src="/images/heroes/hero-quote.png"
          alt="Business professional at a laptop preparing a delivery request"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl">Get a Quote</h1>
          <p className="mt-3 max-w-xl text-gray-300">
            Tell us about your delivery and we&apos;ll get back to you with pricing within 30
            minutes during business hours.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<div className="py-8 text-center text-gray-400">Loading form...</div>}>
            <QuoteFormInner />
          </Suspense>
        </div>
      </section>
    </>
  );
}
