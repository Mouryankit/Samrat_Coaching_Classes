import { useState, useEffect, useCallback } from "react";
import "./PageSlider.css";

const pages = [
  "/src/assets/images/image.jpg",
  "/src/assets/images/image.jpg",
  "/src/assets/images/image.jpg",
  "/src/assets/images/image.jpg",
  "/src/assets/images/image.jpg",
  "/src/assets/images/image.jpg",
];

export default function Book() {
  const [flippedPages, setFlippedPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = pages.length;

  // Flip next (right arrow): flip top unflipped page
  const flipNext = useCallback(() => {
    const topUnflippedIndex = flippedPages.length;
    if (topUnflippedIndex < totalPages - 1) { // Prevent flipping last page
      setFlippedPages([...flippedPages, topUnflippedIndex]);
      setCurrentPage(topUnflippedIndex + 1);
    }
  }, [flippedPages, totalPages]);

  // Flip prev (left arrow): unflip newest flipped page
  const flipPrev = useCallback(() => {
    if (flippedPages.length > 0) {
      const newFlipped = [...flippedPages];
      newFlipped.pop();
      setFlippedPages(newFlipped);
      setCurrentPage(flippedPages.length - 1);
    }
  }, [flippedPages]);

  // Click on page: flip that specific page (original behavior)
  const handleFlip = useCallback((index) => {
    if (index === totalPages - 1) return;
    if (!flippedPages.includes(index)) {
      setFlippedPages([...flippedPages, index]);
      setCurrentPage(index + 1);
    }
  }, [flippedPages, totalPages]);

  // Keyboard support
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') flipNext();
      if (e.key === 'ArrowLeft') flipPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [flipNext, flipPrev]);

  return (
    <div className="book-container">
      <div className="book">
        {pages.map((img, index) => {
          const isFlipped = flippedPages.includes(index);
          return (
            <div
              key={index}
              className={`page ${isFlipped ? "flipped" : ""}`}
              style={{ zIndex: totalPages - index }}
              onClick={() => handleFlip(index)}
            >
              <img src={img} alt={`page-${index}`} />
              <div className="page-shadow"></div> {/* Creative curl shadow */}
            </div>
          );
        })}
      </div>
      
      {/* Navigation Arrows */}
      <div className="nav-arrows">
        <button 
          className="nav-btn left-arrow" 
          onClick={flipPrev}
          disabled={flippedPages.length === 0}
          aria-label="Previous page"
        >
          ‹ {/* Left chevron */}
        </button>
        <button 
          className="nav-btn right-arrow" 
          onClick={flipNext}
          disabled={flippedPages.length === totalPages - 1}
          aria-label="Next page"
        >
          › {/* Right chevron */}
        </button>
      </div>

      {/* Page Counter */}
      <div className="page-counter">
        Page {currentPage + 1} of {totalPages}
      </div>

      <p className="hint">Use arrows, keys, or click pages • ✨ Sparks on flip!</p>
    </div>
  );
}
