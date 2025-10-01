import React from "react";
import Image from "../Image";
import AnimatedHeroBkg from "./AnimatedHeroBkg";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TextType from "./TextType";
import InfiniteMarquee from "./InfiniteMarquee";
import clsx from "clsx";
import SectionHeader from "../SectionHeader";

function HeroSection() {
  return (
    <div className="relative h-screen w-screen">
      <AnimatedHeroBkg />

      <div
        className={clsx(
          "absolute top-0 left-[50%] flex h-full w-full max-w-[80rem] flex-col items-center justify-start py-20",
          "lg:flex-row-reverse lg:justify-between lg:py-0",
          "pointer-events-none z-20 -translate-x-[50%] px-4",
        )}
      >
        <Image
          priority={true}
          className="aspect-square h-50 w-auto rounded-full border-5 border-gray-400 md:h-80 dark:border-white"
          src="/DEVILLA_SQUARE.JPG"
          alt="hero-image"
        />
        <div className="my-20 flex w-full flex-col items-start text-center md:items-start">
          <div className="mb-15 flex flex-col items-start space-y-4 text-gray-500 lg:items-start dark:text-white">
            <SectionHeader>Hi There,</SectionHeader>
            <h1 className="text-2xl font-semibold md:text-5xl">
              I&apos;m {"<"}
              <span className="text-[#4daefd]">John_Juvi</span> {"/>"}
            </h1>
            <h1 className="text-2xl font-semibold md:text-5xl">
              A {"<"}
              <TextType
                className="text-[#2cff7d]"
                text={[
                  "Full Stack Developer",
                  "ReactJS Developer",
                  "NextJS Developer",
                ]}
                textColors={["#2cff7d"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
              {"/>"}
            </h1>
          </div>
          <div className="pointer-events-auto">
            <div className="mb-10 flex gap-6">
              <Link
                className="group"
                href="https://www.github.com/thescicoder3000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  className="text-gray-400 transition-transform duration-250 group-hover:scale-120 group-hover:text-black dark:text-gray-400 dark:group-hover:text-white"
                  size={30}
                />
              </Link>
              <Link
                className="group"
                href="https://www.linkedin.com/in/john-juvi-de-villa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  className="text-gray-400 transition-transform duration-250 group-hover:scale-120 group-hover:text-black dark:text-gray-400 dark:group-hover:text-white"
                  size={30}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <InfiniteMarquee className="absolute bottom-0 left-0 w-full py-3">
        <Image
          src="/languages/nextjs.png"
          alt="nextjs logo"
          className="h-[5rem] w-fit object-contain"
        />
        <Image
          src="/languages/tailwind.png"
          alt="tailwindcss logo"
          className="h-[6rem] w-fit object-contain"
        />
      </InfiniteMarquee>
    </div>
  );
}

export default HeroSection;
