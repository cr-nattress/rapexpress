import type { ServiceTierData } from "./service-card";

interface ComparisonTableProps {
  services: ServiceTierData[];
}

export function ComparisonTable({ services }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px] text-left text-sm">
        <thead>
          <tr className="border-b-2 border-navy-900">
            <th className="py-3 pr-4 font-semibold text-navy-900">Service</th>
            <th className="px-4 py-3 font-semibold text-navy-900">Delivery Window</th>
            <th className="px-4 py-3 font-semibold text-navy-900">Cutoff</th>
            <th className="px-4 py-3 font-semibold text-navy-900">Pickup Lead</th>
            <th className="px-4 py-3 font-semibold text-navy-900">Price Range</th>
          </tr>
        </thead>
        <tbody>
          {services.map((s, i) => (
            <tr
              key={s.slug}
              className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-gray-50" : ""}`}
            >
              <td className="py-3 pr-4 font-semibold text-navy-900">{s.name}</td>
              <td className="px-4 py-3 text-gray-700">{s.deliveryWindow}</td>
              <td className="px-4 py-3 text-gray-700">{s.cutoffTime}</td>
              <td className="px-4 py-3 text-gray-700">{s.pickupLeadTime || "—"}</td>
              <td className="px-4 py-3 font-medium text-orange-500">
                {s.priceRange || "Contact us"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
