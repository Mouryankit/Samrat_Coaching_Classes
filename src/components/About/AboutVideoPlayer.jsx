import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";

const AboutVideoPlayer = ({ videoId, thumbnailSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // 1. Load the YouTube Iframe API script on mount if not already present
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }, []);

  // 2. Instantiate the player and listen to state changes when playing
  useEffect(() => {
    let player = null;

    if (isPlaying) {
      const initPlayer = () => {
        if (window.YT && window.YT.Player) {
          player = new window.YT.Player("youtube-player", {
            events: {
              onStateChange: (event) => {
                // YT.PlayerState.ENDED is 0
                if (event.data === 0) {
                  setIsPlaying(false);
                }
              },
            },
          });
        }
      };

      if (window.YT && window.YT.Player) {
        const timer = setTimeout(initPlayer, 250);
        return () => clearTimeout(timer);
      } else {
        const prevCallback = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
          if (prevCallback) prevCallback();
          initPlayer();
        };
      }
    }

    return () => {
      if (player && player.destroy) {
        player.destroy();
      }
    };
  }, [isPlaying]);

  return (
    <div className={`about-image-side ${isPlaying ? "video-playing" : ""}`}>
      <div className="about-video-container-wrapper">
        {/* Floating Experience Badge */}
        <div className="image-experience-badge">
          <span className="exp-number">12+</span>
          <span className="exp-text">Years of Teaching Excellence</span>
        </div>

        {/* Video Player Frame */}
        <div className="about-video-frame" onClick={() => !isPlaying && setIsPlaying(true)}>
          {isPlaying ? (
            <iframe
              id="youtube-player"
              src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&rel=0&modestbranding=1`}
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
            <strong>98.5%</strong>
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
