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
          <strong>Samrat coaching classes</strong>
          <span>Nandbag main road, Indore</span>
        </div>
      </div>
      <div className="map-details-bar">
        <div className="map-coordinates">
          <span>LAT: 22.750515° N</span>
          <span>LON: 75.836075° E</span>
        </div>
        <a 
          href="https://maps.google.com/?q=Samrat+Coaching+Classes+Nandbag+Main+Road+Indore" 
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
