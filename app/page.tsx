import styles from "./styles/global.module.scss";
import projectStyles from "./styles/project.module.scss";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className={styles["home-page"]}>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Projects */}
      <div className={projectStyles["project-section"]}>
        <h1 className={projectStyles["project-header"]}>FEATURED WORKS</h1>
      </div>
    </div>
  );
}
