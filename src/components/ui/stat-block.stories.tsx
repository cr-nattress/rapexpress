import type { Meta, StoryObj } from "@storybook/react";
import { StatBlock } from "./stat-block";

const meta: Meta<typeof StatBlock> = {
  title: "UI/StatBlock",
  component: StatBlock,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Prominent metric display with large value and descriptive label. Used in stats ribbons. Keep value short (e.g., '40+', '98%').",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatBlock>;

export const Default: Story = {
  args: { value: "40+", label: "Years in Business" },
};

export const Percentage: Story = {
  args: { value: "98%", label: "On-Time Delivery" },
};

export const LargeNumber: Story = {
  args: { value: "500K+", label: "Packages Delivered" },
};

export const StatsRow: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-8 rounded-xl bg-gray-50 p-8">
      <StatBlock value="40+" label="Years in Business" />
      <StatBlock value="500K+" label="Deliveries" />
      <StatBlock value="98%" label="On-Time Rate" />
      <StatBlock value="24/7" label="STAT Service" />
    </div>
  ),
};
