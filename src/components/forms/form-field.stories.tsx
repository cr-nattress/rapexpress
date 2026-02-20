import type { Meta, StoryObj } from "@storybook/react";
import { FormField, Input, Textarea, Select } from "./form-field";

const meta: Meta<typeof FormField> = {
  title: "Forms/FormField",
  component: FormField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Form field wrapper providing label, required indicator, and error message. Pair with Input, Textarea, or Select. The id on the input must match the name on FormField.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const TextInput: Story = {
  render: () => (
    <FormField label="Full Name" name="name" required>
      <Input id="name" placeholder="Jane Doe" />
    </FormField>
  ),
};

export const EmailInput: Story = {
  render: () => (
    <FormField label="Email" name="email" required>
      <Input id="email" type="email" placeholder="jane@example.com" />
    </FormField>
  ),
};

export const WithError: Story = {
  render: () => (
    <FormField label="Email" name="email" error="Please enter a valid email address." required>
      <Input id="email" type="email" value="not-valid" error />
    </FormField>
  ),
};

export const TextareaField: Story = {
  render: () => (
    <FormField label="Message" name="message" required>
      <Textarea id="message" rows={4} placeholder="Tell us how we can help..." />
    </FormField>
  ),
};

export const TextareaWithError: Story = {
  render: () => (
    <FormField label="Message" name="message" error="Message is required." required>
      <Textarea id="message" rows={4} error />
    </FormField>
  ),
};

export const SelectField: Story = {
  render: () => (
    <FormField label="Subject" name="subject">
      <Select id="subject">
        <option value="">Select a topic...</option>
        <option value="quote">Request a Quote</option>
        <option value="portal">Portal Access</option>
        <option value="other">Other</option>
      </Select>
    </FormField>
  ),
};

export const FormLayout: Story = {
  render: () => (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="First Name" name="first" required>
          <Input id="first" />
        </FormField>
        <FormField label="Last Name" name="last" required>
          <Input id="last" />
        </FormField>
      </div>
      <FormField label="Email" name="email" required>
        <Input id="email" type="email" />
      </FormField>
      <FormField label="Message" name="message" required>
        <Textarea id="message" rows={4} />
      </FormField>
    </form>
  ),
};
