"use client";

import React, { useRef } from "react";
import { useForm } from "@formspree/react";
// import {
//   AdvancedMarker,
//   APIProvider,
//   ColorScheme,
//   Map,
// } from "@vis.gl/react-google-maps";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "./ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [state, handleSubmit] = useForm("xgvzrzjw");

  // const position = {
  //   lat: 13.887,
  //   lng: 120.6569,
  // };

  useGSAP(() => {
    gsap.fromTo(
      ".home-page",
      {
        backgroundColor: "#101828",
      },
      {
        backgroundColor: "#0d1117",
        scrollTrigger: {
          toggleActions: "play none none reverse",
          trigger: containerRef.current,
          start: "top 40%",
        },
      },
    );
  });

  return (
    <div ref={containerRef} className="min-h-screen py-30">
      <div className="mx-auto grid max-w-[80rem] grid-cols-1 gap-20 px-4 lg:grid-cols-2">
        <div className="flex flex-col justify-between gap-20">
          <div>
            <h1 className="font-fira mb-8 text-5xl lg:mb-15">
              Let&apos;s Work Together
            </h1>
            <p className="text-sm text-gray-400">drjjdevilla2002@gmail.com</p>
          </div>

          <div>
            <div className="space-y-4">
              <h2 className="text-lg font-bold">Find Me</h2>
              <div className="flex gap-4">
                <Link
                  className="group"
                  href="https://www.github.com/thescicoder3000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    className="text-gray-400 transition-transform duration-250 group-hover:scale-120 group-hover:text-black dark:text-gray-400 dark:group-hover:text-white"
                    size={20}
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
                    size={20}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-md py-8 lg:p-8">
          <h2 className="mb-8 text-2xl">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-15">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Input
                variant="vscode"
                className="rounded-none"
                required
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
              <Input
                variant="vscode"
                className="rounded-none"
                required
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <Textarea
                variant="vscode"
                className="min-h-50 resize-none rounded-none md:col-span-2"
                required
                id="message"
                name="message"
                placeholder="message"
              />
            </div>
            <Button
              size="sm"
              className="cursor-pointer rounded-sm bg-[#007acc] text-sm text-white hover:bg-[#005a9e]"
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
