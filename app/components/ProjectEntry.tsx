"use client";

import { IProject } from "../data";
import projStyles from "@/app/styles/project.module.scss";
import styles from "@/app/styles/global.module.scss";
import Image from "next/image";
import Button from "./Button";
import { motion } from "motion/react";

const ProjectEntry: React.FC<{ project: IProject }> = ({ project }) => {
  return (
    <div className={projStyles.projectItem}>
      <div className={projStyles.itemContent}>
        <h2 className={styles.h2}>{project.title}</h2>
        <div className={projStyles.pCont}>
          <div className={projStyles.pBarCont}>
            <motion.p
              initial={{ backgroundSize: "100% 100%" }}
              transition={{ duration: 0.9, delay: 0.2 }}
              whileInView={{ backgroundSize: "0% 100%" }}
              viewport={{ amount: "all" }}
              className={`${styles.p} ${projStyles.pbar}`}
            >
              {project.description}
            </motion.p>
          </div>
          <p className={styles.p}>{project.description}</p>
        </div>

        <div className={projStyles.projLinks}>
          <Button link={project.github}>Source Code</Button>
          <Button link={project.live}>Live Preview</Button>
          <motion.div
            viewport={{ amount: "all" }}
            initial={{ backgroundSize: "100% 100%" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileInView={{ backgroundSize: "0% 100%" }}
            className="link-bar"
          />
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
