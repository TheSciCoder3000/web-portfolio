"use client";

import React from "react";
import heroStyles from "@/app/styles/hero.module.scss";
import styles from "@/app/styles/global.module.scss";
import { motion, useAnimate, Variants } from "motion/react";
import Image from "next/image";
import useMediaQuery from "./hooks/useMediaQuery";

const nameBarVariant = {
  initial: {
    width: 0,
  },
  animate: {
    width: "16rem",
    transition: { delay: 0.3 },
  },
};

const containerVariant: Variants = {
  initial: {
    margin: "0 5rem",
    borderRadius: "0 0 50px 50px",
  },

  onscreen: {
    margin: 0,
    borderRadius: 0,
  },
};

function HeroSection() {
  const [scope, animate] = useAnimate();
  const mediaMatch = useMediaQuery({ minWidth: 500 });

  const handleHeaderAnimationComplete = () => {
    animate(
      scope.current,
      {
        transform: "skew(-35deg) scaleY(1)",
      },
      { duration: 0.2, ease: "easeIn" }
    );
  };
  return (
    <motion.div
      variants={containerVariant}
      whileInView="onscreen"
      initial={mediaMatch ? "initial" : "onscreen"}
      viewport={{ amount: 0.55 }}
      className={heroStyles.heroSection}
    >
      {/* Hero Name */}
      <div className={heroStyles.heroName}>
        <h1 className={styles.h1}>JOHN JUVI DE VILLA</h1>
        <motion.hr
          variants={nameBarVariant}
          initial="initial"
          animate="animate"
          className={heroStyles.headerBar}
          onAnimationComplete={handleHeaderAnimationComplete}
        />
      </div>

      <Image
        alt="hero-portrait"
        src="/hero-portrait.png"
        width={0}
        height={0}
        sizes="100vw"
        className={heroStyles.heroImg}
      />

      <motion.div
        ref={scope}
        initial={{ transform: "skew(-35deg) scaleY(0)" }}
        className={heroStyles["hero-box"]}
      ></motion.div>
    </motion.div>
  );
}

export default HeroSection;
