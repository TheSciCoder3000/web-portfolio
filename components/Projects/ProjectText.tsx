"use client";

import React, { useState } from "react";
import { TypingAnimation } from "../ui/typing-animation";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Route } from "next";
import { BiDesktop } from "react-icons/bi";
import { IProject } from "@/app/data";
import { AnimatePresence, motion, stagger, Variants } from "motion/react";

const buttonVariants: Variants = {
  initial: { opacity: 0, x: 50 },
  view: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

interface ProjectTextProps {
  item: IProject;
  children: string;
}
const ProjectText: React.FC<ProjectTextProps> = ({ item, children }) => {
  const [animationFinished, setAnimationFinished] = useState(false);

  const handleAnimationComplete = () => setAnimationFinished(true);

  return (
    <>
      <div className="font-fira mb-6 text-gray-400">
        <TypingAnimation
          onAnimationComplete={handleAnimationComplete}
          className="text-base/[1.8em]"
        >
          {children}
        </TypingAnimation>
      </div>
      <AnimatePresence>
        {animationFinished && (
          <motion.div
            initial="initial"
            animate="view"
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
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectText;
