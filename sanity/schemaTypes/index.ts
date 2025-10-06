import { type SchemaTypeDefinition } from "sanity";
import { projectTypes } from "./projectTypes";
import { categoryTypes } from "./categoryTypes";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectTypes, categoryTypes],
};
