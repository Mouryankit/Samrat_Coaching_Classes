import React from "react";
import "./Course.css";
import CourseCard from "./CourseCard";
import { coursesData } from "../../data/courseData";


const Courses = () => {
  // Triple the data to make sure it covers the screen width on 4K/high-res desktop displays
  const marqueeData = [...coursesData, ...coursesData, ...coursesData];

  return (
    <section className="courses-section" id="courses">
      {/* ── Section header ── */}
      <div className="courses-header">
        <span className="courses-eyebrow">Academic Programs</span>
        <h2 className="section-title">Class 1st to 12th Tuition</h2>
        <p className="section-subtitle">
          Structured conceptual coaching designed for school excellence and board examinations
        </p>
      </div>

      {/* ── Marquee Carousel Container ── */}
      <div className="courses-marquee-container">
        <div className="course-marquee-track">
          {marqueeData.map((course, idx) => (
            <CourseCard key={`${course.id}-${idx}`} course={course} />
          ))}
        </div>
      </div>

      {/* ── Bottom CTA banner ── */}
      <div className="courses-cta-banner">
        <div>
          <strong>Not sure about the right batch or timing?</strong>
          <p>Talk to our coordinators to learn more about schedules, demo classes, and curriculum.</p>
        </div>
        <a href="#contact" className="btn-enroll">📞 Free Counselling</a>
      </div>
    </section>
  );
};

export default Courses;
