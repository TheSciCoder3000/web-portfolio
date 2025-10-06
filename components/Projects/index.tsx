import React from "react";
import ProjectItem from "./ProjectItem";
import { getAllProjects } from "@/lib/queries";

const Project = async () => {
  const dataProjects = await getAllProjects();

  if (!dataProjects) return;

  return (
    <div className="w-full overflow-hidden md:overflow-visible">
      <div id="project" className="mx-auto max-w-[80rem] space-y-40 px-4 py-35">
        {dataProjects.map((item, indx) => (
          <ProjectItem item={item} key={indx} />
        ))}
      </div>
    </div>
  );
};

export default Project;
