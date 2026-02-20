import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Quote | Rap Express Courier",
  description:
    "Request a delivery quote from Rap Express. Same-day, STAT, overnight, and standard courier services across Colorado Springs, Denver, and the Front Range.",
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
