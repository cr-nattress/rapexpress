import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Rap Express Courier",
  description:
    "Contact Rap Express for courier service inquiries, quotes, or support. Call (719) 630-0027 or submit our online form. After-hours STAT service available.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
