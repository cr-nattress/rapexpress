import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Primary interactive element. Use `primary` for main CTAs (one per visible section), `secondary` for supporting actions, `outline` for cancel/back, `ghost` for dismiss.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: "Schedule a Delivery", variant: "primary", size: "md" },
};

export const Secondary: Story = {
  args: { children: "Learn More", variant: "secondary", size: "md" },
};

export const Outline: Story = {
  args: { children: "Cancel", variant: "outline", size: "md" },
};

export const Ghost: Story = {
  args: { children: "Close", variant: "ghost", size: "md" },
};

export const Small: Story = {
  args: { children: "Submit STAT", variant: "primary", size: "sm" },
};

export const Large: Story = {
  args: { children: "Get a Quote", variant: "primary", size: "lg" },
};

export const Disabled: Story = {
  args: { children: "Processing...", variant: "primary", disabled: true },
};

export const LongText: Story = {
  args: {
    children: "This is a very long button label that might overflow or wrap",
    variant: "primary",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
