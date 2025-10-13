"use client";

import React, { useState } from "react";
import { TypingAnimation } from "../ui/typing-animation";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Route } from "next";
import { BiDesktop } from "react-icons/bi";
import { IProject } from "@//lib/data";
import { motion, stagger, Variants } from "motion/react";

const buttonVariants: Variants = {
  initial: { opacity: 0, x: 50 },
  view: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

interface ProjectTextProps {
  item: IProject;
  children: string;
}
const ProjectText: React.FC<ProjectTextProps> = ({ item, children }) => {
  const [containerAnimation, setContainerAnimation] = useState<
    "initial" | "view"
  >("initial");

  const handleAnimationComplete = () => setContainerAnimation("view");

  return (
    <>
      <div className="font-fira mb-6 text-gray-400">
        <TypingAnimation
          onAnimationComplete={handleAnimationComplete}
          className="text-base/[1.8em] font-light"
        >
          {children}
        </TypingAnimation>
      </div>
      <motion.div
        initial="initial"
        animate={containerAnimation}
        transition={{ delayChildren: stagger(0.1) }}
        className="flex gap-2 md:gap-12"
      >
        <motion.div
          key="github-btn"
          className="w-full flex-1"
          variants={buttonVariants}
        >
          <Button variant="dark" className="w-full flex-1" asChild>
            <Link
              href={item.github as Route}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> Source Code
            </Link>
          </Button>
        </motion.div>
        <motion.div
          key="preview-btn"
          className="w-full flex-1"
          variants={buttonVariants}
        >
          <Button variant="dark" className="w-full flex-1" asChild>
            <Link
              href={item.live as Route}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiDesktop /> Preview
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProjectText;
