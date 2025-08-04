import React from "react";
import { IProject } from "../data";
import projStyles from "@/app/styles/project.module.scss";
import styles from "@/app/styles/global.module.scss";
import Image from "next/image";
import Button from "./Button";

const ProjectEntry: React.FC<{ project: IProject }> = ({ project }) => {
  return (
    <div className={projStyles.projectItem}>
      <div className={projStyles.itemContent}>
        <h2 className={styles.h2}>{project.title}</h2>
        <p className={styles.p}>{project.description}</p>

        <div className={projStyles.projLinks}>
          <Button link={project.github}>Source Code</Button>
          <Button link={project.live}>Live Preview</Button>
        </div>
      </div>

      <div className={projStyles.itemImages}>
        {project.ss.map((image, indx) => (
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            key={indx}
            alt={image}
            src={image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectEntry;
