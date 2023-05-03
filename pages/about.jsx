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
            <h2 className="user-name">John Juvi Q.</h2>
            <h2 className="user-lastname">De Villa</h2>
            <p className="about-text-content">
              Greetings, once again my name is John Juvi Q. De Villa. I am a
              college undergraduate, currently taking BS Computer Engineering
              in De La Salle Dasmarinas. I have a lot of experiences in programming
              in the past now. My first project was building a computer game
              using Godot as the game engine. During the pandemic, I also 
              learned web development using Python as my programming language
              and Django for my backend framework.
            </p>
          </div>
        </div>
        <div className="section-cont">
          <div className="text-cont">
            <p className="about-text-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
              nibh non ante blandit ullamcorper ut in ex. Vivamus nec pulvinar
              nunc. Suspendisse at pharetra nunc, nec dapibus nunc. Nulla cursus
              justo sit amet posuere venenatis. In hac habitasse platea
              dictumst. Pellentesque ultrices turpis sem, sed efficitur sem
              ultrices id.
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
