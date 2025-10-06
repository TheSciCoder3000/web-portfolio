import React from "react";
import Image from "next/image";
import { getProjectBySlug } from "@/lib/queries";

async function Project({ params }: PageProps<"/project/[projectId]">) {
  const { projectId } = await params;
  const project = await getProjectBySlug(projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <article className="prose prose-invert mx-auto max-w-3xl py-10">
      <h1 className="mb-6 text-4xl font-bold">{project.title}</h1>

      {project.content.map((block, i) => {
        if (block._type === "block") {
          return (
            <p key={i}>
              {block.children?.map((child, j) => (
                <span key={j}>{child.text}</span>
              ))}
            </p>
          );
        }

        if (block._type === "image" && block.asset?.url) {
          return (
            <Image
              key={i}
              height={0}
              width={0}
              src={block.asset.url}
              alt={`Project image ${i + 1}`}
              sizes="(max-width: 768px) 100vw, 800px"
              className="my-6 w-full rounded-lg object-cover"
            />
          );
        }

        return null;
      })}
    </article>
  );
}

export default Project;
