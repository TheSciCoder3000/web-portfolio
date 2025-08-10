import React from "react";
import footerStyles from "@/app/styles/footer.module.scss";
import styles from "@/app/styles/global.module.scss";

const Footer = () => {
  return (
    <footer className={footerStyles.footerContainer}>
      <div className={footerStyles.links}>
        <div className={footerStyles.emails}>
          <h3 className={styles.h3}>GET IN TOUCH</h3>
          <p className={styles.p}>drjjdevilla2002@gmail.com</p>
          <p className={styles.p}>johnjuvi.work@gmail.com</p>
        </div>
        <div className={footerStyles.socials}>
          <h3 className={styles.h3}>SOCIALS</h3>
          <p className={styles.p}>GITHUB</p>
          <p className={styles.p}>LINKEDIN</p>
        </div>
        <div className={footerStyles.location}>
          <h3 className={styles.h3}>LOCATION</h3>
          <p className={styles.p}>Calatagan, Batangas</p>
          <p className={styles.p}>Philippines</p>
        </div>
      </div>

      <div className={footerStyles.controls}>
        <h3 className={styles.h3}>
          © {new Date().getFullYear()} JOHN JUVI DE VILLA. All Rights Reserved.{" "}
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
