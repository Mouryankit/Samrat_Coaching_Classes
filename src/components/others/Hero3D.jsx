import "./Hero3D.css";

const images = [
  "/src/assets/images/image.jpg",
  "/src/assets/images/image.jpg",
  "/src/assets/images/image.jpg",
  "/src/assets/images/image.jpg",
  "/src/assets/images/image.jpg",
  "/src/assets/images/image.jpg",
];

export default function Hero3D() {
  return (
    <section className="hero">
      {/* <div className="hero-content">
        <h1>Hi, I'm Ankit</h1>
        <p>MERN Stack Developer</p>
        <button>View Projects</button>
      </div> */}

      <div className="carousel">
        {images.map((img, index) => (
          <span
            key={index}
            style={{ "--i": index }}
          >
            <img src={img} alt="project" />
          </span>
        ))}
      </div>
    </section>
  );
}
