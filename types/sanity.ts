export interface SanityImageAsset {
  _ref: string;
  _type: "reference";
}

export interface SanityImage {
  _type: "image";
  asset: SanityImageAsset;
  alt?: string;
  caption?: string;
}

export interface SanityBlock {
  _type: "block";
  _key: string;
  children: { _key: string; _type: "span"; text: string }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  markDefs: any[];
  style: string;
}

export interface Color {
  _type: "color";
  alpha: number;
  hex: string;
}

export interface Category {
  _id: string;
  backgroundColor: Color;
  description: string;
  foregroundColor: Color;
  name: string;
}

// types/project.ts
export interface Project {
  _id: string;
  title: string;
  description: string;
  github?: string;
  preview?: string;
  slug: {
    current: string;
  };
  categories: Category[];
  images:
    | {
        _type: "image";
        asset: {
          url: string;
          metadata: {
            dimmensions: {
              aspectRatio: number;
              height: number;
              width: number;
            };
          };
        };
      }[]
    | null;
  content: Array<
    | {
        _type: "block";
        children: { text: string; marks: string[] }[];
        style?: string;
      }
    | {
        _type: "image";
        asset: {
          _ref: string;
          _type: "reference";
          url?: string;
        };
      }
  >;
}

export type SanityContent = (SanityBlock | SanityImage)[];
