import { IProject } from "@/app/data";
import projStyles from "@/app/styles/project.module.scss";
import styles from "@/app/styles/global.module.scss";
import Image from "next/image";
import Button from "../Button";
import { Variants } from "motion/react";
import * as motion from "motion/react-client";

const backgroundVariant: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
  },
};
const contentVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  view: {
    opacity: 1,
  },
};

const Entry: React.FC<{ project: IProject }> = ({ project }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ margin: "200px 0px 180px 0px", amount: 0.2 }}
      className={projStyles.projectItem}
    >
      <motion.div
        initial="hidden"
        whileInView="view"
        viewport={{ margin: "0px 0px 0px 0px", amount: "all" }}
        variants={contentVariant}
        className={projStyles.itemContent}
      >
        <h2 className={styles.h2}>{project.title}</h2>
        <p className={styles.p}>{project.description}</p>

        <div className={projStyles.projLinks}>
          <Button link={project.github}>Source Code</Button>
          <Button link={project.live}>Live Preview</Button>
        </div>
      </motion.div>

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

      <motion.div
        variants={backgroundVariant}
        style={{ backgroundImage: `url(${project.ss[0]})` }}
        className={projStyles.background}
      ></motion.div>
    </motion.div>
  );
};

export default Entry;
