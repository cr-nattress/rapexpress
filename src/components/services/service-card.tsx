/**
 * INTENT: Service tier display card with details and quote CTA.
 * UX_CONSTRAINTS:
 *   - One card per service tier, displayed in a grid.
 *   - Highlighted tier gets orange ring-2 and "Popular" tag.
 *   - CTA always links to /quote?service={slug} for pre-selection.
 * STATES:
 *   - default: standard card presentation
 *   - highlighted: orange ring + Popular tag
 * A11Y:
 *   - Uses <dl> for structured delivery details (term/definition pairs).
 *   - Feature list uses semantic <ul>/<li>.
 *   - Check icons are aria-hidden="true".
 * RESPONSIVE:
 *   - flex-col layout — footer always at bottom via flex-1 on content.
 *   - Full-width on mobile, grid column on desktop.
 */
import Link from "next/link";
import { Card, CardContent, CardFooter, Tag, buttonVariants } from "@/components/ui";

export interface ServiceTierData {
  name: string;
  slug: string;
  description: string;
  deliveryWindow: string;
  cutoffTime: string;
  pickupLeadTime?: string;
  priceRange?: string;
  features?: string[];
  surcharges?: string;
  highlighted?: boolean;
}

export function ServiceCard({ service }: { service: ServiceTierData }) {
  return (
    <Card
      className={`flex flex-col ${service.highlighted ? "ring-2 ring-orange-500" : ""}`}
    >
      <CardContent className="flex-1">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-navy-900">{service.name}</h3>
          {service.highlighted && <Tag variant="orange">Popular</Tag>}
        </div>
        <p className="mt-2 text-gray-600">{service.description}</p>

        <dl className="mt-6 space-y-3">
          <div className="flex justify-between border-b border-gray-100 pb-2">
            <dt className="text-sm font-medium text-gray-500">Delivery Window</dt>
            <dd className="text-sm font-semibold text-navy-900">{service.deliveryWindow}</dd>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-2">
            <dt className="text-sm font-medium text-gray-500">Cutoff Time</dt>
            <dd className="text-sm font-semibold text-navy-900">{service.cutoffTime}</dd>
          </div>
          {service.pickupLeadTime && (
            <div className="flex justify-between border-b border-gray-100 pb-2">
              <dt className="text-sm font-medium text-gray-500">Pickup Lead</dt>
              <dd className="text-sm font-semibold text-navy-900">
                {service.pickupLeadTime}
              </dd>
            </div>
          )}
          {service.priceRange && (
            <div className="flex justify-between">
              <dt className="text-sm font-medium text-gray-500">Price Range</dt>
              <dd className="text-sm font-bold text-orange-500">{service.priceRange}</dd>
            </div>
          )}
        </dl>

        {service.features && service.features.length > 0 && (
          <ul className="mt-4 space-y-1">
            {service.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
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
                {f}
              </li>
            ))}
          </ul>
        )}

        {service.surcharges && (
          <p className="mt-4 text-xs text-gray-400">{service.surcharges}</p>
        )}
      </CardContent>
      <CardFooter>
        <Link
          href={`/quote?service=${service.slug}`}
          className={`${buttonVariants("primary", "sm")} w-full`}
        >
          Get a Quote
        </Link>
      </CardFooter>
    </Card>
  );
}
