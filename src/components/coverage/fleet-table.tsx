interface FleetVehicle {
  type: string;
  count: string;
  payload: string;
  dimensions: string;
  bestFor: string;
}

const fleet: FleetVehicle[] = [
  {
    type: "Sedan",
    count: "Multiple",
    payload: "Up to 50 lbs",
    dimensions: "Standard trunk",
    bestFor: "Documents, small packages, legal filings",
  },
  {
    type: "SUV / Crossover",
    count: "Multiple",
    payload: "Up to 150 lbs",
    dimensions: "Expanded cargo",
    bestFor: "Medium packages, lab specimens, multiple stops",
  },
  {
    type: "Cargo Van",
    count: "Available",
    payload: "Up to 1,000 lbs",
    dimensions: "120 cu ft",
    bestFor: "Large deliveries, equipment, bulk runs",
  },
  {
    type: "Box Truck",
    count: "On request",
    payload: "Up to 3,000 lbs",
    dimensions: "400+ cu ft",
    bestFor: "Freight, pallets, heavy equipment",
  },
];

export function FleetTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px] text-left text-sm">
        <thead>
          <tr className="border-b-2 border-navy-900">
            <th className="py-3 pr-4 font-semibold text-navy-900">Vehicle Type</th>
            <th className="px-4 py-3 font-semibold text-navy-900">Availability</th>
            <th className="px-4 py-3 font-semibold text-navy-900">Max Payload</th>
            <th className="px-4 py-3 font-semibold text-navy-900">Cargo Space</th>
            <th className="px-4 py-3 font-semibold text-navy-900">Best For</th>
          </tr>
        </thead>
        <tbody>
          {fleet.map((v, i) => (
            <tr
              key={v.type}
              className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-gray-50" : ""}`}
            >
              <td className="py-3 pr-4 font-semibold text-navy-900">{v.type}</td>
              <td className="px-4 py-3 text-gray-700">{v.count}</td>
              <td className="px-4 py-3 text-gray-700">{v.payload}</td>
              <td className="px-4 py-3 text-gray-700">{v.dimensions}</td>
              <td className="px-4 py-3 text-gray-600">{v.bestFor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
