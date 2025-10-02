import React from "react";
import TerminalComponent from "./Terminal";
import { Button } from "../ui/button";
import SectionHeader from "../SectionHeader";
import { TypingAnimation } from "../ui/typing-animation";
import Link from "next/link";
import { Route } from "next";

const About = () => {
  return (
    <div
      id="about"
      className="mx-auto flex max-w-[70rem] flex-col-reverse gap-20 px-4 py-35 lg:flex-row"
    >
      <TerminalComponent />
      <div className="flex-1">
        <SectionHeader className="mb-4">About Me</SectionHeader>
        <h1 className="mb-8 text-4xl font-semibold">Curious Problem-Solver</h1>
        <div className="mb-10 text-gray-400">
          <TypingAnimation className="font-fira mb-10 text-sm/[1.9em] font-light text-gray-400">
            Hi! I’m John Juvi De Villa, a full stack web developer who enjoys
            bringing ideas to life through code. I work across the entire web
            stack — developing responsive user interfaces, building robust APIs,
            and managing databases — to build applications that are fast,
            reliable, and enjoyable to use. I’m always excited to learn new
            things and solve challenging problems.
          </TypingAnimation>
        </div>
        <Button variant="dark" size="lg" asChild className="cursor-pointer">
          <Link
            href={"/RESUME - JOHN JUVI QUIMADA DE VILLA.pdf" as Route}
            download="RESUME - JOHN JUVI DE VILLA"
            target="_blank"
          >
            Download Resume
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default About;
