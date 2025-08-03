import styles from "./styles/global.module.scss";
import heroStyles from "./styles/hero.module.scss";
import aboutStyles from "./styles/about.module.scss";

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
      <div className={aboutStyles.aboutSection}>
        <div className={aboutStyles.aboutBox}>
          <div className={aboutStyles.aboutContent}>
            <div className={aboutStyles.aboutHeader}>
              <h3 className={styles.h3}>ABOUT ME</h3>
              <h2 className={styles.h2}>Fresh and New</h2>
            </div>
            <p className={styles.p}>
              i am a Computer Engineer graduate specializing in Software
              Development. Experienced in frontend web development using React
              and Typescript with solid foundation in backend development using
              Nodejs and Django.
            </p>
            <a className={`${styles.a} ${aboutStyles.aboutLink}`}>
              Download My Resume
            </a>
          </div>

          <img className={aboutStyles.aboutImg} src="/grad.jpg" />
        </div>
      </div>
    </div>
  );
}
