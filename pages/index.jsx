import { useEffect, useRef } from "react";
import TypingComponent from "@components/TypingComponent";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import TagCloud from "TagCloud";
import Projects from "@components/Projects";
import { motion } from "framer-motion";
import Link from "next/link";
import HeroImg from "@styles/img/heroImg.png";

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

const callToActionBkgVariant = {
  visible: {
    width: "125%",
  },
  hidden: {
    width: "0px",
  },
};

const callToActionTextVariant = {
  visible: {
    color: "#000000",
  },
  hidden: {
    color: "#3aff8f",
  },
};

const redirectLinkArrowVariant = {
  rest: {
    x: 0,
  },
  hover: {
    x: "0.4rem",
  },
};

const redirectLinkUnderlineVariant = {
  rest: {
    width: 0,
  },
  hover: {
    width: "105%",
  },
};

export default function Home() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
  ];

  const IsTagCloudLoaded = useRef(false);

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
  }, []);

  return (
    <div className="home-cont">
      {/* Navigation */}
      <Navbar navLinks={navLinks} />

      {/* Hero Section */}
      <div className="hero-cont">
        <h1 className="hero-title">Hi, I'm John Juvi</h1>
        <h1 className="hero-title">
          A{" "}
          <TypingComponent
            className="hero-jobs"
            strings={["PROGRAMMER", "WEB DEVELOPER", "CODER", "FREELANCER"]}
          />
        </h1>
        <p className="hero-desc">
          I provide clients and small businesses who are looking for
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

        <img className="hero-img" src={HeroImg.src} alt="" />
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
              coding since I was young. This lead me to learn how to code at a
              young age and have garnered a significant amount of experience
              along the way.
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
              development to app development but the field in which I
              specialized the most is web development with Reactjs as my main
              frontend library. You can learn more about my experiences and
              journey as a software developer by clicking on the link below.
            </p>
            <Link className="redirect-link learn-more" href="/about">
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
            </Link>
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
