import React from "react";
import "./About.css";
import aboutus from "../assets/aboutus.png";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={aboutus} alt="about-us" />
      </div>

      {/* Section 1 - Image Left, Text Right */}
      <div className="about-section">
        <div className="about-image">
          <img src={about1} alt="About 1" />
        </div>
        <div className="about-text">
          <h2>Meet your customer's with live video chat</h2>
          <p>
            Get paychecks up to two days early. Get a $20 bonus when you receive
            qualifying direct deposits
          </p>
        </div>
      </div>

      {/* Section 2 - Image Right, Text Left */}
      <div className="about-section reverse">
        <div className="about-text">
          <h2>Start selling directly inside conversions</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered all injected humour or randomised words
            which don't look even slightly believable.
          </p>
        </div>
        <div className="about-image">
          <img src={about2} alt="About 2" />
        </div>
      </div>

      {/* Section 3 - Image Left, Text Right */}
      <div className="about-section">
        <div className="about-image">
          <img src={about3} alt="About 3" />
        </div>
        <div className="about-text">
          <h2>Get direct orders from your customer's</h2>
          <p>
            Create custom landing pages with Rareblocks that converts more
            visitors than any website. With lots of unique blocks easily build a
            page. There are many variations of passages of available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
