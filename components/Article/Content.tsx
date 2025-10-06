import React from "react";
import clsx from "clsx";
import { Project } from "@/types/sanity";
import Paragraph from "@/components/Article/Paragraph";
import Image from "next/image";

interface ContentProps {
  className?: string;
  project: Project;
}

const Content: React.FC<ContentProps> = ({ className, project }) => {
  return (
    <div className={clsx("", className)}>
      {project.content.map((block, i) => {
        if (block._type === "block") {
          return (
            <p key={i} className="mb-8 text-gray-300">
              {block.children?.map((child, j) => (
                <Paragraph marks={child.marks} key={j}>
                  {child.text}
                </Paragraph>
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
    </div>
  );
};

export default Content;
