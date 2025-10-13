import { Route } from "next";
import React from "react";
import SectionHeader from "../SectionHeader";
import { Button } from "../ui/button";
import Link from "next/link";
import { TypingAnimation } from "../ui/typing-animation";
import Contributions from "../Contributions";
import Image from "../Image";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css",
  "nodedotjs",
  "nextdotjs",
  "firebase",
  "supabase",
  "vercel",
  "git",
  "github",
  "figma",
  "shadcnui",
  "chart.js",
  "vite",
  "redux",
  "sass",
  "tailwindcss",
  "axios",
];

const Skills = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/white`,
  );

  return (
    <section className="mx-auto max-w-[70rem] space-y-20 px-4 py-25">
      <div className="flex h-fit flex-col-reverse gap-20 lg:flex-row">
        <div className="flex flex-1 items-center">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {images.map((img, indx) => (
              <Image
                className="mb-5 aspect-square h-fit w-12 object-cover"
                unoptimized
                key={indx}
                src={img}
                alt={img}
              />
            ))}
          </div>
        </div>

        <div className="flex-1">
          <SectionHeader className="mb-4">About Me</SectionHeader>
          <h1 className="mb-8 text-4xl font-semibold">
            Skilled and Experienced
          </h1>
          <div className="mb-10 text-gray-400">
            <TypingAnimation className="font-fira mb-10 text-sm/[1.9em] font-light text-gray-400">
              I have been programming since 2020. My experience covers a wide
              range of frontend technologies. <strong>ReactJS</strong> and{" "}
              <strong>NextJS</strong> for my frontend framework.{" "}
              <strong>Redux</strong> for advanced state management.{" "}
              <strong>GSAP</strong> and <strong>Framer Motion</strong> for
              frontend animations. <strong>Shadcn</strong>,{" "}
              <strong>SCSS</strong> and <strong>Tailwind</strong> CSS for UI
              libraries. <strong>Supabase</strong> and <strong>Firebase</strong>{" "}
              for database and authentication. Other tools and frameworks
              include{" "}
              <strong>React hook form, Chart.js, Axios and Vite.</strong>
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

      <Contributions className="mx-auto w-full lg:w-fit" year="2025" />
    </section>
  );
};

export default Skills;
