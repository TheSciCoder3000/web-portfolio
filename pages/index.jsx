import Link from "next/link";
import HomeStyles from "../styles/sass/Home.module.scss";

export default function Home() {
  return (
    <div className={HomeStyles.homeSection}>
      {/* Navigation */}
      <div className={HomeStyles.navContainer}>
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
    </div>
  );
}
