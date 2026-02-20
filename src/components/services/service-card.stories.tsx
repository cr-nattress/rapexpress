import type { Meta, StoryObj } from "@storybook/react";
import { ServiceCard, type ServiceTierData } from "./service-card";

const meta: Meta<typeof ServiceCard> = {
  title: "Services/ServiceCard",
  component: ServiceCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Service tier display card with delivery details, feature checklist, and quote CTA. Highlighted variant adds orange ring and 'Popular' tag.",
      },
    },
  },
  decorators: [(Story) => <div className="max-w-sm"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof ServiceCard>;

const baseTier: ServiceTierData = {
  name: "Standard RAP",
  slug: "standard-rap",
  description: "Reliable next-business-day delivery across the Front Range.",
  deliveryWindow: "Next business day",
  cutoffTime: "3:00 PM",
  pickupLeadTime: "1 hour",
  priceRange: "$15 - $45",
  features: ["Bonded & insured drivers", "Proof of delivery", "Online tracking"],
};

export const Default: Story = {
  args: { service: baseTier },
};

export const Highlighted: Story = {
  args: {
    service: {
      ...baseTier,
      name: "Same Day",
      slug: "same-day",
      description: "Guaranteed same-day delivery within the Front Range.",
      deliveryWindow: "Same day",
      priceRange: "$25 - $75",
      highlighted: true,
    },
  },
};

export const Minimal: Story = {
  args: {
    service: {
      name: "Special",
      slug: "special",
      description: "Custom delivery solutions for unique requirements.",
      deliveryWindow: "Custom",
      cutoffTime: "Call dispatch",
    },
  },
};

export const WithSurcharges: Story = {
  args: {
    service: {
      ...baseTier,
      name: "STAT",
      slug: "stat",
      description: "Urgent pickup within 70 minutes, 24/7 availability.",
      deliveryWindow: "2-4 hours",
      cutoffTime: "24/7",
      priceRange: "$50 - $150+",
      surcharges: "After-hours, weekend, and holiday surcharges apply.",
    },
  },
};

export const LongDescription: Story = {
  args: {
    service: {
      ...baseTier,
      description:
        "This is a very long description that tests how the card handles overflow text. It should wrap naturally and not break the card layout or push the CTA button offscreen.",
      features: [
        "Bonded & insured drivers",
        "Proof of delivery with photo",
        "Real-time GPS tracking",
        "Email and SMS notifications",
        "Chain-of-custody documentation",
      ],
    },
  },
};
