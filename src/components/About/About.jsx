import React from "react";
import "./About.css";
import aboutImg from "/src/assets/images/person.png"; // Add your image

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left image */}
        <div className="about-image">
          <img src={aboutImg} alt="About Us" />
        </div>

        {/* Right text */}
        <div className="about-content">
          <h2 className="section-title">About Samrat Coaching Classes</h2>
          <p className="section-subtitle">
            Empowering students with quality education and personalized guidance
          </p>

          <p className="about-text">
            At Samrat Coaching Classes, we believe every student has the potential
            to excel. Our mission is to provide comprehensive learning programs
            with expert faculty, innovative teaching methods, and continuous
            support. We focus on building confidence, clarity of concepts, and
            academic excellence, ensuring our students achieve their dreams.
          </p>

          <ul className="about-points">
            <li>Experienced & Dedicated Faculty</li>
            <li>Small Batch Sizes for Personal Attention</li>
            <li>Regular Tests & Doubt Sessions</li>
            <li>Result-Oriented Curriculum</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
