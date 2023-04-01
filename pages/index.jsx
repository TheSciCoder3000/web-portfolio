import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import TypingComponent from "@components/TypingComponent";

export default function Home() {
  const { pathname } = useRouter();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
  ];

  useEffect(() => {
    document.title = "John Juvi | Web Developer";
  }, []);

  return (
    <div className="home-cont">
      {/* Navigation */}
      <div className="nav-cont">
        {navLinks.map((nav, indx) => (
          <Link
            key={indx}
            className={`nav-link ${pathname == nav.path ? "disabled" : ""}`}
            href={nav.path}
          >
            {nav.name}
          </Link>
        ))}
      </div>

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
          I build budget-friendly landing pages and web applications for
          customers and businesses who wants a responsive and user-friendly
          websites.
        </p>
      </div>

      {/* About Me Section */}
      <div className="desc-section about-cont">
        <div className="section-row">
          <div className="section-content section-about">
            <h2 className="section-header">About Me</h2>
            <p className="about-content">
              Hello my name is John Juvi De Villa and I’m from the Philippines.
              I have experiences in programming such as game development (Godot)
              and app development but I am most experienced in the field of web
              development using Reactjs library.
            </p>
          </div>
          <div className="section-media"></div>
        </div>

        <div className="section-row">
          <div className="section-media"></div>
          <div className="section-content section-skills">
            <h2 className="section-header">Skills</h2>
            <p className="skills-content">
              I specialized in frontend development as a React Developer. I am
              also experienced in the Nextjs framework and other web development
              libraries like SASS and handling APIs. As a programmer, I am also
              well versed in using github for version control and collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
