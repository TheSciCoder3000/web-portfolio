import React from "react";
import config from "@payload-config";
import { getPayload } from "payload";
import Link from "next/link";
import { Route } from "next";
import { RenderBlocks } from "@/blocks/RenderBlocks";
import Tag from "@/components/Projects/Tag";
import { LivePreviewListener } from "@/components/LivePreviewListener";

async function ProjectDetails({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const payload = await getPayload({ config });
  const project = await payload
    .find({
      collection: "projects",
      limit: 1,
      sort: "-createdAt",
      where: {
        slug: { equals: slug },
      },
      draft: true,
    })
    .then((res) => res.docs[0]);

  return (
    <div>
      <LivePreviewListener />
      <div className="mx-auto max-w-[60rem] space-y-8 px-4 py-20">
        <div>
          <h1 className="mb-4 text-3xl font-bold">{project.title}</h1>
          <p className="text-gray-300">{project.description}</p>
        </div>

        <div className="mb-8 overflow-hidden rounded-lg border-1 border-gray-600 p-5">
          {project.githubLink && (
            <p className="mb-4 text-[12px]">
              Github:{" "}
              <Link
                className="wrap-normal text-gray-400 transition-colors duration-300 hover:text-gray-200"
                href={project.githubLink as Route}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.githubLink}
              </Link>
            </p>
          )}

          {project.previewLink && (
            <p className="mb-4 text-[12px]">
              Preview:{" "}
              <Link
                className="wrap-normal text-gray-400 transition-colors duration-300 hover:text-gray-200"
                href={project.previewLink as Route}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.previewLink}
              </Link>
            </p>
          )}
          <h3 className="mb-1 text-sm">Tech Stack: </h3>
          <div className="mb-5 flex flex-wrap gap-2">
            {project.categories?.map((tag, indx) => {
              if (typeof tag === "string") return;
              return <Tag key={indx} {...tag} />;
            })}
          </div>
        </div>

        <div>
          <RenderBlocks blocks={project.layout} />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
