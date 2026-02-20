import Link from "next/link";
import { Section, SectionHeader, Card, CardContent, buttonVariants } from "@/components/ui";

interface ServiceTier {
  name: string;
  slug: string;
  description: string;
  deliveryWindow: string;
  cutoffTime: string;
}

interface ServiceOverviewProps {
  services?: ServiceTier[];
}

const defaultServices: ServiceTier[] = [
  {
    name: "Standard RAP",
    slug: "standard-rap",
    description: "Reliable 3-hour delivery window within Colorado Springs.",
    deliveryWindow: "Within 3 hours",
    cutoffTime: "Ready by 2:00 PM",
  },
  {
    name: "Same Day",
    slug: "same-day",
    description: "Guaranteed delivery by 5 PM for packages ready before noon.",
    deliveryWindow: "By 5:00 PM",
    cutoffTime: "Ready by 12:00 PM",
  },
  {
    name: "STAT",
    slug: "stat",
    description: "90-minute rush delivery for urgent, time-critical packages.",
    deliveryWindow: "90 minutes",
    cutoffTime: "Ready by 2:00 PM",
  },
  {
    name: "Overnight",
    slug: "overnight",
    description: "Next-day delivery by noon with 70-minute pickup window.",
    deliveryWindow: "By 12:00 PM next day",
    cutoffTime: "70 min pickup lead",
  },
  {
    name: "Priority Overnight",
    slug: "priority-overnight",
    description: "Early next-day delivery by 10 AM for priority shipments.",
    deliveryWindow: "By 10:00 AM next day",
    cutoffTime: "70 min pickup lead",
  },
  {
    name: "Special",
    slug: "special",
    description: "Direct, after-hours, and holiday deliveries with custom handling.",
    deliveryWindow: "Custom",
    cutoffTime: "On demand",
  },
];

export function ServiceOverview({ services = defaultServices }: ServiceOverviewProps) {
  return (
    <Section>
      <SectionHeader
        title="Delivery Services"
        subtitle="Six service tiers to match your timeline and budget — from standard routes to urgent STAT runs."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.slug}>
            <CardContent>
              <h3 className="text-xl font-bold text-navy-900">{service.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{service.description}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-md bg-navy-50 px-2 py-1 text-xs font-medium text-navy-900">
                  {service.deliveryWindow}
                </span>
                <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                  {service.cutoffTime}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link href="/services" className={buttonVariants("secondary", "md")}>
          View All Services
        </Link>
      </div>
    </Section>
  );
}
