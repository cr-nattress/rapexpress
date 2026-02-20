import type { Meta, StoryObj } from "@storybook/react";
import { FaqAccordion } from "./faq-accordion";

const meta: Meta<typeof FaqAccordion> = {
  title: "Services/FaqAccordion",
  component: FaqAccordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Expandable FAQ list with single-open accordion behavior. Clicking one item closes any previously open item. Falls back to built-in default FAQs if no items prop.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FaqAccordion>;

export const DefaultFaqs: Story = {
  args: {},
};

export const CustomItems: Story = {
  args: {
    items: [
      { question: "How fast is STAT delivery?", answer: "We guarantee pickup within 70 minutes." },
      {
        question: "Do you deliver on weekends?",
        answer: "Yes, through our Special service tier with applicable surcharges.",
      },
      {
        question: "What areas do you cover?",
        answer: "The entire Front Range including Colorado Springs, Denver, Pueblo, and Canon City.",
      },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    items: [
      {
        question: "Is this a single FAQ?",
        answer: "Yes, this tests the component with only one item.",
      },
    ],
  },
};

export const LongAnswer: Story = {
  args: {
    items: [
      {
        question: "What is your complete service coverage area?",
        answer:
          "We serve the entire Colorado Front Range corridor from Fort Collins in the north to Pueblo in the south, and from the Eastern Plains to the mountain communities west of I-25. Our primary service area includes Colorado Springs, Denver Metro, Pueblo, Canon City, Monument, Castle Rock, Parker, Aurora, Lakewood, Golden, Boulder, Longmont, and all communities in between. For deliveries outside this area, please contact dispatch for a custom quote.",
      },
    ],
  },
};
