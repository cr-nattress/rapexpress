import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Card, CardHeader, CardContent, CardFooter } from "./card";

afterEach(cleanup);

describe("Card", () => {
  it("renders children", () => {
    render(<Card><CardContent>Card body</CardContent></Card>);
    expect(screen.getByText("Card body")).toBeDefined();
  });

  it("applies base styling", () => {
    render(<Card>Content</Card>);
    const card = screen.getByText("Content").closest("div")!;
    expect(card.className).toContain("rounded-xl");
    expect(card.className).toContain("border");
    expect(card.className).toContain("shadow-sm");
  });

  it("merges custom className", () => {
    render(<Card className="ring-2 ring-orange-500">Content</Card>);
    const card = screen.getByText("Content").closest("div")!;
    expect(card.className).toContain("ring-2");
  });
});

describe("CardHeader", () => {
  it("renders with top padding and no bottom padding", () => {
    render(<CardHeader>Header</CardHeader>);
    const header = screen.getByText("Header").closest("div")!;
    expect(header.className).toContain("p-6");
    expect(header.className).toContain("pb-0");
  });
});

describe("CardFooter", () => {
  it("renders with top border", () => {
    render(<CardFooter>Footer</CardFooter>);
    const footer = screen.getByText("Footer").closest("div")!;
    expect(footer.className).toContain("border-t");
  });
});
