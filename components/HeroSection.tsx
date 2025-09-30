import React from "react";
import Image from "./Image";
import { Button } from "./ui/button";
import AnimatedHeroBkg from "./AnimatedHeroBkg";

function HeroSection() {
  return (
    <div className="relative h-screen w-screen">
      <AnimatedHeroBkg />

      <div className="pointer-events-none absolute top-0 left-[50%] z-20 flex h-full w-full max-w-[75rem] -translate-x-[50%] flex-row-reverse items-center justify-between px-4">
        <Image
          className="aspect-square h-80 w-auto rounded-full border-5 border-gray-400 dark:border-white"
          src="/DEVILLA_SQUARE.JPG"
          alt="hero-image"
        />
        <div className="my-10">
          <div className="mb-20 space-y-4 text-gray-500 dark:text-white">
            <h1 className="text-2xl font-semibold uppercase">Hello</h1>
            <h1 className="ml-6 text-6xl font-semibold">
              I&apos;m {"<"}
              <span className="text-[#4daefd]">John_Juvi</span> {"/>"}
            </h1>
            <h1 className="ml-12 text-6xl font-semibold">
              A {"<"}
              <span className="text-[#4daefd]">Full Stack Developer</span>{" "}
              {"/>"}
            </h1>
          </div>
          <div className="pointer-events-auto">
            <Button
              className="h-fit w-fit cursor-pointer px-8 py-2 text-lg text-black dark:bg-white"
              variant="outline"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
