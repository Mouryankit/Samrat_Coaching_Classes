import React, { useState, useRef, useEffect } from "react";
import "./About.css";
import AboutThumbnail from "../../assets/thumbnail.png";
import AboutVideoPlayer from "./AboutVideoPlayer";
import { highlightsData, youtubeVideoId } from "../../data/aboutData";



const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`about-section ${isVisible ? "animate-in" : ""}`} 
      id="about"
    >
      <div className="about-container">
        
        {/* Left: Interactive Video Block */}
        <AboutVideoPlayer videoId={youtubeVideoId} thumbnailSrc={AboutThumbnail} />

        {/* Right: Storytelling Content */}
        <div className="about-content-side">
          <div className="about-header-meta">
            <h2 className="section-title">The Samrat Legacy</h2>
          </div>
          
          <p className="about-lead">
            At Samrat Coaching Classes, we guide students toward academic success and character development. With expert mentorship and proven methods, we make learning engaging, result-oriented, and accessible.
          </p>

          <div className="about-highlights-grid">
            {highlightsData.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div className="highlight-item" key={index}>
                  <div className="highlight-icon-wrap"><Icon /></div>
                  <div className="highlight-text">
                    <h4>{highlight.title}</h4>
                    <p>{highlight.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>


          <div className="about-action">
            <a href="#contact" className="btn-enroll">Explore Programs</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
