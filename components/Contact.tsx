import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from "./ContactForm";
import BkgTransitionContainer from "./BkgTransitionContainer";

const Contact = () => {
  return (
    <BkgTransitionContainer color="#0d1117" className="min-h-screen py-30">
      <div className="mx-auto grid max-w-[80rem] grid-cols-1 gap-20 px-4 lg:grid-cols-2">
        <div className="flex flex-col justify-between gap-20">
          <div>
            <h1 className="font-fira mb-8 text-5xl lg:mb-15">
              Let&apos;s Work Together
            </h1>
          </div>

          <div className="flex justify-between">
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

            <div className="space-y-4">
              <h2 className="text-lg font-bold">Contact Me</h2>
              <div className="flex gap-4">
                <p className="text-sm text-gray-400">
                  drjjdevilla2002@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-md py-8 lg:p-8">
          <h2 className="mb-8 text-2xl">Get In Touch</h2>
          <ContactForm />
        </div>
      </div>
    </BkgTransitionContainer>
  );
};

export default Contact;
