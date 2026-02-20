import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Portal & Tracking | Rap Express Courier",
  description:
    "Access real-time package tracking, online booking, and delivery management through the Rap Express client portal. Request portal access today.",
};

export default function TrackingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
