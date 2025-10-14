import { CollectionConfig } from "payload";
import { colorPickerField } from "@innovixx/payload-color-picker-field";

export const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    colorPickerField({
      name: "bkgColor",
      label: "Background Color",
      required: true,
    }),
    colorPickerField({
      name: "fontColor",
      label: "Font Color",
      required: true,
    }),
  ],
};
