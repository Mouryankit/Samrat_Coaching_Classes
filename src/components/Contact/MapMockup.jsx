import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const MapMockup = () => {
  return (
    <div className="map-mockup-card">
      <div className="map-placeholder">
        <div className="map-grid-lines"></div>
        <div className="map-pulse-ring"></div>
        <div className="map-pin">
          <FaMapMarkerAlt />
        </div>
        <div className="map-badge">
          <strong>Samrat Academy</strong>
          <span>MG Road Center</span>
        </div>
      </div>
      <div className="map-details-bar">
        <div className="map-coordinates">
          <span>LAT: 19.0760° N</span>
          <span>LON: 72.8777° E</span>
        </div>
        <a 
          href="https://maps.google.com/?q=Samrat+Coaching+Classes+MG+Road+Mumbai" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="map-directions-btn"
        >
          Open Google Maps
        </a>
      </div>
    </div>
  );
};

export default MapMockup;
