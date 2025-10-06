import React from "react";
import { getProjectBySlug } from "@/lib/queries";
import Content from "@/components/Article/Content";
import Tag from "@/components/Projects/Tag";
import Link from "next/link";
import { Route } from "next";

async function Project({ params }: PageProps<"/project/[projectId]">) {
  const { projectId } = await params;
  const project = await getProjectBySlug(projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <article className="prose prose-invert relative mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-6 text-4xl font-bold">{project.title}</h1>

      <div className="mb-8 overflow-hidden rounded-lg border-1 border-gray-600 p-5">
        {project.github && (
          <p className="mb-4 text-[12px]">
            Github:{" "}
            <Link
              className="wrap-normal text-gray-400 transition-colors duration-300 hover:text-gray-200"
              href={project.github as Route}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.github}
            </Link>
          </p>
        )}

        {project.preview && (
          <p className="mb-4 text-[12px]">
            Preview:{" "}
            <Link
              className="wrap-normal text-gray-400 transition-colors duration-300 hover:text-gray-200"
              href={project.preview as Route}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.preview}
            </Link>
          </p>
        )}
        <h3 className="mb-1 text-sm">Tech Stack: </h3>
        <div className="mb-5 flex flex-wrap gap-2">
          {project.categories.map((tag, indx) => (
            <Tag {...tag} key={indx} />
          ))}
        </div>
      </div>

      <Content project={project} />
    </article>
  );
}

export default Project;
