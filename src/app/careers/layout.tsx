import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Rap Express Courier",
  description:
    "Join the Rap Express team. We're hiring couriers, dispatchers, and logistics coordinators in Colorado Springs. Competitive pay, benefits, and growth opportunities.",
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
