import { Hero } from "@/components/home/hero";
import { StatsRibbon } from "@/components/home/stats-ribbon";
import { ServiceOverview } from "@/components/home/service-overview";
import { IndustriesTeaser } from "@/components/home/industries-teaser";
import { Testimonials } from "@/components/home/testimonials";
import { TechnologyBlock } from "@/components/home/technology-block";
import { CtaStrip } from "@/components/home/cta-strip";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsRibbon />
      <ServiceOverview />
      <IndustriesTeaser />
      <Testimonials />
      <TechnologyBlock />
      <CtaStrip />
    </>
  );
}
