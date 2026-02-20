import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Home from "./page";

// Mock next/link for testing
vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: unknown }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

afterEach(cleanup);

describe("Home Page", () => {
  it("renders the hero heading", () => {
    render(<Home />);
    expect(screen.getByText("Your Business Is Our Priority")).toBeDefined();
  });

  it("renders stats ribbon", () => {
    render(<Home />);
    expect(screen.getByText("40+")).toBeDefined();
    expect(screen.getByText("Years in Business")).toBeDefined();
  });

  it("renders service overview section", () => {
    render(<Home />);
    expect(screen.getByText("Delivery Services")).toBeDefined();
    expect(screen.getByText("Standard RAP")).toBeDefined();
    expect(screen.getByText("STAT")).toBeDefined();
  });

  it("renders industries teaser", () => {
    render(<Home />);
    expect(screen.getByText("Industries We Serve")).toBeDefined();
    expect(screen.getByText("Legal")).toBeDefined();
    expect(screen.getByText("Medical")).toBeDefined();
  });

  it("renders testimonials section", () => {
    render(<Home />);
    expect(screen.getByText("What Our Clients Say")).toBeDefined();
  });

  it("renders technology block", () => {
    render(<Home />);
    expect(screen.getByText("Technology & Trust")).toBeDefined();
    expect(screen.getByText("Real-Time Tracking")).toBeDefined();
  });

  it("renders CTA strip", () => {
    render(<Home />);
    expect(screen.getByText("Ready to RAP?")).toBeDefined();
  });

  it("has primary CTAs linking to quote page", () => {
    render(<Home />);
    const quoteLinks = screen.getAllByText("Get a Quote");
    expect(quoteLinks.length).toBeGreaterThanOrEqual(1);
    const link = quoteLinks[0].closest("a");
    expect(link?.getAttribute("href")).toBe("/quote");
  });
});
