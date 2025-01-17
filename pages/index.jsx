// framer motion
import { motion } from "framer-motion";

// next js and react
import Link from "next/link";
import { useEffect, useRef } from "react";

// Other Imports
import TagCloud from "TagCloud";

// Local Imports
import TypingComponent from "@components/TypingComponent";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Projects from "@components/Projects";
import HeroImg from "@styles/img/heroImg.jpg";
import { useWindowDimensions } from "@utils/hooks";
import { navLinks, Tags } from "@utils/content";
import {
  callToActionBkgVariant,
  callToActionTextVariant,
  redirectLinkArrowVariant,
  redirectLinkUnderlineVariant,
} from "@utils/animationVariants";


export default function Home() {
  const IsTagCloudLoaded = useRef(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    document.title = "John Juvi | Web Developer";
  })

  useEffect(() => {
    if (IsTagCloudLoaded.current) return;

    TagCloud("#tagCloud", Tags, {
      radius: 250,
      maxSpeed: "fast",
      initSpeed: "fast",
      direction: 135,
      keep: true,
    });

    IsTagCloudLoaded.current = true;
  }, [width]);

  return (
    <div className="home-cont">
      {/* Navigation */}
      <Navbar navLinks={navLinks} />

      {/* Hero Section */}
      <div className="hero-cont">
        <img className="hero-img" src={HeroImg.src} alt="" />

        <h1 className="hero-title">Hi, I&apos;m John Juvi</h1>
        <h1 className="hero-title">
          A{" "}
          <TypingComponent
            className="hero-jobs"
            strings={["PROGRAMMER", "WEB DEVELOPER", "CODER", "FREELANCER"]}
          />
        </h1>
        <p className="hero-desc">
          A passionate programmer who enjoys learning and thinkering with new
          technologies. Actively in search of projects I can offer my services
          as a coder with the drive to innovate and develop.
        </p>
        <motion.button
          className="call-to-action"
          initial="hidden"
          whileHover="visible"
        >
          <motion.a
            className="call-to-action-text"
            variants={callToActionTextVariant}
            href="/resume.pdf"
            download="John Juvi De Villa - Resume"
          >
            Download My Resume{" "}
          </motion.a>
          <motion.div
            className="hover-bkg"
            variants={callToActionBkgVariant}
          ></motion.div>
        </motion.button>

      </div>

      {/* About Me Section */}
      <div id="about" className="desc-section about-cont">
        <div className="section-row">
          <div className="section-content section-about">
            <h2 className="section-header">About Me</h2>
            <p className="about-content">
              Hello, my name is John Juvi De Villa, you can call me Juvi. I am
              an undergraduate student taking up BS Computer Engineering in the
              Philippines. I am a passionate programmer and have always enjoyed
              coding since I was young. This drove me to learn different
              languages for different technologies.
            </p>
            <Link className="redirect-link about-me-link" href="/about">
              <motion.div
                className="link-cont"
                initial="rest"
                whileHover="hover"
              >
                More About Me
                <motion.span
                  className="material-icons arrow-icon"
                  variants={redirectLinkArrowVariant}
                >
                  arrow_forward
                </motion.span>
                <motion.span
                  className="underline-cont"
                  variants={redirectLinkUnderlineVariant}
                ></motion.span>
              </motion.div>
            </Link>
          </div>
          <div className="section-media"></div>
        </div>

        <div className="section-row">
          <div className="section-media" id="tagCloud"></div>
          <div className="section-content section-skills">
            <h2 className="section-header">Skills</h2>
            <p className="skills-content">
              My experiences covers a wide range of fields from basic game
              development to app development but mainly specializing in Web
              Development Technologies such as:
            </p>
            <ul className="skill-list">
              <li>React JS</li>
              <li>Node JS</li>
              <li>Redux</li>
              <li>Next JS</li>
              <li>Typescript</li>
              <li>Django</li>
              <li>Firebase</li>
              <li>REST Framework</li>
              <li>Tailwind</li>
            </ul>
            {/* <Link className="redirect-link learn-more" href="/about">
              <motion.div
                className="link-cont"
                initial="rest"
                whileHover="hover"
              >
                Learn More
                <motion.span
                  className="material-icons arrow-icon"
                  variants={redirectLinkArrowVariant}
                >
                  arrow_forward
                </motion.span>
                <motion.span
                  className="underline-cont"
                  variants={redirectLinkUnderlineVariant}
                ></motion.span>
              </motion.div>
            </Link> */}
          </div>
        </div>
      </div>

      {/* Projects */}
      <Projects />

      {/* Footer */}
      <Footer navLinks={navLinks} />
    </div>
  );
}
