import { projects } from "@/app/data";
import React from "react";
import ProjectItem from "./ProjectItem";

const Project = () => {
  return (
    <div>
      <div id="project" className="mx-auto max-w-[80rem] space-y-40 px-4 py-35">
        {projects.map((item, indx) => (
          <ProjectItem item={item} key={indx} />
        ))}
      </div>
    </div>
  );
};

export default Project;
