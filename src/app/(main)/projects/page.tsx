import React from "react";
import config from "@payload-config";
import { getPayload } from "payload";
import ProjectListItem from "@/components/Projects/ProjectListItem";

export default async function ProjectsPage(): Promise<React.ReactElement> {
  const payload = await getPayload({ config });
  const projects = await payload.find({
    collection: "projects",
    limit: 100,
    sort: "-createdAt",
  });

  return (
    <div className="min-h-screen px-5 py-20 md:px-20">
      <h1 className="mb-10 text-4xl">Projects</h1>

      <ul className="mt-6 grid grid-cols-1 gap-6 space-y-6 md:grid-cols-2 lg:grid-cols-4">
        {projects.docs.map((project) => (
          <ProjectListItem key={project.id} project={project} />
        ))}
      </ul>
    </div>
  );
}
