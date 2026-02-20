import { StatBlock } from "@/components/ui";

interface Stat {
  value: string;
  label: string;
}

interface StatsRibbonProps {
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  { value: "40+", label: "Years in Business" },
  { value: "98%", label: "On-Time Rate" },
  { value: "45 min", label: "Avg Pickup Time" },
  { value: "500+", label: "Businesses Served" },
];

export function StatsRibbon({ stats = defaultStats }: StatsRibbonProps) {
  return (
    <section className="border-y border-gray-200 bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <StatBlock key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
