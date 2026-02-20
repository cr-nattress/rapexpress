import Link from "next/link";
import { Section, SectionHeader, buttonVariants } from "@/components/ui";

interface Industry {
  name: string;
  slug: string;
  headline: string;
  icon: string;
}

interface IndustriesTeaserProps {
  industries?: Industry[];
}

const defaultIndustries: Industry[] = [
  {
    name: "Legal",
    slug: "legal",
    headline: "Court filings, process service, and chain-of-custody delivery.",
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
  },
  {
    name: "Medical",
    slug: "medical",
    headline: "HIPAA-compliant specimen and pharmaceutical transport.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    name: "Defense & Aerospace",
    slug: "defense",
    headline: "Secure courier for the military corridor and defense contractors.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    name: "E-Commerce & 3PL",
    slug: "ecommerce",
    headline: "Last-mile fulfillment and same-day delivery for online sellers.",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
  {
    name: "Real Estate & Title",
    slug: "realestate",
    headline: "Time-sensitive document runs for closings, inspections, and filings.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
];

export function IndustriesTeaser({ industries = defaultIndustries }: IndustriesTeaserProps) {
  return (
    <Section variant="gray">
      <SectionHeader
        title="Industries We Serve"
        subtitle="Specialized courier solutions for Colorado's key sectors."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {industries.map((industry) => (
          <div
            key={industry.slug}
            className="group rounded-xl border border-gray-200 bg-white p-6 text-center transition-shadow hover:shadow-md"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy-50 text-navy-900 transition-colors group-hover:bg-orange-50 group-hover:text-orange-500">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={industry.icon} />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-navy-900">{industry.name}</h3>
            <p className="mt-2 text-sm text-gray-600">{industry.headline}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link href="/industries" className={buttonVariants("outline", "md")}>
          Explore Industries
        </Link>
      </div>
    </Section>
  );
}
