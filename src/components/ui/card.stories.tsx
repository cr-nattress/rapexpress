import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardContent, CardFooter } from "./card";
import { Button } from "./button";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Content container with consistent border, radius, and shadow. Use CardHeader/CardContent/CardFooter for structured layouts.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardContent>
        <p>Basic card with content only.</p>
      </CardContent>
    </Card>
  ),
};

export const WithHeaderAndFooter: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <h3 className="text-xl font-bold text-navy-900">Service Tier</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">Same-day delivery across the Front Range.</p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Get a Quote</Button>
      </CardFooter>
    </Card>
  ),
};

export const Highlighted: Story = {
  render: () => (
    <Card className="ring-2 ring-orange-500">
      <CardContent>
        <h3 className="text-xl font-bold text-navy-900">Most Popular</h3>
        <p className="mt-2 text-gray-600">Highlighted card with orange ring.</p>
      </CardContent>
    </Card>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Card>
      <CardContent>
        <h3 className="text-xl font-bold text-navy-900">Detailed Service</h3>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </CardContent>
    </Card>
  ),
};
