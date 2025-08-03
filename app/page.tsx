import styles from "./styles/global.module.scss";
import heroStyles from "./styles/hero.module.scss";
import projectStyles from "./styles/project.module.scss";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <div className={heroStyles["home-page"]}>
      {/* Hero Section */}
      <div className={heroStyles.heroSection}>
        {/* Hero Name */}
        <div className={heroStyles.heroName}>
          <h1 className={styles.h1}>JOHN JUVI DE VILLA</h1>
          <hr className={heroStyles.headerBar} />
        </div>

        <img src="/hero-portrait.png" className={heroStyles.heroImg} />

        <div className={heroStyles["hero-box"]}></div>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Projects */}
      <div className={projectStyles["project-section"]}>
        <h1 className={projectStyles["project-header"]}>FEATURED WORKS</h1>
      </div>
    </div>
  );
}
