import { defineField, defineType } from "sanity";

export const categoryTypes = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "backgroundColor",
      title: "Background Color",
      type: "color",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "foregroundColor",
      title: "Foreground Color",
      type: "color",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
