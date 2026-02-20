import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./tag";

const meta: Meta<typeof Tag> = {
  title: "UI/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Inline label/badge for categorization or status. Keep text to 1-2 words. Use semantic variants for status indication.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "navy", "orange", "success", "warning", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = { args: { children: "Default" } };
export const Navy: Story = { args: { children: "Navy", variant: "navy" } };
export const Orange: Story = { args: { children: "Popular", variant: "orange" } };
export const Success: Story = { args: { children: "Active", variant: "success" } };
export const Warning: Story = { args: { children: "Pending", variant: "warning" } };
export const Error: Story = { args: { children: "Overdue", variant: "error" } };

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag>Default</Tag>
      <Tag variant="navy">Navy</Tag>
      <Tag variant="orange">Popular</Tag>
      <Tag variant="success">Active</Tag>
      <Tag variant="warning">Pending</Tag>
      <Tag variant="error">Overdue</Tag>
    </div>
  ),
};
