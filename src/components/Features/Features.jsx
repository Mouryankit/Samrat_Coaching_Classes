import React from "react";
import "./Features.css";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaUsers,
  FaBook,
  FaQuestionCircle,
} from "react-icons/fa";

const featuresData = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Experienced Faculty",
    desc: "Highly qualified teachers with years of teaching experience.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Result-Oriented Approach",
    desc: "Focused preparation for board exams and competitive success.",
  },
  {
    icon: <FaUsers />,
    title: "Small Batch Size",
    desc: "Personal attention to every student for better learning.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Regular Tests",
    desc: "Weekly tests and performance analysis for continuous improvement.",
  },
  {
    icon: <FaBook />,
    title: "Quality Study Material",
    desc: "Well-structured notes and exam-focused study resources.",
  },
  {
    icon: <FaQuestionCircle />,
    title: "Doubt Solving Sessions",
    desc: "Dedicated doubt-clearing sessions to strengthen concepts.",
  },
];

const Features = () => {
  return (
    <section className="features-section" id="features">
      <h2 className="section-title">Why Choose Us</h2>
      <p className="section-subtitle">
        We focus on quality education and student success
      </p>

      <div className="features-container">
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
