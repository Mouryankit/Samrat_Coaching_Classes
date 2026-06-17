import React from "react";
import { FaCheck } from "react-icons/fa";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card" style={{ "--card-color": course.color }}>
      {/* Card Image Wrap */}
      <div className="course-card-image-wrap">
        <img src={course.image} alt={course.title} className="course-card-image" />
        <div className="course-card-image-overlay" />
        <span className="course-card-category-badge" style={{ background: `color-mix(in srgb, ${course.color} 90%, #000)`, border: `1px solid color-mix(in srgb, ${course.color} 30%, #fff)` }}>
          {course.category}
        </span>
        {course.tag && (
          <span className="course-card-tag-badge" style={{ background: course.color }}>
            {course.tag}
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="course-card-content">
        <h3 className="course-card-title">{course.title}</h3>
        <p className="course-card-desc">{course.subtitle}</p>

        {/* Highlights List */}
        <ul className="course-card-highlights">
          {course.highlights.map((hl, idx) => (
            <li key={idx}>
              <span className="hl-check" style={{ color: course.color }}><FaCheck /></span>
              {hl}
            </li>
          ))}
        </ul>

        {/* Metadata Badges */}
        <div className="course-card-meta">
          <span className="meta-badge">⏱ {course.duration}</span>
          <span className="meta-badge">👥 {course.seats}</span>
        </div>

        {/* Divider */}
        <div className="course-card-divider" />

        {/* Footer */}
        <div className="course-card-footer">
          <div className="course-fee-info">
            <span className="fee-lbl">FEE</span>
            <span className="fee-val" style={{ color: course.color }}>{course.fee}</span>
          </div>
          <a href="#contact" className="course-enroll-btn" style={{ background: course.color, boxShadow: `0 4px 12px color-mix(in srgb, ${course.color} 25%, transparent)` }}>
            Enroll Now →
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
