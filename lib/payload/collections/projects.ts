import type { CollectionConfig } from "payload";
import { CallToAction } from "@/components/Payload/blocks/CallToAction/config";
import { Content } from "@/components/Payload/blocks/Content/config";
import { MediaBlock } from "@/components/Payload/blocks/MediaBlock/config";
import { SampleBlock } from "@/components/Payload/blocks/SampleBlock/config";
import { generatePreviewPath } from "../utilities/generatePreviewPath";

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
          fields: [
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
              name: "medias",
              label: "Media",
              type: "relationship",
              relationTo: "media",
              hasMany: true,
              admin: {
                description: "Attach images from the Media collection",
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
          ],
        },
        {
          label: "Page",
          fields: [
            {
              name: "layout",
              type: "blocks",
              blocks: [SampleBlock, Content, MediaBlock],
              // required: true,
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
          collection: "pages",
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: "pages",
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
