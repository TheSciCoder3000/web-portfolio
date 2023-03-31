import Link from "next/link";
import { useRouter } from "next/router";
import TypingComponent from "../components/TypingComponent";

export default function Home() {
  const { pathname } = useRouter();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
  ];

  console.log(pathname);

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
      </div>

      {/* About Me Section */}
      <div className="about-cont">
        <h2 className="section-header">About Me</h2>
        <p className="about-content">
          Hello my name is John Juvi De Villa and I’m from the Philippines. I
          have experiences in programming such as game development (Godot) and
          app development but I am most experienced in the field of web
          development using Reactjs library.
        </p>
      </div>
    </div>
  );
}
