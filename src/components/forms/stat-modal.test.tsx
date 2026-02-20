import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { StatModal } from "./stat-modal";

afterEach(cleanup);

describe("StatModal", () => {
  it("returns null when not open", () => {
    const { container } = render(<StatModal open={false} onClose={() => {}} />);
    expect(container.innerHTML).toBe("");
  });

  it("renders dialog when open", () => {
    render(<StatModal open={true} onClose={() => {}} />);
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeDefined();
    expect(dialog.getAttribute("aria-modal")).toBe("true");
  });

  it("has accessible label on dialog", () => {
    render(<StatModal open={true} onClose={() => {}} />);
    const dialog = screen.getByRole("dialog");
    expect(dialog.getAttribute("aria-label")).toBe("After-hours STAT delivery request");
  });

  it("shows close button with aria-label", () => {
    render(<StatModal open={true} onClose={() => {}} />);
    const closeBtn = screen.getByLabelText("Close dialog");
    expect(closeBtn).toBeDefined();
  });

  it("calls onClose when close button clicked", () => {
    let closed = false;
    render(<StatModal open={true} onClose={() => { closed = true; }} />);
    fireEvent.click(screen.getByLabelText("Close dialog"));
    expect(closed).toBe(true);
  });

  it("renders form fields", () => {
    render(<StatModal open={true} onClose={() => {}} />);
    expect(screen.getByText("Your Name")).toBeDefined();
    expect(screen.getByText("Phone (best to reach you)")).toBeDefined();
    expect(screen.getByText("Pickup Address")).toBeDefined();
    expect(screen.getByText("Drop-off Address")).toBeDefined();
  });

  it("shows urgency badge", () => {
    render(<StatModal open={true} onClose={() => {}} />);
    expect(screen.getByText("After-Hours STAT")).toBeDefined();
  });

  it("has submit button", () => {
    render(<StatModal open={true} onClose={() => {}} />);
    const submit = screen.getByRole("button", { name: "Send STAT Request" });
    expect(submit).toBeDefined();
  });
});
