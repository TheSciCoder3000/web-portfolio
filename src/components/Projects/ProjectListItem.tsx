"use client";

import React from "react";
import clsx from "clsx";
import { Media, Project } from "@/payload-types";
import Image from "../Image";
import { useRouter } from "next/navigation";
import { Route } from "next";

interface ProjectListItemProps {
  className?: string;
  project: Project;
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({
  className,
  project,
}) => {
  const img = (project.images as Media[])?.[0];
  const router = useRouter();

  const handleClick = () => {
    router.push(`/projects/${project.slug}` as Route);
  };

  return (
    <li
      onClick={handleClick}
      key={project.id}
      className={clsx(
        "group relative flex h-full min-h-[20rem] cursor-pointer flex-col justify-end overflow-hidden rounded-lg bg-[#131313] p-4",
        className,
      )}
    >
      <div className="absolute top-0 left-0 z-3 h-full w-full brightness-80 transition-all duration-300 group-hover:brightness-70">
        <Image
          className="h-full w-full object-cover"
          src={img.url as string}
          alt={img.alt}
        />
      </div>

      <div className="absolute bottom-0 left-0 z-4 h-[65%] w-full bg-gradient-to-b from-transparent to-[#131313]" />

      <div className="relative z-5 mt-auto h-fit">
        <h2 className="mb-3 text-2xl font-bold">{project.title}</h2>
        <p className="line-clamp-3 text-sm text-gray-400">
          {project.description}
        </p>
      </div>
    </li>
  );
};

export default ProjectListItem;
