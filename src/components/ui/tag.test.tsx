import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Tag } from "./tag";

afterEach(cleanup);

describe("Tag", () => {
  it("renders children text", () => {
    render(<Tag>Active</Tag>);
    expect(screen.getByText("Active")).toBeDefined();
  });

  it("applies default variant classes", () => {
    render(<Tag>Default</Tag>);
    const tag = screen.getByText("Default");
    expect(tag.className).toContain("bg-gray-100");
  });

  it("applies success variant", () => {
    render(<Tag variant="success">Active</Tag>);
    const tag = screen.getByText("Active");
    expect(tag.className).toContain("bg-green-100");
  });

  it("applies error variant", () => {
    render(<Tag variant="error">Overdue</Tag>);
    const tag = screen.getByText("Overdue");
    expect(tag.className).toContain("bg-red-100");
  });

  it("applies orange variant", () => {
    render(<Tag variant="orange">Popular</Tag>);
    const tag = screen.getByText("Popular");
    expect(tag.className).toContain("bg-orange-100");
  });

  it("renders as span element", () => {
    render(<Tag>Badge</Tag>);
    const tag = screen.getByText("Badge");
    expect(tag.tagName).toBe("SPAN");
  });

  it("merges custom className", () => {
    render(<Tag className="mt-2">Custom</Tag>);
    const tag = screen.getByText("Custom");
    expect(tag.className).toContain("mt-2");
  });
});
