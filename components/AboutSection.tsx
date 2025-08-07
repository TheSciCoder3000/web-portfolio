"use client";

import styles from "@/app/styles/global.module.scss";
import aboutStyles from "@/app/styles/about.module.scss";

import React from "react";
import { motion } from "motion/react";
import { useTiltCard } from "./hooks/useTIltCard";
import Image from "next/image";

function AboutSection() {
  const [ref, transform, handleMouseMove, handleMouseLeave] = useTiltCard();

  return (
    <div
      className={aboutStyles.aboutSection}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={aboutStyles.aboutInnerCard}>
        <div className={aboutStyles.aboutContent}>
          <div className={aboutStyles.aboutHeader}>
            <h3 className={styles.h3}>ABOUT ME</h3>
            <h2 className={styles.h2}>Fresh and New</h2>
          </div>
          <p className={styles.p}>
            i am a Computer Engineer graduate specializing in Software
            Development. Experienced in frontend web development using React and
            Typescript with solid foundation in backend development using Nodejs
            and Django.
          </p>
          <a className={`${styles.a} ${aboutStyles.aboutLink}`}>
            Download My Resume
          </a>
        </div>

        <motion.div className={aboutStyles.aboutBox} style={{ transform }}>
          <Image
            height={0}
            width={0}
            sizes="100vw"
            alt="grad-pic"
            className={aboutStyles.aboutImg}
            src="/grad.jpg"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default AboutSection;
