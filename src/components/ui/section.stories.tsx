import type { Meta, StoryObj } from "@storybook/react";
import { Section, SectionHeader } from "./section";

const meta: Meta<typeof Section> = {
  title: "UI/Section",
  component: Section,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Page-level content block with consistent padding and max-width container. Alternate 'default' and 'gray' variants for visual rhythm. 'navy' for high-impact CTAs only.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "gray", "navy"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
  render: () => (
    <Section>
      <SectionHeader title="Section Title" subtitle="A brief subtitle describing this section." />
      <p className="text-gray-600">Section content goes here.</p>
    </Section>
  ),
};

export const Gray: Story = {
  render: () => (
    <Section variant="gray">
      <SectionHeader title="Gray Background" subtitle="Used for alternating section rhythm." />
      <p className="text-gray-600">Content on gray background.</p>
    </Section>
  ),
};

export const Navy: Story = {
  render: () => (
    <Section variant="navy">
      <SectionHeader title="Ready to RAP?" subtitle="High-impact CTA section." />
      <p className="text-gray-300">Use sparingly — max one per page.</p>
    </Section>
  ),
};

export const LeftAligned: Story = {
  render: () => (
    <Section>
      <SectionHeader title="Left-Aligned Header" subtitle="Pass centered={false}." centered={false} />
      <p className="text-gray-600">Content follows left-aligned header.</p>
    </Section>
  ),
};
