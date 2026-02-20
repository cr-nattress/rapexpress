import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "author",
      title: "Author Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
      options: {
        list: [
          { title: "Legal", value: "legal" },
          { title: "Medical", value: "medical" },
          { title: "Defense/Aerospace", value: "defense" },
          { title: "E-commerce", value: "ecommerce" },
          { title: "Real Estate", value: "realestate" },
          { title: "Manufacturing", value: "manufacturing" },
          { title: "Other", value: "other" },
        ],
      },
    }),
    defineField({
      name: "text",
      title: "Testimonial Text",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating (1-5)",
      type: "number",
      validation: (rule) => rule.min(1).max(5),
    }),
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      options: {
        list: [
          { title: "Google", value: "google" },
          { title: "Yelp", value: "yelp" },
          { title: "Direct", value: "direct" },
        ],
      },
    }),
    defineField({
      name: "approved",
      title: "Approved for Display",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
