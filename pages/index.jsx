import Link from "next/link";

export default function Home() {
  return (
    <div className="home-cont">
      {/* Navigation */}
      <div className="nav-cont">
        <Link href="">Home</Link>
        <Link href="/about" passHref>
          About
        </Link>
        <Link href="/skills" passHref>
          Skills
        </Link>
        <Link href="/projects" passHref>
          Projects
        </Link>
      </div>

      {/* Hero Section */}
      <div className="hero-cont"></div>
    </div>
  );
}
