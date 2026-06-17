import React from "react";

const ResultCard = ({ ranker, index, className }) => {
  return (
    <div 
      className={`ranker-card ${className || ""}`}
      style={{ "--card-color": index % 2 === 0 ? "var(--color-primary-light)" : "var(--color-accent-gold)" }}
    >
      <div className="ranker-img-wrap">
        <img src={ranker.img} alt={ranker.name} />
        <div className="ranker-score-badge">{ranker.score}</div>
        <span className="ranker-achievement-badge">
          {ranker.badge}
        </span>
      </div>
      <div className="ranker-info">
        <h4>{ranker.name}</h4>
        <p className="ranker-class">{ranker.class} | Year {ranker.year}</p>
        <p className="ranker-highlight">{ranker.highlight}</p>
      </div>
    </div>
  );
};

export default ResultCard;
