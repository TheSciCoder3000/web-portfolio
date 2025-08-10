import Contact from "@/components/Contact";
import styles from "./styles/global.module.scss";
import AboutSection from "@components/AboutSection";
import HeroSection from "@components/HeroSection";
import ProjectSection from "@components/ProjectSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles["home-page"]}>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Projects */}
      <ProjectSection />

      {/* Call to Action */}
      <Contact />

      <Footer />
    </div>
  );
}
