import type { CollectionConfig } from "payload";
import { Content } from "@/blocks/Content/config";
import { MediaBlock } from "@/blocks/MediaBlock/config";
import { generatePreviewPath } from "@/utilities/generatePreviewPath";
import { DetailsFields } from "./fields";

// Simple slugify helper - keeps it small and dependency-free
const slugify = (input?: string) =>
  (input || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export const Projects: CollectionConfig = {
  slug: "projects",
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (!data) return;
        if (!data.slug && data.title) {
          // auto-generate slug from title when not provided
          // keep it idempotent
          data.slug = slugify(String(data.title));
        }
      },
    ],
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Project Details",
          fields: DetailsFields,
        },
        {
          label: "Page",
          fields: [
            {
              name: "layout",
              type: "blocks",
              blocks: [Content, MediaBlock],
              required: true,
            },
          ],
        },
      ],
    },
  ],
  admin: {
    defaultColumns: ["title", "slug", "updatedAt"],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: "projects",
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: "projects",
        req,
      }),
    useAsTitle: "title",
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
};
