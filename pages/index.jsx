import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import TagCloud from "TagCloud";
import TypingComponent from "@components/TypingComponent";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Projects from "@components/Projects";
import HeroImg from "@styles/img/heroImg.jpg";
import { useWindowDimensions } from "@utils/hooks";
import { navLinks } from "@utils/content";
import {
  callToActionBkgVariant,
  callToActionTextVariant,
  redirectLinkArrowVariant,
  redirectLinkUnderlineVariant,
} from "@utils/animationVariants";

const Tags = [
  "JavaScript",
  "CSS",
  "HTML",
  "Vscode",
  "React",
  "Python",
  "Linux",
  "git",
  "Firebase",
  "SASS",
  "JSON",
  "Figma",
  "Typescript",
  "Java",
  "Django",
  "REST Framework",
  "API",
  "Arduino",
  "C++",
  "Godot",
];

export default function Home() {
  const IsTagCloudLoaded = useRef(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    document.title = "John Juvi | Web Developer";
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

        <h1 className="hero-title">Hi, I'm John Juvi</h1>
        <h1 className="hero-title">
          A{" "}
          <TypingComponent
            className="hero-jobs"
            strings={["PROGRAMMER", "WEB DEVELOPER", "CODER", "FREELANCER"]}
          />
        </h1>
        <p className="hero-desc">
          I provide clients and small businesses who are looking for a
          budget-friendly, responsive and reliable websites and web applications
        </p>
        <motion.button
          className="call-to-action"
          initial="hidden"
          whileHover="visible"
        >
          <motion.span
            className="call-to-action-text"
            variants={callToActionTextVariant}
          >
            Get in Touch{" "}
          </motion.span>
          <motion.div
            className="hover-bkg"
            variants={callToActionBkgVariant}
          ></motion.div>
        </motion.button>

      </div>

      {/* About Me Section */}
      <div className="desc-section about-cont">
        <div className="section-row">
          <div className="section-content section-about">
            <h2 className="section-header">About Me</h2>
            <p className="about-content">
              Hello, my name is John Juvi De Villa, you can call me Juvi. I am
              an undergraduate student taking up BS Computer Engineering in the
              Philippines. I am a passionate programmer and have always enjoyed
              coding since I was young. This lead me to learn and garnered a
              significant amount of experience along the way.
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
              development to app development and the field in which I
              specialized the most is web development with Reactjs as my main
              frontend library. You can learn more about my experiences and
              journey as a software developer by clicking on the link below.
            </p>
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
