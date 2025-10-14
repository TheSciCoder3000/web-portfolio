import { Field } from "payload";

export const DetailsFields: Field[] = [
  {
    name: "title",
    type: "text",
    required: true,
  },
  {
    name: "description",
    type: "textarea",
    required: true,
  },
  {
    name: "images",
    label: "Media",
    type: "relationship",
    relationTo: "media",
    hasMany: true,
    admin: {
      description: "Attach images from the Media collection",
    },
  },
  {
    name: "categories",
    label: "Categories",
    type: "relationship",
    relationTo: "categories",
    hasMany: true,
    admin: {
      description: "Choose applicable categories for the project",
    },
  },
  {
    name: "slug",
    type: "text",
    required: true,
    admin: {
      description: "URL-friendly identifier for the project",
    },
  },
  {
    name: "githubLink",
    type: "text",
    label: "Github link",
    admin: {
      placeholder: "https://example.com",
    },
    validate: validateUrl,
  },
  {
    name: "previewLink",
    type: "text",
    label: "Preview link",
    admin: {
      placeholder: "https://example.com",
    },
    validate: validateUrl,
  },
];

function validateUrl(value: unknown) {
  if (value && !/^https?:\/\/.+\..+/.test(value as string)) {
    return "Please enter a valid URL";
  }
  return true;
}
