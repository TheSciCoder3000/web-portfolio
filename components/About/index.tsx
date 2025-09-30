import React from "react";
import TerminalComponent from "./Terminal";
import { Button } from "../ui/button";

const About = () => {
  return (
    <div className="mx-auto flex max-w-[70rem] flex-col-reverse items-center gap-20 px-4 py-25 md:flex-row">
      <TerminalComponent />
      <div>
        <h3 className="mb-4 w-fit rounded-lg bg-gray-300 px-3 py-0.5 text-sm font-bold text-black uppercase">
          About Me
        </h3>
        <h1 className="mb-8 text-4xl font-semibold">Curious Problem-Solver</h1>
        <p className="mb-10 text-gray-400">
          Hi! I’m John Juvi De Villa, a full stack web developer who enjoys
          bringing ideas to life through code. I work across the entire web
          stack — developing responsive user interfaces, building robust APIs,
          and managing databases — to build applications that are fast,
          reliable, and enjoyable to use. I’m always excited to learn new things
          and solve challenging problems.
        </p>
        <Button className="cursor-pointer">Download Resume</Button>
      </div>
    </div>
  );
};

export default About;
