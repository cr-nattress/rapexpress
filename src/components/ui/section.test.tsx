import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Section, SectionHeader } from "./section";

afterEach(cleanup);

describe("Section", () => {
  it("renders as a section element", () => {
    render(<Section>Content</Section>);
    const section = screen.getByText("Content").closest("section");
    expect(section).toBeDefined();
  });

  it("applies default (white) variant", () => {
    render(<Section>Content</Section>);
    const section = screen.getByText("Content").closest("section")!;
    expect(section.className).toContain("bg-white");
  });

  it("applies gray variant", () => {
    render(<Section variant="gray">Content</Section>);
    const section = screen.getByText("Content").closest("section")!;
    expect(section.className).toContain("bg-gray-50");
  });

  it("applies navy variant", () => {
    render(<Section variant="navy">Content</Section>);
    const section = screen.getByText("Content").closest("section")!;
    expect(section.className).toContain("bg-navy-900");
    expect(section.className).toContain("text-white");
  });

  it("applies id prop for anchor linking", () => {
    render(<Section id="features">Content</Section>);
    const section = screen.getByText("Content").closest("section")!;
    expect(section.id).toBe("features");
  });
});

describe("SectionHeader", () => {
  it("renders title as h2", () => {
    render(<SectionHeader title="Test Title" />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading.textContent).toBe("Test Title");
  });

  it("renders subtitle when provided", () => {
    render(<SectionHeader title="Title" subtitle="Subtitle text" />);
    expect(screen.getByText("Subtitle text")).toBeDefined();
  });

  it("does not render subtitle when omitted", () => {
    render(<SectionHeader title="Title Only" />);
    const wrapper = screen.getByRole("heading", { level: 2 }).parentElement!;
    expect(wrapper.children.length).toBe(1);
  });

  it("centers text by default", () => {
    render(<SectionHeader title="Centered" />);
    const wrapper = screen.getByRole("heading", { level: 2 }).parentElement!;
    expect(wrapper.className).toContain("text-center");
  });

  it("left-aligns when centered=false", () => {
    render(<SectionHeader title="Left" centered={false} />);
    const wrapper = screen.getByRole("heading", { level: 2 }).parentElement!;
    expect(wrapper.className).not.toContain("text-center");
  });
});
