import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader, buttonVariants } from "@/components/ui";

export const metadata: Metadata = {
  title: "Industries Served | Rap Express — Legal, Medical & Defense Courier",
  description:
    "Specialized courier solutions for legal, medical, defense/aerospace, e-commerce, and real estate industries across the Colorado Front Range.",
};

interface IndustrySection {
  name: string;
  slug: string;
  headline: string;
  description: string;
  painPoints: string[];
  compliance: string[];
  icon: string;
}

const industries: IndustrySection[] = [
  {
    name: "Legal",
    slug: "legal",
    headline: "Court-Ready Courier Service",
    description:
      "From El Paso County courthouse filings to intercounty document runs, our drivers know the clerks, the deadlines, and the chain-of-custody requirements your firm depends on.",
    painPoints: [
      "Time-sensitive court filing deadlines",
      "Chain-of-custody documentation requirements",
      "Multi-courthouse coverage across the Front Range",
      "Process service coordination",
    ],
    compliance: [
      "Bonded & insured drivers",
      "Chain-of-custody tracking",
      "Proof of delivery with timestamps",
      "Courthouse-familiar team",
    ],
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
  },
  {
    name: "Medical & Pharmaceutical",
    slug: "medical",
    headline: "HIPAA-Aware Specimen & Pharma Transport",
    description:
      "Lab specimens, prescription deliveries, and medical records — transported with the care and compliance your patients expect. Our bonded, drug-tested drivers handle sensitive medical materials daily.",
    painPoints: [
      "Time-critical lab specimen windows",
      "HIPAA and patient privacy requirements",
      "Temperature-sensitive pharmaceutical deliveries",
      "Off-hours and emergency pickups",
    ],
    compliance: [
      "Bonded & background-checked drivers",
      "HIPAA-aware handling procedures",
      "Cold-chain partner network",
      "Proof of delivery with photo confirmation",
    ],
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    name: "Defense & Aerospace",
    slug: "defense",
    headline: "Secure Courier for the Military Corridor",
    description:
      "Colorado Springs is home to NORAD, Peterson SFB, Schriever SFB, and dozens of defense contractors. We provide secure, reliable delivery along the military corridor with drivers cleared for base access.",
    painPoints: [
      "Secure document and parts transport",
      "Base access and security protocol compliance",
      "Tight turnaround for RFP and contract deliveries",
      "Multi-facility runs across the corridor",
    ],
    compliance: [
      "Insured & bonded for high-value packages",
      "Driver identification and background checks",
      "GPS-tracked routes with real-time visibility",
      "40+ years serving the defense community",
    ],
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    name: "E-Commerce & 3PL",
    slug: "ecommerce",
    headline: "Last-Mile Fulfillment for Online Sellers",
    description:
      "Partner with us for same-day last-mile delivery in the Colorado Springs and Denver metro areas. We integrate with your fulfillment workflow for reliable, branded delivery experiences.",
    painPoints: [
      "Customer expectations for same-day delivery",
      "Scaling delivery capacity during peak seasons",
      "Consistent delivery quality across drivers",
      "Real-time tracking for end customers",
    ],
    compliance: [
      "Uniformed, professional drivers",
      "Real-time tracking via client portal",
      "Proof-of-delivery photos",
      "Flexible volume scaling",
    ],
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
  {
    name: "Real Estate & Title",
    slug: "realestate",
    headline: "Document Runs for Closings & Filings",
    description:
      "Title companies, brokers, and escrow offices trust us for time-sensitive document deliveries. We keep your closings on schedule with reliable same-day runs between offices, banks, and county recorders.",
    painPoints: [
      "Closing deadlines with zero margin for error",
      "Multi-party document coordination",
      "County recorder and bank runs",
      "Last-minute addendum deliveries",
    ],
    compliance: [
      "Bonded for sensitive financial documents",
      "Proof of delivery with chain of custody",
      "Same-day and STAT options",
      "Direct-drive for time-critical closings",
    ],
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange-400">
            Industries
          </p>
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Courier Solutions Built for Your Industry
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Every industry has unique delivery challenges. We bring 40 years of Front Range
            expertise to each one — with specialized handling, compliance awareness, and
            personal service.
          </p>
        </div>
      </section>

      {/* Industry Sections */}
      {industries.map((industry, i) => (
        <Section key={industry.slug} variant={i % 2 === 0 ? "default" : "gray"} id={industry.slug}>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={industry.icon}
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-navy-900">{industry.headline}</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">{industry.description}</p>
              <Link
                href={`/quote?industry=${industry.slug}`}
                className={`${buttonVariants("primary", "md")} mt-6`}
              >
                Request a Tailored Quote
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Challenges We Solve
                </h3>
                <ul className="space-y-2">
                  {industry.painPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-orange-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Our Qualifications
                </h3>
                <ul className="space-y-2">
                  {industry.compliance.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* Bottom CTA */}
      <section className="bg-navy-900 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Don&apos;t See Your Industry?</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            We serve dozens of industries across Colorado. Tell us about your delivery needs
            and we&apos;ll create a customized solution.
          </p>
          <Link href="/contact" className={`${buttonVariants("primary", "lg")} mt-8`}>
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
