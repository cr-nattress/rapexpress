import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader, Card, CardContent, Tag } from "@/components/ui";
import { NewsletterSignup } from "@/components/marketing/newsletter-signup";

export const metadata: Metadata = {
  title: "Blog & Resources | Rap Express — Courier Tips & Industry News",
  description:
    "Shipping tips, regulatory updates, holiday cutoff calendars, and customer stories from Colorado's trusted courier service.",
};

interface BlogPostPreview {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  author: string;
}

// Placeholder posts — will be replaced with CMS query
const posts: BlogPostPreview[] = [
  {
    slug: "same-day-delivery-guide-colorado-springs",
    title: "The Complete Guide to Same-Day Delivery in Colorado Springs",
    excerpt:
      "Everything local businesses need to know about same-day courier options, cutoff times, and how to choose the right service level for your needs.",
    publishedAt: "2026-02-15",
    category: "Shipping Tips",
    author: "Rap Express Team",
  },
  {
    slug: "hipaa-compliant-medical-courier",
    title: "What Makes a Medical Courier HIPAA-Compliant?",
    excerpt:
      "Understanding the requirements for transporting medical specimens, prescriptions, and patient records with a courier service.",
    publishedAt: "2026-02-01",
    category: "Compliance",
    author: "Rap Express Team",
  },
  {
    slug: "legal-courier-court-filing-tips",
    title: "5 Tips for Faster Court Filing Deliveries",
    excerpt:
      "How law firms and legal departments can streamline their court filing process with a dedicated courier partner.",
    publishedAt: "2026-01-20",
    category: "Industry News",
    author: "Rap Express Team",
  },
  {
    slug: "holiday-shipping-cutoff-calendar-2026",
    title: "2026 Holiday Shipping Cutoff Calendar",
    excerpt:
      "Plan ahead with our complete calendar of holiday closures, adjusted cutoff times, and after-hours availability for the year.",
    publishedAt: "2026-01-05",
    category: "Company Updates",
    author: "Rap Express Team",
  },
];

const categoryColors: Record<string, "default" | "navy" | "orange"> = {
  "Shipping Tips": "navy",
  Compliance: "orange",
  "Industry News": "default",
  "Company Updates": "navy",
  "Customer Stories": "orange",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange-400">
            Resources
          </p>
          <h1 className="text-4xl font-bold text-white md:text-5xl">Blog & Resources</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Logistics tips, regulatory updates, holiday calendars, and stories from 40 years
            on the Front Range.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeader title="Latest Posts" />
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardContent>
                  <div className="mb-3 flex items-center gap-3">
                    <Tag variant={categoryColors[post.category] || "default"}>
                      {post.category}
                    </Tag>
                    <time className="text-xs text-gray-400" dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <h2 className="text-lg font-bold text-navy-900">{post.title}</h2>
                  <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>
                  <p className="mt-3 text-xs text-gray-400">By {post.author}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section variant="gray">
        <div className="mx-auto max-w-2xl">
          <NewsletterSignup />
        </div>
      </Section>
    </>
  );
}
