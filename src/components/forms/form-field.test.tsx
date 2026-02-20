import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { FormField, Input, Textarea, Select } from "./form-field";

afterEach(cleanup);

describe("FormField", () => {
  it("renders label with htmlFor", () => {
    render(
      <FormField label="Email" name="email">
        <Input id="email" />
      </FormField>
    );
    const label = screen.getByText("Email");
    expect(label.tagName).toBe("LABEL");
    expect(label.getAttribute("for")).toBe("email");
  });

  it("shows required indicator", () => {
    render(
      <FormField label="Name" name="name" required>
        <Input id="name" />
      </FormField>
    );
    const asterisk = screen.getByText("*");
    expect(asterisk.getAttribute("aria-hidden")).toBe("true");
  });

  it("shows error message with role=alert", () => {
    render(
      <FormField label="Email" name="email" error="Invalid email.">
        <Input id="email" error />
      </FormField>
    );
    const error = screen.getByRole("alert");
    expect(error.textContent).toBe("Invalid email.");
  });

  it("does not show error when none provided", () => {
    render(
      <FormField label="Email" name="email">
        <Input id="email" />
      </FormField>
    );
    expect(screen.queryByRole("alert")).toBeNull();
  });
});

describe("Input", () => {
  it("applies error styling when error prop is true", () => {
    render(<Input id="test" error />);
    const input = screen.getByRole("textbox");
    expect(input.className).toContain("border-red-300");
  });

  it("applies default styling when no error", () => {
    render(<Input id="test" />);
    const input = screen.getByRole("textbox");
    expect(input.className).toContain("border-gray-300");
  });
});

describe("Textarea", () => {
  it("renders with error styling", () => {
    render(<Textarea id="msg" error />);
    const textarea = screen.getByRole("textbox");
    expect(textarea.className).toContain("border-red-300");
  });
});

describe("Select", () => {
  it("renders options", () => {
    render(
      <Select id="subject">
        <option value="">Pick one</option>
        <option value="a">Option A</option>
      </Select>
    );
    const select = screen.getByRole("combobox");
    expect(select).toBeDefined();
    expect(screen.getByText("Option A")).toBeDefined();
  });
});
