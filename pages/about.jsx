import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import { navLinks } from "@utils/content";
import React from "react";

const about = () => {
  return (
    <div className="about-cont">
      {/* Navigation Bar */}
      <Navbar navLinks={navLinks} />

      {/* Above the Fold */}
      <div className="about-above-the-fold">
        <h1 className="page-title">About Me</h1>
      </div>

      {/* About Content Section */}
      <div className="content-section"></div>

      {/* Footer */}
      <Footer navLinks={navLinks} />
    </div>
  );
};

export default about;
