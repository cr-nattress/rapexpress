import Link from "next/link";
import { Section, SectionHeader, buttonVariants } from "@/components/ui";

const features = [
  {
    title: "Real-Time Tracking",
    description:
      "Every driver carries a handheld device with GPS. Track your package from pickup to proof-of-delivery.",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Client Portal",
    description:
      "Manage orders, view invoices, download proof-of-delivery, and set up notifications — all from one dashboard.",
    icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
  },
  {
    title: "Two Dedicated Dispatchers",
    description:
      "Unlike national carriers, you'll always talk to Wayne or a team member who knows your account and your routes.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Bonded & Insured",
    description:
      "Every driver is bonded, insured, and background-checked. Your packages are protected from pickup to delivery.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

export function TechnologyBlock() {
  return (
    <Section variant="gray">
      <SectionHeader
        title="Technology & Trust"
        subtitle="Modern dispatch technology backed by 40 years of hands-on expertise."
      />
      <div className="grid gap-8 sm:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.title} className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-white">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
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
      <div className="mt-10 text-center">
        <Link href="/tracking" className={buttonVariants("outline", "md")}>
          Learn About Our Portal
        </Link>
      </div>
    </Section>
  );
}
