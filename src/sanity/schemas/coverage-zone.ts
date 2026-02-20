import { defineField, defineType } from "sanity";

export const coverageZone = defineType({
  name: "coverageZone",
  title: "Coverage Zone",
  type: "document",
  fields: [
    defineField({
      name: "city",
      title: "City Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "city" },
    }),
    defineField({
      name: "region",
      title: "Region",
      type: "string",
      options: {
        list: [
          { title: "Colorado Springs Metro", value: "cos-metro" },
          { title: "Denver Metro", value: "denver-metro" },
          { title: "Front Range", value: "front-range" },
          { title: "Southern Colorado", value: "southern" },
        ],
      },
    }),
    defineField({
      name: "latitude",
      title: "Latitude",
      type: "number",
    }),
    defineField({
      name: "longitude",
      title: "Longitude",
      type: "number",
    }),
    defineField({
      name: "description",
      title: "Area Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "servicesAvailable",
      title: "Services Available",
      type: "array",
      of: [{ type: "reference", to: [{ type: "serviceTier" }] }],
    }),
    defineField({
      name: "hasLandingPage",
      title: "Has Dedicated Landing Page",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
