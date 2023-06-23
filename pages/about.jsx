import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import { navLinks } from "@utils/content";
import React from "react";
import Profile1 from "@styles/img/about_1.jpg"

const about = () => {
  return (
    <div className="about-cont">
      {/* Navigation Bar */}
      <Navbar navLinks={navLinks} />

      {/* Above the Fold */}
      <div className="about-above-the-fold">
        <h1 className="page-title">About Me</h1>
      </div>

      {/* Value Proposition */}
      <div className="value-proposition">
        <h1 className="value-text">
          “Every website should be reliable with good quality, effectively
          delivering the customer’s goals and vision”
        </h1>
      </div>

      {/* About Content Section */}
      <div className="content-section">
        <div className="section-cont">
          <div className="img-cont img-1"><img src={Profile1.src} alt="" className="profile-1" /></div>
          <div className="text-cont">
            <h2 className="greeting">Hello Again, My name is</h2>
            <h2 className="user-name">John Juvi De Villa</h2>
            <p className="about-text-content">
              I first learnt how to code when I was Grade 9 and I have fallen in love
              with programming ever since. I enjoyed the analytical process that goes
              into developing programs and the level of abstract thinking required
              when it comes to coding. Just being able to learn the basics of HTML,
              CSS and javascript feels like some super power given to you as you 
              surf the web.
            </p>
          </div>
        </div>
        <div className="section-cont">
          <div className="text-cont">
            <p className="about-text-content">
              One of my main driving force that motivates me to learn programming
              is the desired to improve and inovate. To be able to build a program
              that not only functions as the user wishes but to also be capable
              of creating an environment and atmosphere that's tailored to the user
              or client. With the right designs and vision, anything can be 
              possible with the right engineer.
            </p>
          </div>
          <div className="img-cont img-2"></div>
        </div>
      </div>

      {/* Footer */}
      <Footer navLinks={navLinks} />
    </div>
  );
};

export default about;
