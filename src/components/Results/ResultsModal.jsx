import React, { useState, useEffect } from "react";
import ResultCard from "./ResultCard";

const ResultsModal = ({ onClose, rankersData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Filter toppers for modal grid
  const filteredRankers = rankersData.filter((r) => {
    const matchesSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesClass = selectedClass === "All" || r.class === selectedClass;
    const matchesYear = selectedYear === "All" || r.year === selectedYear;
    return matchesSearch && matchesClass && matchesYear;
  });

  return (
    <div className="results-modal-overlay" onClick={onClose}>
      <div className="results-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="results-modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="results-modal-header">
          <h2>Academic Achievements Database</h2>
          <p>Search and filter our CBSE & ICSE board toppers</p>
        </div>

        {/* Modal Filters */}
        <div className="results-modal-filters">
          <input
            type="text"
            placeholder="Search topper by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="modal-search-input"
          />
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="modal-select-filter"
          >
            <option value="All">All Classes</option>
            <option value="Class 10">Class 10</option>
            <option value="Class 12">Class 12</option>
          </select>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="modal-select-filter"
          >
            <option value="All">All Years</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
          </select>
        </div>

        {/* Results Info Counter */}
        <div className="results-modal-counter">
          Showing {filteredRankers.length} of {rankersData.length} featured board toppers
        </div>

        {/* Modal Grid */}
        <div className="results-modal-grid">
          {filteredRankers.length > 0 ? (
            filteredRankers.map((ranker, index) => (
              <ResultCard 
                key={`modal-${ranker.id}`} 
                ranker={ranker} 
                index={index} 
                className="modal-grid-card" 
              />
            ))
          ) : (
            <div className="no-results-message">
              No student records match your filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsModal;
