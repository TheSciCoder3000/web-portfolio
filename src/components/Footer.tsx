import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 px-4 pt-20 pb-5">
      <div className="mx-auto max-w-[80rem] space-y-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-2">GET IN TOUCH</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>drjjdevilla2002@gmail.com</p>
              <p>johnjuvi.work@gmail.com</p>
            </div>
          </div>

          <div>
            <h3 className="mb-2">SOCIALS</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <Link
                className="transition-colors duration-300 hover:text-gray-300"
                href="https://github.com/TheSciCoder3000"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB
              </Link>
              <Link
                className="transition-colors duration-300 hover:text-gray-300"
                href="https://www.linkedin.com/in/john-juvi-de-villa"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-2">Section</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <Link
                className="transition-colors duration-300 hover:text-gray-300"
                href="/#home"
              >
                Home
              </Link>
              <Link
                className="transition-colors duration-300 hover:text-gray-300"
                href="/#about"
              >
                About
              </Link>
              <Link
                className="transition-colors duration-300 hover:text-gray-300"
                href="/#project"
              >
                Projects
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-2">LOCATION</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Calatagan, Batangas</p>
              <p>Philippines</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xs">
            © {new Date().getFullYear()} JOHN JUVI DE VILLA. All Rights
            Reserved.{" "}
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
