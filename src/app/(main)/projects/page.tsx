import React from "react";
import config from "@payload-config";
import { getPayload } from "payload";

export default async function ProjectsPage(): Promise<React.ReactElement> {
  const payload = await getPayload({ config });
  const projects = await payload.find({
    collection: "projects",
    limit: 100,
    sort: "-createdAt",
  });

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl">Projects</h1>
      <ul className="mt-6 space-y-6">
        {projects.docs.map((project) => (
          <li key={project.id} className="border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
