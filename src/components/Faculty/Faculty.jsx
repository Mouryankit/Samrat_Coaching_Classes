import React from "react";
import "./Faculty.css";
import { facultyData } from "../../data/facultyData";
import { FaGraduationCap, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const FacultyCard = ({ teacher }) => {
  return (
    <div className="faculty-card">
      <div className="faculty-img-wrapper">
        <img src={teacher.img} alt={teacher.name} className="faculty-img" />
        <span className="faculty-exp-badge">
          <FaCalendarAlt className="badge-icon" />
          {teacher.experience} Exp
        </span>
      </div>
      <div className="faculty-info">
        <h3 className="faculty-name">{teacher.name}</h3>
        <p className="faculty-role">{teacher.role}</p>
        
        <div className="faculty-details">
          <div className="detail-row">
            <FaGraduationCap className="detail-icon" />
            <span className="detail-text">{teacher.qualification}</span>
          </div>
          <div className="detail-row highlight-row">
            <FaCheckCircle className="detail-icon highlight-icon" />
            <span className="detail-text">{teacher.highlight}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Faculty = () => {
  const marqueeData = [...facultyData, ...facultyData, ...facultyData];

  return (
    <section className="faculty-section" id="faculty">
      <div className="faculty-bg-glow" aria-hidden="true" />
      
      <div className="faculty-container">
        {/* Section Header */}
        <div className="faculty-header">
          <span className="faculty-eyebrow">Our Educators</span>
          <h2 className="section-title">Meet Our Expert Faculty</h2>
          <p className="section-subtitle">
            Guiding students toward school board excellence and conceptual clarity with dedicated, experienced mentorship.
          </p>
        </div>

        {/* Faculty Marquee Container */}
        <div className="faculty-marquee-container">
          <div className="faculty-marquee-track">
            {marqueeData.map((teacher, index) => (
              <FacultyCard key={`${teacher.id}-${index}`} teacher={teacher} />
            ))}
          </div>
        </div>
      </div>
    </section>

  );
};

export default Faculty;
