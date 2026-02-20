import { type SchemaTypeDefinition } from "sanity";

// Document types
import { page } from "./page";
import { serviceTier } from "./service-tier";
import { testimonial } from "./testimonial";
import { coverageZone } from "./coverage-zone";
import { industry } from "./industry";
import { blogPost } from "./blog-post";
import { faq } from "./faq";

// Section types (objects)
import { heroSection } from "./sections/hero-section";
import { statsSection } from "./sections/stats-section";
import { ctaSection } from "./sections/cta-section";

export const schemaTypes: SchemaTypeDefinition[] = [
  // Documents
  page,
  serviceTier,
  testimonial,
  coverageZone,
  industry,
  blogPost,
  faq,

  // Sections (reusable blocks)
  heroSection,
  statsSection,
  ctaSection,
];
