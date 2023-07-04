import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import { navLinks } from "@utils/content";
import React, { useEffect } from "react";
import Profile1 from "@styles/img/about_1.jpg"
import Profile2 from "@styles/img/poster.jpg"

const About = () => {
  useEffect(() => {
    document.title = "About Me - John Juvi"
  }, [])

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
          “Make it work, make it right, make it fast”
        </h1>
        <p className="quote-author">-Kent Beck</p>
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
              As the years pass by, I enrolled in competition at our school to test my competency 
              in programming and technology. There I learned of my great interest and desire for 
              innovation and technological development. This passion lead me to dabble into other 
              sectors such as computer hardware. 6 years have passed since then and I still work 
              web development technologies while learning computer hardware and embedded systems.
            </p>
          </div>
          <div className="img-cont img-2"><img src={Profile2.src} alt="" className="profile-1" /></div>
        </div>
      </div>

      {/* Footer */}
      <Footer navLinks={navLinks} />
    </div>
  );
};

export default About;
