import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader, buttonVariants, HeroImage } from "@/components/ui";
import { CoverageMap } from "@/components/coverage/coverage-map";
import { FleetTable } from "@/components/coverage/fleet-table";

export const metadata: Metadata = {
  title: "Coverage Area & Fleet | Rap Express — Colorado Front Range Courier",
  description:
    "Serving Colorado Springs, Denver, Pueblo, Canon City, and the entire Front Range. Sedans, SUVs, cargo vans, and box trucks for packages of every size.",
};

export default function CoveragePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 py-16 md:py-24">
        <HeroImage
          src="/images/heroes/hero-coverage.png"
          alt="Aerial view of Colorado's Front Range corridor from Denver to Colorado Springs"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange-400">
            Coverage & Fleet
          </p>
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            The Front Range, Covered
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            From Pueblo to Denver and everywhere in between — our fleet and drivers know every
            route, every courthouse, every hospital, and every loading dock on the Front Range.
          </p>
        </div>
      </section>

      {/* Coverage Map */}
      <Section>
        <SectionHeader
          title="Service Area"
          subtitle="Primary coverage spans the Colorado Front Range corridor. Contact us for destinations beyond our standard area."
        />
        <CoverageMap />
      </Section>

      {/* Dispatch Schedule */}
      <Section variant="gray">
        <SectionHeader title="Dispatch & Operations" />
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Standard Hours
            </p>
            <p className="mt-2 text-2xl font-bold text-navy-900">7:30 AM – 5:30 PM</p>
            <p className="mt-1 text-sm text-gray-500">Monday – Friday</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              After-Hours
            </p>
            <p className="mt-2 text-2xl font-bold text-navy-900">On-Call Available</p>
            <p className="mt-1 text-sm text-gray-500">Evenings & Weekends</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Holiday Service
            </p>
            <p className="mt-2 text-2xl font-bold text-navy-900">Special Tier</p>
            <p className="mt-1 text-sm text-gray-500">Surcharges apply</p>
          </div>
        </div>
      </Section>

      {/* Fleet */}
      <Section>
        <SectionHeader
          title="Our Fleet"
          subtitle="Right-sized vehicles for every delivery, from a single envelope to a full pallet."
        />
        <FleetTable />
      </Section>

      {/* Bottom CTA */}
      <section className="bg-navy-900 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Need a delivery outside our map?</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            We handle special runs across Colorado and partner with regional carriers for
            statewide coverage. Tell us where it needs to go.
          </p>
          <Link href="/quote" className={`${buttonVariants("primary", "lg")} mt-8`}>
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
