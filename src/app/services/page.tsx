import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader, buttonVariants } from "@/components/ui";
import { ServiceCard, type ServiceTierData } from "@/components/services/service-card";
import { ComparisonTable } from "@/components/services/comparison-table";
import { FaqAccordion } from "@/components/services/faq-accordion";

export const metadata: Metadata = {
  title: "Courier Services | Rap Express — Colorado Springs Same-Day Delivery",
  description:
    "Six delivery tiers from 3-hour Standard RAP to 90-minute STAT rush service. Same-day, overnight, and after-hours courier delivery across the Front Range.",
};

const services: ServiceTierData[] = [
  {
    name: "Standard RAP",
    slug: "standard-rap",
    description:
      "Our signature service for Colorado Springs. Reliable 3-hour delivery window for routine pickups and drop-offs within the metro area.",
    deliveryWindow: "Within 3 hours",
    cutoffTime: "Ready by 2:00 PM",
    priceRange: "Contact for quote",
    features: [
      "Colorado Springs metro coverage",
      "Bonded & insured drivers",
      "Proof of delivery",
      "Online tracking via portal",
    ],
  },
  {
    name: "Same Day",
    slug: "same-day",
    description:
      "Guaranteed delivery by 5 PM for packages ready before noon. Ideal for daily business runs and routine legal filings.",
    deliveryWindow: "By 5:00 PM",
    cutoffTime: "Ready by 12:00 PM",
    priceRange: "Contact for quote",
    highlighted: true,
    features: [
      "Front Range coverage",
      "Guaranteed same-day completion",
      "Scheduled daily routes available",
      "Volume discounts for regulars",
    ],
  },
  {
    name: "STAT",
    slug: "stat",
    description:
      "90-minute rush delivery for urgent, time-critical packages. When it absolutely cannot wait.",
    deliveryWindow: "90 minutes",
    cutoffTime: "Ready by 2:00 PM",
    priceRange: "Contact for quote",
    features: [
      "Direct point-to-point delivery",
      "Priority dispatch",
      "Real-time GPS tracking",
      "Confirmation call on delivery",
    ],
  },
  {
    name: "Overnight",
    slug: "overnight",
    description:
      "Next-business-day delivery by noon. Cost-effective for less urgent packages needing reliable next-day completion.",
    deliveryWindow: "By 12:00 PM next day",
    cutoffTime: "70 min pickup lead",
    pickupLeadTime: "70 minutes",
    priceRange: "Contact for quote",
    features: [
      "Next-business-day guarantee",
      "Economical option",
      "Full Front Range coverage",
      "Proof of delivery included",
    ],
  },
  {
    name: "Priority Overnight",
    slug: "priority-overnight",
    description:
      "Early next-day delivery by 10 AM. For shipments that need to arrive before the business day begins.",
    deliveryWindow: "By 10:00 AM next day",
    cutoffTime: "70 min pickup lead",
    pickupLeadTime: "70 minutes",
    priceRange: "Contact for quote",
    features: [
      "Early morning guarantee",
      "Priority handling",
      "Ideal for legal deadlines",
      "Full tracking & POD",
    ],
  },
  {
    name: "Special",
    slug: "special",
    description:
      "Custom delivery solutions for after-hours, weekends, holidays, or specialized handling requirements.",
    deliveryWindow: "Custom",
    cutoffTime: "On demand",
    priceRange: "Custom quote",
    surcharges: "After-hours, weekend, and holiday surcharges apply.",
    features: [
      "After-hours & weekend service",
      "Holiday availability",
      "Direct-drive option",
      "Specialized handling",
    ],
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Rap Express",
  description: "Same-day courier service serving the Colorado Front Range since 1984.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2486 Waynoka Rd",
    addressLocality: "Colorado Springs",
    addressRegion: "CO",
    postalCode: "80915",
  },
  telephone: "+17195979667",
  foundingDate: "1984",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Courier Services",
    itemListElement: services.map((s) => ({
      "@type": "Service",
      name: s.name,
      description: s.description,
      areaServed: {
        "@type": "State",
        name: "Colorado",
      },
    })),
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange-400">
            Our Services
          </p>
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Delivery Solutions for Every Timeline
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            From routine daily runs to 90-minute STAT emergencies, we have a service tier
            built for your needs. All backed by bonded drivers, real-time tracking, and 40
            years of Front Range expertise.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <Section>
        <SectionHeader
          title="Service Tiers"
          subtitle="Choose the delivery speed that fits your timeline and budget."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      {/* Comparison Table */}
      <Section variant="gray">
        <SectionHeader
          title="Compare Services at a Glance"
          subtitle="All services include bonded drivers, proof of delivery, and real-time tracking."
        />
        <ComparisonTable services={services} />
      </Section>

      {/* Add-Ons */}
      <Section>
        <SectionHeader title="Add-Ons & Options" />
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {[
            {
              title: "Scheduled Routes",
              description:
                "Set up daily or weekly recurring pickups. We'll show up same time, same place — no need to call.",
            },
            {
              title: "After-Hours Service",
              description:
                "Need a delivery outside 7:30 AM – 5:30 PM? Our Special tier covers evenings, weekends, and holidays.",
            },
            {
              title: "Direct-Drive",
              description:
                "Dedicated driver, pickup to delivery, no shared routes. Maximum speed for your most critical packages.",
            },
            {
              title: "Cold-Chain Partners",
              description:
                "Temperature-controlled transport through our partner network for medical specimens and perishables.",
            },
          ].map((addon) => (
            <div
              key={addon.title}
              className="rounded-lg border border-gray-200 bg-white p-5"
            >
              <h3 className="font-bold text-navy-900">{addon.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{addon.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="gray">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Have a question not listed here? Call us at (719) 597-9667."
        />
        <div className="mx-auto max-w-3xl">
          <FaqAccordion />
        </div>
      </Section>

      {/* Bottom CTA */}
      <section className="bg-navy-900 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            Not sure which service fits?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Tell us what you need and we&apos;ll recommend the best option. No commitment
            required.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/quote" className={buttonVariants("primary", "lg")}>
              Get a Custom Quote
            </Link>
            <Link
              href="/contact"
              className={`${buttonVariants("outline", "lg")} border-white text-white hover:bg-white hover:text-navy-900`}
            >
              Talk to Dispatch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
