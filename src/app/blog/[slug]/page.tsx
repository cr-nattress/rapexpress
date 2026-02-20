import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, Tag, buttonVariants } from "@/components/ui";

// Placeholder article data — will be replaced with CMS query
const articles: Record<
  string,
  {
    title: string;
    excerpt: string;
    publishedAt: string;
    category: string;
    author: string;
    body: string[];
  }
> = {
  "same-day-delivery-guide-colorado-springs": {
    title: "The Complete Guide to Same-Day Delivery in Colorado Springs",
    excerpt:
      "Everything local businesses need to know about same-day courier options, cutoff times, and how to choose the right service level.",
    publishedAt: "2026-02-15",
    category: "Shipping Tips",
    author: "Rap Express Team",
    body: [
      "Same-day delivery has become a baseline expectation for businesses across Colorado Springs. Whether you're a law firm rushing court filings, a medical lab transporting specimens, or an e-commerce company fulfilling local orders, understanding your courier options is essential.",
      "At Rap Express, we offer multiple service tiers designed for different urgency levels. Our Standard RAP service provides a 3-hour delivery window within Colorado Springs, while our STAT service guarantees 90-minute delivery for truly urgent packages.",
      "The key to effective same-day delivery is understanding cutoff times. For our Same Day service, packages need to be ready by noon for guaranteed delivery by 5 PM. For STAT, packages must be ready by 2 PM. Planning your pickup requests around these windows ensures reliable service.",
      "For businesses with daily delivery needs, we recommend setting up a recurring route. This eliminates the need to call dispatch each day — our drivers know your schedule and will arrive at the same time, same place, ready to pick up.",
      "Contact our dispatch team at (719) 597-9667 to discuss the best service tier for your business, or request a quote through our website.",
    ],
  },
};

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Post Not Found" };

  return {
    title: `${article.title} | Rap Express Blog`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    author: { "@type": "Organization", name: article.author },
    publisher: { "@type": "Organization", name: "Rap Express" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <Link href="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-navy-900">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <div className="flex items-center gap-3">
            <Tag>{article.category}</Tag>
            <time className="text-sm text-gray-400" dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>

          <h1 className="mt-4 text-3xl font-bold text-navy-900 md:text-4xl">
            {article.title}
          </h1>
          <p className="mt-2 text-sm text-gray-500">By {article.author}</p>

          <div className="prose mt-8 max-w-none">
            {article.body.map((paragraph, i) => (
              <p key={i} className="mb-4 leading-relaxed text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-navy-900 p-8 text-center">
            <h2 className="text-2xl font-bold text-white">Need a delivery?</h2>
            <p className="mt-2 text-gray-300">
              Get a quote in minutes or call our dispatch team directly.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/quote" className={buttonVariants("primary", "md")}>
                Get a Quote
              </Link>
              <a
                href="tel:+17195979667"
                className={`${buttonVariants("outline", "md")} border-white text-white hover:bg-white hover:text-navy-900`}
              >
                Call (719) 597-9667
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
