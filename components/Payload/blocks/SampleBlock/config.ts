import { Block } from "payload";

export const SampleBlock: Block = {
  slug: "sampleblock",
  labels: {
    singular: "Text Content",
    plural: "Text Contents",
  },
  fields: [
    {
      name: "content",
      type: "richText",
    },
  ],
};
