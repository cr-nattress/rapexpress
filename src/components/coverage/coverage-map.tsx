"use client";

interface CoverageCity {
  name: string;
  region: string;
  lat: number;
  lng: number;
}

const cities: CoverageCity[] = [
  { name: "Colorado Springs", region: "Primary Hub", lat: 38.8339, lng: -104.8214 },
  { name: "Denver", region: "Denver Metro", lat: 39.7392, lng: -104.9903 },
  { name: "Pueblo", region: "Southern Colorado", lat: 38.2544, lng: -104.6091 },
  { name: "Canon City", region: "Southern Colorado", lat: 38.4410, lng: -105.2422 },
  { name: "Castle Rock", region: "Front Range", lat: 39.3722, lng: -104.8561 },
  { name: "Monument", region: "Front Range", lat: 39.0917, lng: -104.8727 },
  { name: "Fountain", region: "COS Metro", lat: 38.6822, lng: -104.7008 },
  { name: "Woodland Park", region: "Front Range", lat: 38.9939, lng: -105.0569 },
];

export function CoverageMap() {
  const mapConfigured = !!process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  if (!mapConfigured) {
    return (
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
        <div className="flex min-h-[400px] flex-col items-center justify-center p-8 text-center">
          <svg
            className="mb-4 h-16 w-16 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <h3 className="text-lg font-bold text-navy-900">Coverage Area Map</h3>
          <p className="mt-2 max-w-md text-sm text-gray-500">
            Interactive map coming soon. We serve the entire Front Range corridor from Pueblo
            to Denver.
          </p>
        </div>

        {/* City list fallback */}
        <div className="border-t border-gray-200 bg-white p-6">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {cities.map((city) => (
              <div key={city.name} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-500" aria-hidden="true" />
                <span className="text-sm font-medium text-navy-900">{city.name}</span>
                <span className="text-xs text-gray-400">{city.region}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Mapbox integration placeholder — will be implemented when API key is configured
  return (
    <div className="min-h-[400px] rounded-xl border border-gray-200 bg-gray-100">
      <p className="p-8 text-center text-gray-500">Mapbox map will render here</p>
    </div>
  );
}
