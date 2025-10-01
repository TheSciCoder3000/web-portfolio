"use client";

import React, { useState } from "react";
import { TypingAnimation } from "../ui/typing-animation";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Route } from "next";
import { BiDesktop } from "react-icons/bi";
import { IProject } from "@/app/data";
import { AnimatePresence, motion, stagger } from "motion/react";

interface ProjectTextProps {
  item: IProject;
  children: string;
}
const ProjectText: React.FC<ProjectTextProps> = ({ item, children }) => {
  const [animationFinished, setAnimationFinished] = useState(false);
  return (
    <>
      <div className="font-fira mb-6 text-gray-400">
        <TypingAnimation
          onAnimationComplete={() => setAnimationFinished(true)}
          duration={1.5}
          startOnView
          className="text-base/[1.8em]"
        >
          {children}
        </TypingAnimation>
      </div>
      <motion.div
        transition={{ delayChildren: stagger(0.4) }}
        className="flex gap-2 md:gap-12"
      >
        <AnimatePresence>
          {animationFinished && (
            <>
              <motion.div
                key="github-btn"
                className="w-full flex-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Button className="w-full flex-1" asChild>
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Button className="w-full flex-1" asChild>
                  <Link
                    href={item.live as Route}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiDesktop /> Preview
                  </Link>
                </Button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default ProjectText;
