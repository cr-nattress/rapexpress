import { defineField, defineType } from "sanity";

export const ctaSection = defineType({
  name: "ctaSection",
  title: "CTA Section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body Text",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
    }),
    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "string",
    }),
    defineField({
      name: "variant",
      title: "Style Variant",
      type: "string",
      options: {
        list: [
          { title: "Default (White)", value: "default" },
          { title: "Navy", value: "navy" },
          { title: "Orange", value: "orange" },
        ],
      },
      initialValue: "default",
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare({ title }) {
      return { title: title || "CTA Section" };
    },
  },
});
