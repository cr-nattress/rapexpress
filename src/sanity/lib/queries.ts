import { defineQuery } from "next-sanity";

export const SERVICE_TIERS_QUERY = defineQuery(
  `*[_type == "serviceTier"] | order(sortOrder asc) {
    _id, name, slug, description, deliveryWindow, cutoffTime,
    pickupLeadTime, priceRange, icon, features, surcharges
  }`
);

export const TESTIMONIALS_QUERY = defineQuery(
  `*[_type == "testimonial" && approved == true] {
    _id, author, company, industry, text, rating, source
  }`
);

export const COVERAGE_ZONES_QUERY = defineQuery(
  `*[_type == "coverageZone"] {
    _id, city, slug, region, latitude, longitude, description,
    "services": servicesAvailable[]->{ _id, name, slug }
  }`
);

export const INDUSTRIES_QUERY = defineQuery(
  `*[_type == "industry"] | order(sortOrder asc) {
    _id, name, slug, headline, description, painPoints,
    complianceStatements, icon, heroImage
  }`
);

export const BLOG_POSTS_QUERY = defineQuery(
  `*[_type == "blogPost"] | order(publishedAt desc) {
    _id, title, slug, excerpt, coverImage, author,
    publishedAt, categories, seoTitle, seoDescription
  }`
);

export const BLOG_POST_BY_SLUG_QUERY = defineQuery(
  `*[_type == "blogPost" && slug.current == $slug][0] {
    _id, title, slug, excerpt, coverImage, body, author,
    publishedAt, categories, seoTitle, seoDescription
  }`
);

export const FAQS_QUERY = defineQuery(
  `*[_type == "faq"] | order(sortOrder asc) {
    _id, question, answer, category
  }`
);

export const PAGE_BY_SLUG_QUERY = defineQuery(
  `*[_type == "page" && slug.current == $slug][0] {
    _id, title, slug, seoTitle, seoDescription, sections
  }`
);
