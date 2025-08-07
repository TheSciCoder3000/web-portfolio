import React from "react";
import projectStyles from "@/app/styles/project.module.scss";
import styles from "@/app/styles/global.module.scss";
import { projects } from "../app/data";
import Entry from "./ProjectComponents/Entry";
import * as motion from "motion/react-client";
import { Variants } from "motion";

const h3Variant: Variants = {
  offscreen: { opacity: 0 },
  onscreen: { opacity: 1 },
};

function ProjectSection() {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView="onscreen"
      viewport={{ margin: "0px 0px -500px 0px" }}
      className={projectStyles["project-section"]}
    >
      <h1 className={projectStyles["project-header"]}>FEATURED WORKS</h1>
      <motion.h3
        variants={h3Variant}
        className={`${styles.h3} ${projectStyles.subHeader}`}
      >
        PROJECTS
      </motion.h3>
      <div className={projectStyles.projectEntries}>
        {projects.map((proj) => (
          <Entry key={proj.title} project={proj} />
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectSection;
