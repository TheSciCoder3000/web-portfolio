import { defineField, defineType } from "sanity";

export const projectTypes = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 8,
      description: "A short overview of the project.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" }, // regular text blocks (paragraphs, headings, lists, etc.)
        {
          type: "image", // ✅ image blocks
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: "github",
      title: "Github Link",
      type: "url",
    }),
    defineField({
      name: "preview",
      title: "Preview Link",
      type: "url",
    }),
  ],
});
