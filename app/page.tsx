import styles from "./styles/global.module.scss";
import projectStyles from "./styles/project.module.scss";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <div className={styles["home-page"]}>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Projects */}
      <ProjectSection />
    </div>
  );
}
