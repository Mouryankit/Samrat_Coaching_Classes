import { useState, useEffect } from "react";
import "./Slider.css";

const slides = [
  {
    image: "/src/assets/images/image.jpg",
    caption: "Annual Function 2025"
  },
  {
    image: "/src/assets/images/image.jpg",
    caption: "Sports Day Celebration"
  },
  {
    image: "/src/assets/images/image.jpg",
    caption: "Science Exhibition"
  }
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto loop
  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [paused]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div
      className="slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
        >
          <img src={slide.image} alt={slide.caption} />
          <div className="caption">
            <h3>{slide.caption}</h3>
          </div>
        </div>
      ))}

      <button className="nav left" onClick={prevSlide}>
        ❮
      </button>
      <button className="nav right" onClick={nextSlide}>
        ❯
      </button>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active-dot" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
