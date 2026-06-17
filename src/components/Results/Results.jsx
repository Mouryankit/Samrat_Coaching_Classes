import React, { useEffect, useState, useRef } from "react";
import "./Results.css";
import ResultsStats from "./ResultsStats";
import ResultCard from "./ResultCard";
import ResultsModal from "./ResultsModal";
import { statsData, rankersData } from "../../data/resultsData";


const Results = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Triple the data array for seamless looping marquee
  const marqueeData = [...rankersData, ...rankersData, ...rankersData];

  return (
    <section className="results-section" id="results" ref={sectionRef}>
      <div className="results-bg-glow" />
      
      <div className="results-header">
        <span className="results-eyebrow">Academic Achievements</span>
        <h2 className="section-title">Our Wall of Fame</h2>
        <p className="section-subtitle">
          Celebrating the dedication, hard work, and outstanding board results of our students
        </p>
      </div>

      {/* Trust Badges */}
      <div className="results-trust-badges">
        <span className="trust-badge"><span className="badge-bullet">🌟</span> Academic Excellence</span>
        <span className="trust-badge"><span className="badge-bullet">❤️</span> Trusted by Parents</span>
        <span className="trust-badge"><span className="badge-bullet">📚</span> Board Exam Specialists</span>
        <span className="trust-badge"><span className="badge-bullet">🏅</span> Scholarship Achievers</span>
        <span className="trust-badge"><span className="badge-bullet">🏫</span> Quality Education Since 2014</span>
      </div>

      {/* Stats Counter Row */}
      <ResultsStats statsData={statsData} visible={isVisible} />

      {/* Conditionally Render: Scrolling Carousel or Static Grid */}
      {rankersData.length > 4 ? (
        <div className="results-marquee-container">
          <div className="results-marquee-track">
            {marqueeData.map((ranker, index) => (
              <ResultCard 
                key={`marquee-${ranker.id}-${index}`} 
                ranker={ranker} 
                index={index} 
                className="marquee-card" 
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="rankers-grid">
          {rankersData.map((ranker, index) => (
            <ResultCard 
              key={`grid-${ranker.id}`} 
              ranker={ranker} 
              index={index} 
            />
          ))}
        </div>
      )}

      {/* CTA Section */}
      <div className="results-cta">
        <button className="btn-enroll" onClick={() => setIsModalOpen(true)}>
          View All {rankersData.length} Toppers
        </button>
      </div>

      {/* View All Modal */}
      {isModalOpen && (
        <ResultsModal 
          onClose={() => setIsModalOpen(false)} 
          rankersData={rankersData} 
        />
      )}
    </section>
  );
};

export default Results;
