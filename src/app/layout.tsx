import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rap Express | Colorado Springs Courier Service Since 1984",
  description:
    "Locally owned same-day courier service serving the Front Range since 1984. Standard, same-day, overnight, and STAT delivery across Colorado Springs, Denver, Pueblo, and Canon City.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
