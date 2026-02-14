import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

const testimonialsData = [
  {
    name: "Rahul Verma",
    course: "JEE Preparation",
    review:
      "Samrat Coaching Classes helped me achieve my dream rank! The faculty and study material are top-notch.",
    img: "/src/assets/images/logo.png",
    rating: 4,
  },
  {
    name: "Ananya Sharma",
    course: "Class 12 Science",
    review:
      "The teachers are very supportive and the weekly tests helped me improve consistently.",
    img: "/src/assets/images/logo.png",
    rating: 5,
  },
  {
    name: "Karan Singh",
    course: "NEET Preparation",
    review:
      "Best coaching for NEET aspirants. Concept clarity and doubt sessions are amazing.",
    img: "/src/assets/images/logo.png",
    rating: 5,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="section-title">What Our Students Say</h2>
      <p className="section-subtitle">
        Hear from our successful students
      </p>

      <div className="testimonial-slider">
        {testimonialsData.map((t, i) => (
          <div
            className={`testimonial-card ${
              i === index ? "active" : "inactive"
            }`}
            key={i}
          >
            <div className="testimonial-image">
              <img src={t.img} alt={t.name} />
            </div>
            <p className="testimonial-review">"{t.review}"</p>
            <h3 className="testimonial-name">{t.name}</h3>
            <span className="testimonial-course">{t.course}</span>
            <div className="testimonial-rating">
              {Array(t.rating)
                .fill(0)
                .map((_, idx) => (
                  <FaStar key={idx} color="#facc15" />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
