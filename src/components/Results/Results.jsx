import React, { useEffect, useState } from "react";
import "./Results.css";

const resultsData = [
  { label: "Students Selected", value: 5000, suffix: "+" },
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Success Rate", value: 95, suffix: "%" },
  { label: "Courses Completed", value: 50, suffix: "+" },
];

const ResultCard = ({ label, value, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500; // 1.5 sec
    const increment = end / (duration / 30);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <div className="result-card">
      <h3>
        {count}
        {suffix}
      </h3>
      <p>{label}</p>
    </div>
  );
};

const Results = () => {
  return (
    <section className="results-section" id="results">
      <h2 className="section-title">Our Achievements</h2>
      <p className="section-subtitle">
        Numbers that speak for our success
      </p>

      <div className="results-container">
        {resultsData.map((item, index) => (
          <ResultCard
            key={index}
            label={item.label}
            value={item.value}
            suffix={item.suffix}
          />
        ))}
      </div>
    </section>
  );
};

export default Results;
