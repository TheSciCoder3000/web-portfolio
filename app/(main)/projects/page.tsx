import { getPayload } from "payload";
import React from "react";
import configPromise from "@payload-config";
import {
  PROJECTS_SLUG,
  ProjectSelect,
} from "@/lib/payload/collections/projects";
import type { TransformCollectionWithSelect } from "payload";

type ProjectListItem = TransformCollectionWithSelect<
  typeof PROJECTS_SLUG,
  ProjectSelect
>;

export default async function ProjectsPage(): Promise<React.ReactElement> {
  const payload = await getPayload({ config: configPromise });

  const result = await payload.find<typeof PROJECTS_SLUG, ProjectSelect>({
    collection: PROJECTS_SLUG,
    depth: 1,
    limit: 50,
    // explicitly select the fields we want (ensures typing)
    select: { title: true, description: true, medias: true, slug: true },
  });

  const projects: ProjectListItem[] = result.docs;

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl">Projects</h1>
      <ul className="mt-6 space-y-6">
        {projects.map((p) => (
          <li key={(p as any).id}>
            {"title" in p ? (
              <h2 className="text-2xl">{p.title as string}</h2>
            ) : null}
            {"description" in p ? (
              <p className="text-muted-foreground text-sm">
                {p.description as string}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
