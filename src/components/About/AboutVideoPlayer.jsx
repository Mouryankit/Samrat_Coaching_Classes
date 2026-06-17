import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const AboutVideoPlayer = ({ videoId, thumbnailSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`about-image-side ${isPlaying ? "video-playing" : ""}`}>
      <div className="about-video-container-wrapper">
        {/* Floating Experience Badge */}
        <div className="image-experience-badge">
          <span className="exp-number">10+</span>
          <span className="exp-text">Years of Teaching Excellence</span>
        </div>

        {/* Video Player Frame */}
        <div className="about-video-frame" onClick={() => !isPlaying && setIsPlaying(true)}>
          {isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="about-video"
              style={{ border: "none" }}
            ></iframe>
          ) : (
            <>
              <img
                src={thumbnailSrc}
                alt="Video Thumbnail"
                className="about-video"
                style={{ objectFit: "cover" }}
              />
              <div className="video-play-overlay">
                <div className="play-btn-circle">
                  <FaPlay className="play-icon" />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Floating Mini Statistics Card */}
        <div className="about-stat-mini">
          <div className="mini-item">
            <strong>95%</strong>
            <span>Success Rate</span>
          </div>
          <div className="mini-item">
            <strong>5K+</strong>
            <span>Students Guided</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutVideoPlayer;
