import { defineField, defineType } from "sanity";

export const serviceTier = defineType({
  name: "serviceTier",
  title: "Service Tier",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Service Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "deliveryWindow",
      title: "Delivery Window",
      type: "string",
      description: 'e.g., "Within 3 hours", "By 5 PM same day"',
    }),
    defineField({
      name: "cutoffTime",
      title: "Cutoff Time",
      type: "string",
      description: 'e.g., "Ready by 2:00 PM"',
    }),
    defineField({
      name: "pickupLeadTime",
      title: "Pickup Lead Time",
      type: "string",
      description: 'e.g., "70 minutes"',
    }),
    defineField({
      name: "priceRange",
      title: "Price Range",
      type: "string",
      description: 'e.g., "$25–$45" or "Contact for quote"',
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "surcharges",
      title: "Surcharges / Notes",
      type: "text",
      rows: 2,
    }),
  ],
  orderings: [
    {
      title: "Sort Order",
      name: "sortOrderAsc",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
});
