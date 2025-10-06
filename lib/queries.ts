// lib/queries/getProjectBySlug.ts
import { client } from "@/sanity/lib/client";
import { Project } from "@/types/sanity";

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      categories[]->{
        _id,
        name,
        description,
        backgroundColor,
        foregroundColor
      },
      github,
      preview,
      content[]{
        ...,
        _type == "image" => {
          ...,
          asset->{
            url
          }
        }
      }
    }`,
    { slug },
  );
}

export async function getAllProjects(): Promise<Project[] | null> {
  return client.fetch(`
    *[_type == "project"] | order(_createdAt asc){
    _id,
    title,
    slug,
    description,
    "images": content[_type == "image"]{
      _type,
      asset->{
        url,
        metadata { dimensions }
      }
    },
    categories[]->{
      _id,
      name,
      description,
      backgroundColor,
      foregroundColor
    },
      github,
      preview
}`);
}
