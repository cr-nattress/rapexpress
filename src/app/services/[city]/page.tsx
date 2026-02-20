import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader, Container, Card, CardContent, buttonVariants, HeroImage } from "@/components/ui";

interface CityData {
  name: string;
  slug: string;
  region: string;
  description: string;
  servicesHighlight: string;
  localLandmarks: string[];
  commonRoutes: string[];
  heroImage: string;
  heroAlt: string;
}

const cityData: Record<string, CityData> = {
  "colorado-springs": {
    name: "Colorado Springs",
    slug: "colorado-springs",
    region: "El Paso County",
    description:
      "Our headquarters and primary service area. Same-day delivery across all of Colorado Springs, from the Air Force Academy to Fort Carson.",
    servicesHighlight:
      "Full service availability including STAT 70-minute guaranteed pickup anywhere in the metro area.",
    heroImage: "/images/heroes/hero-colorado-springs.png",
    heroAlt: "Downtown Colorado Springs with Pikes Peak in the background",
    localLandmarks: [
      "Downtown Colorado Springs",
      "USAFA & Peterson SFB",
      "Memorial Hospital & UCHealth",
      "El Paso County Courthouse",
      "Broadmoor area",
    ],
    commonRoutes: [
      "Colorado Springs → Denver (90 min)",
      "Colorado Springs → Pueblo (60 min)",
      "Colorado Springs → Canon City (75 min)",
      "Local same-day within metro",
    ],
  },
  denver: {
    name: "Denver",
    slug: "denver",
    region: "Denver Metro",
    description:
      "Daily courier service connecting Denver Metro to Colorado Springs and the entire Front Range. Regular routes with competitive pricing.",
    servicesHighlight:
      "Standard and Same Day service with scheduled pickups. STAT available with extended window.",
    heroImage: "/images/heroes/hero-denver.png",
    heroAlt: "Denver skyline with Rocky Mountains and highway approach",
    localLandmarks: [
      "Downtown Denver / LoDo",
      "Denver Tech Center",
      "Aurora / Centennial",
      "Lakewood / Golden",
      "Denver International Airport area",
    ],
    commonRoutes: [
      "Denver → Colorado Springs (90 min)",
      "Denver → Castle Rock (45 min)",
      "Denver → Boulder (60 min)",
      "DTC ↔ Downtown Denver",
    ],
  },
  pueblo: {
    name: "Pueblo",
    slug: "pueblo",
    region: "Pueblo County",
    description:
      "Regular courier service to Pueblo and southern Colorado. Medical, legal, and general delivery for businesses across the Steel City.",
    servicesHighlight:
      "Standard and Same Day delivery. Medical specimen transport to Colorado Springs labs.",
    heroImage: "/images/heroes/hero-pueblo.png",
    heroAlt: "Pueblo, Colorado with the Arkansas River and Riverwalk area",
    localLandmarks: [
      "Downtown Pueblo",
      "Parkview Medical Center",
      "Pueblo County Courthouse",
      "CSU-Pueblo",
      "Pueblo West",
    ],
    commonRoutes: [
      "Pueblo → Colorado Springs (60 min)",
      "Pueblo → Canon City (45 min)",
      "Pueblo → Denver (2.5 hrs)",
    ],
  },
  "canon-city": {
    name: "Canon City",
    slug: "canon-city",
    region: "Fremont County",
    description:
      "Serving Canon City, Florence, and the Royal Gorge area. Regular runs for legal, corrections, and medical facilities.",
    servicesHighlight:
      "Standard and Same Day delivery. Specialized service for correctional facilities and county offices.",
    heroImage: "/images/heroes/hero-canon-city.png",
    heroAlt: "Canon City, Colorado with Royal Gorge canyon landscape",
    localLandmarks: [
      "Fremont County Courthouse",
      "St. Thomas More Hospital",
      "Federal Correctional Complex",
      "Downtown Canon City",
      "Florence",
    ],
    commonRoutes: [
      "Canon City → Colorado Springs (75 min)",
      "Canon City → Pueblo (45 min)",
      "Florence → Colorado Springs (70 min)",
    ],
  },
};

