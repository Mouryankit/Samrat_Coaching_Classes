import { useState, useEffect, useRef, useCallback } from "react";
// import "./HelixCarousel.css";
import "./Helix.css";

const images = [
  "/src/assets/images/image.jpg",
  "/src/assets/images/image.jpg",
  "/src/assets/images/image.jpg",
  "/src/assets/images/image.jpg",
  "/src/assets/images/image.jpg",
  "/src/assets/images/image.jpg",
];

export default function HelixCarousel() {
  const [rotation, setRotation] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef(null);
  const rafRef = useRef(0);

  // Auto rotation
  useEffect(() => {
    let speed = 0.3;
    const animate = () => {
      if (autoRotate && !hovered) {
        setRotation((prev) => prev + speed);
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(rafRef.current);
  }, [autoRotate, hovered]);

  // Mouse wheel control
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    setRotation((prev) => prev + e.deltaY * 0.5);
  }, []);

  // Mouse drag control
  const handleMouseDown = useCallback((e) => {
    const startX = e.pageX;
    const handleMouseMove = (e) => {
      const deltaX = e.pageX - startX;
      setRotation((prev) => prev + deltaX * 0.5);
    };
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, []);

  // Touch support
  const handleTouchStart = useCallback((e) => {
    const startX = e.touches[0].pageX;
    const handleTouchMove = (e) => {
      const deltaX = e.touches[0].pageX - startX;
      setRotation((prev) => prev + deltaX * 0.5);
    };
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', () => {
      document.removeEventListener('touchmove', handleTouchMove);
    });
  }, []);

  // Navigation buttons
  const rotateBy = useCallback((amount) => {
    setRotation((prev) => prev + amount * 45);
  }, []);

  return (
    <div 
      className="helix-container"
      ref={containerRef}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div 
        className="helix"
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="helix-item"
            style={{
              transform: `rotateY(${index * 60}deg) translateZ(300px) translateY(${Math.sin(index * 0.7) * 150}px)`
            }}
          >
            <img src={src} alt={`Helix ${index}`} />
            <div className="item-glow"></div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="nav-arrows">
        <button className="nav-btn" onClick={() => rotateBy(-90)}>
          ‹
        </button>
        <button className="nav-btn" onClick={() => rotateBy(90)}>
          ›
        </button>
      </div>

      <div className="controls">
        <label>
          <input 
            type="checkbox" 
            checked={autoRotate} 
            onChange={(e) => setAutoRotate(e.target.checked)}
          />
          Auto-rotate
        </label>
        <span>Drag • Wheel • Touch</span>
      </div>
    </div>
  );
}
