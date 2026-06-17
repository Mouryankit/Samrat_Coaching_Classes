import React, { useEffect, useState } from "react";

const StatCard = ({ label, value, suffix, icon: Icon, visible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const end = value;
    const duration = 1500;
    const increment = end / (duration / 16);
    const isFloat = !Number.isInteger(value);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(isFloat ? parseFloat(start.toFixed(1)) : Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [value, visible]);

  return (
    <div className="stat-item">
      <div className="stat-icon"><Icon /></div>
      <div className="stat-info">
        <h3>
          {count}
          {suffix}
        </h3>
        <p>{label}</p>
      </div>
    </div>
  );
};

const ResultsStats = ({ statsData, visible }) => {
  return (
    <div className="stats-container">
      {statsData.map((stat, index) => (
        <StatCard key={index} {...stat} visible={visible} />
      ))}
    </div>
  );
};

export default ResultsStats;
