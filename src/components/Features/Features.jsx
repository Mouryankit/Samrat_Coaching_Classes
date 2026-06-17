import React from "react";
import "./Features.css";
import { featuresData } from "../../data/featuresData";


const Features = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="features-section" id="features">
      <div className="features-header">
        <span className="features-eyebrow">Our Strengths</span>
        <h2 className="section-title">Why Samrat Coaching?</h2>
        <p className="section-subtitle">
          Discover the unique advantages that make us the preferred choice for
          school academic coaching.
        </p>
      </div>

      <div className="features-bento-grid">
        {featuresData.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              className={`feature-bento-item ${feature.className}`}
              key={feature.id}
              onMouseMove={handleMouseMove}
            >
              <div className="feature-bento-content">
                <div className="feature-bento-icon"><Icon /></div>
                <div className="feature-bento-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
              <div className="feature-bento-glow" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;

