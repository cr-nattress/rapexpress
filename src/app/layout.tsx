import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rapexpress.com";

export const metadata: Metadata = {
  title: {
    default: "Rap Express | Colorado Springs Courier Service Since 1984",
    template: "%s | Rap Express",
  },
  description:
    "Locally owned same-day courier service serving the Front Range since 1984. Standard, same-day, overnight, and STAT delivery across Colorado Springs, Denver, Pueblo, and Canon City.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Rap Express Courier",
    title: "Rap Express | Colorado Springs Courier Service Since 1984",
    description:
      "Locally owned same-day courier service serving the Front Range since 1984. Bonded, insured, and trusted by 500+ businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rap Express | Colorado Springs Courier Service",
    description:
      "Same-day, STAT, overnight courier delivery across Colorado's Front Range since 1984.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#organization`,
  name: "Rap Express",
  description:
    "Locally owned same-day courier service serving the Colorado Front Range since 1984.",
  url: siteUrl,
  telephone: "+17196300027",
  foundingDate: "1984",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colorado Springs",
    addressRegion: "CO",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.8339,
    longitude: -104.8214,
  },
  areaServed: [
    { "@type": "City", name: "Colorado Springs" },
    { "@type": "City", name: "Denver" },
    { "@type": "City", name: "Pueblo" },
    { "@type": "City", name: "Canon City" },
    { "@type": "City", name: "Castle Rock" },
    { "@type": "City", name: "Monument" },
    { "@type": "City", name: "Fountain" },
    { "@type": "City", name: "Woodland Park" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "17:30",
    },
  ],
  priceRange: "$$",
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />

        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