const allCities = Object.keys(cityData);

export function generateStaticParams() {
  return allCities.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = cityData[citySlug];

  if (!city) {
    return { title: "City Not Found" };
  }

  return {
    title: `Courier Service in ${city.name} | Rap Express`,
    description: `Same-day courier and delivery service in ${city.name}, ${city.region}. ${city.servicesHighlight}`,
    openGraph: {
      title: `${city.name} Courier Service | Rap Express`,
      description: city.description,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = cityData[citySlug];

  if (!city) {
    return (
      <Section>
        <Container>
          <h1 className="text-2xl font-bold text-navy-900">City Not Found</h1>
          <p className="mt-2 text-gray-600">We don&apos;t have a dedicated page for this location yet.</p>
          <Link href="/coverage" className={`${buttonVariants("primary")} mt-4`}>
            View Coverage Areas
          </Link>
        </Container>
      </Section>
    );
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Rap Express - ${city.name}`,
    description: city.description,
    telephone: "+17196300027",
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: "CO",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 py-12 md:py-20">
        <HeroImage src={city.heroImage} alt={city.heroAlt} />
        <Container className="relative">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-400">
            {city.region}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-white md:text-5xl">
            Courier Service in {city.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">{city.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={`/quote?city=${city.slug}`}
              className={buttonVariants("primary")}
            >
              Get a {city.name} Quote
            </Link>
            <Link href="/services" className={buttonVariants("secondary")}>
              View All Services
            </Link>
          </div>
        </Container>
      </section>

      {/* Service Highlight */}
      <Section>
        <Container>
          <SectionHeader
            title={`Services Available in ${city.name}`}
            subtitle={city.servicesHighlight}
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Standard RAP", desc: "Delivered within 3 hours of dispatch" },
              { name: "Same Day", desc: "Guaranteed delivery by end of business day" },
              { name: "STAT Delivery", desc: "70-minute pickup guarantee for urgent needs" },
              { name: "Overnight", desc: "Next-day delivery by noon" },
              { name: "Special Service", desc: "After-hours, weekend, and custom deliveries" },
              { name: "Routed Service", desc: "Scheduled daily/weekly runs at discounted rates" },
            ].map((service) => (
              <Card key={service.name}>
                <CardContent>
                  <h3 className="font-bold text-navy-900">{service.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Common Routes */}
      <Section variant="gray">
        <Container>
          <SectionHeader
            title={`Common Routes from ${city.name}`}
            subtitle="Estimated transit times for our most popular routes."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {city.commonRoutes.map((route) => (
              <div
                key={route}
                className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4"
              >
                <svg
                  className="h-5 w-5 shrink-0 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
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
                <span className="text-gray-700">{route}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Local Landmarks */}
      <Section>
        <Container>
          <SectionHeader
            title={`Areas We Serve in ${city.name}`}
            subtitle="Pickup and delivery across these key locations and surrounding areas."
          />
          <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {city.localLandmarks.map((landmark) => (
              <li key={landmark} className="flex items-center gap-2 text-gray-700">
                <svg
                  className="h-4 w-4 shrink-0 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {landmark}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="navy">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Ready to Ship from {city.name}?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-300">
              Get a quote in minutes. Our dispatch team responds within 30 minutes during business
              hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href={`/quote?city=${city.slug}`}
                className={buttonVariants("primary")}
              >
                Get a Quote
              </Link>
              <a
                href="tel:+17196300027"
                className={buttonVariants("secondary")}
              >
                Call (719) 630-0027
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Other Cities */}
      <Section>
        <Container>
          <SectionHeader
            title="Other Service Areas"
            subtitle="Rap Express serves the entire Colorado Front Range."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            {allCities
              .filter((c) => c !== citySlug)
              .map((c) => (
                <Link
                  key={c}
                  href={`/services/${c}`}
                  className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-navy-900 transition-colors hover:border-orange-300 hover:bg-orange-50"
                >
                  {cityData[c].name}
                </Link>
              ))}
            <Link
              href="/coverage"
              className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-orange-500 transition-colors hover:border-orange-300 hover:bg-orange-50"
            >
              View All Coverage →
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
