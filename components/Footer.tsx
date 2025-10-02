import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <h3>GET IN TOUCH</h3>
          <p>drjjdevilla2002@gmail.com</p>
          <p>johnjuvi.work@gmail.com</p>
        </div>
        <div>
          <h3>SOCIALS</h3>
          <Link
            href="https://github.com/TheSciCoder3000"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </Link>
          <Link
            href="https://www.linkedin.com/in/john-juvi-de-villa"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </Link>
        </div>
        <div>
          <h3>LOCATION</h3>
          <p>Calatagan, Batangas</p>
          <p>Philippines</p>
        </div>
      </div>

      <div>
        <h3>
          © {new Date().getFullYear()} JOHN JUVI DE VILLA. All Rights
          Reserved.{" "}
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
