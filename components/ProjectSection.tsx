import React from "react";
import projectStyles from "@/app/styles/project.module.scss";
import styles from "@/app/styles/global.module.scss";
import { projects } from "../app/data";
import ProjectEntry from "./ProjectEntry";

function ProjectSection() {
  return (
    <div className={projectStyles["project-section"]}>
      <h1 className={projectStyles["project-header"]}>FEATURED WORKS</h1>
      <h3 className={`${styles.h3} ${projectStyles.subHeader}`}>PROJECTS</h3>
      <div className={projectStyles.projectEntries}>
        {projects.map((proj) => (
          <ProjectEntry key={proj.title} project={proj} />
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
