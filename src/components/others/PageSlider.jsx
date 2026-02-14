import { useEffect, useState } from "react";
import "./PageSlider.css";

// import heroImg from "/src/assets/images/image.jpg"; // you can change image name/path

const images = [
  "/src/assets/images/image.jpg",
  "/src/assets/images/image.jpg",
  "/src/assets/images/image.jpg",
];

const PageSlider = () => {
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlip(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFlip(false);
      }, 600);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-slider">
      <div className={`page ${flip ? "flip" : ""}`}>
        <img src={images[index]} alt="slider" />
      </div>
    </div>
  );
};

export default PageSlider;




// import { useState } from "react";
// import "./PageSlider.css";

// const images = [
//   "/src/assets/images/image.jpg",
//   "/src/assets/images/image.jpg",
//   "/src/assets/images/image.jpg",
// ];

// export default function BookSlider() {
//   const [index, setIndex] = useState(0);
//   const [flip, setFlip] = useState(false);

//   const nextPage = () => {
//     setFlip(true);

//     setTimeout(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//       setFlip(false);
//     }, 800); // match animation duration
//   };

//   return (
//     <div className="book-container">
//       <div className="book">

//         {/* LEFT PAGE (hidden) */}
//         <div className="page left-page"></div>

//         {/* RIGHT PAGE */}
//         <div className={`page right-page ${flip ? "flip" : ""}`}>
//           <img src={images[index]} alt="slider" />
//         </div>
//       </div>

//       <button onClick={nextPage} className="next-btn">
//         Next Page →
//       </button>
//     </div>
//   );
// }


// import { useState } from "react";
// import "./PageSlider.css";

// const images = [
//   "/src/assets/images/image.jpg",
//   "/src/assets/images/image.jpg",
//   "/src/assets/images/image.jpg",
// ];

// export default function BookSlider() {
//   const [index, setIndex] = useState(0);
//   const [flipping, setFlipping] = useState(false);

//   const nextPage = () => {
//     if (flipping) return;

//     setFlipping(true);

//     setTimeout(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//       setFlipping(false);
//     }, 1000);
//   };

//   return (
//     <div className="book-wrapper">
//       <div className="book">

//         {/* LEFT PAGE */}
//         <div className="page left-page">
//           <div className="page-content">
//             <h2>My Portfolio</h2>
//             <p>Creative Projects Showcase</p>
//           </div>
//         </div>

//         {/* RIGHT PAGE */}
//         <div className={`page right-page ${flipping ? "flip" : ""}`}>
//           <img src={images[index]} alt="project" />
//           <div className="page-shadow"></div>
//         </div>
//       </div>

//       <button className="btn" onClick={nextPage}>
//         Turn Page →
//       </button>
//     </div>
//   );
// }



// import { useState } from "react";
// import "./PageSlider.css";

// const pages = [
//   "/src/assets/images/image.jpg",
//   "/src/assets/images/image.jpg",
//   "/src/assets/images/image.jpg",
//   "/src/assets/images/image.jpg",
//   "/src/assets/images/image.jpg",
//   "/src/assets/images/image.jpg",
// ];

// export default function Book() {
//   const [flippedPages, setFlippedPages] = useState([]);

//   const handleFlip = (index) => {
//     // Prevent flipping the last remaining page
//     if (index === pages.length - 1) return;

//     if (!flippedPages.includes(index)) {
//       setFlippedPages([...flippedPages, index]);
//     }
//   };

//   return (
//     <div className="book-container">
//       <div className="book">
//         {pages.map((img, index) => {
//           const isFlipped = flippedPages.includes(index);

//           return (
//             <div
//               key={index}
//               className={`page ${isFlipped ? "flipped" : ""}`}
//               style={{ zIndex: pages.length - index }}
//               onClick={() => handleFlip(index)}
//             >
//               <img src={img} alt={`page-${index}`} />
//             </div>
//           );
//         })}
//       </div>

//       <p className="hint">Click pages to turn</p>
//     </div>
//   );
// }
