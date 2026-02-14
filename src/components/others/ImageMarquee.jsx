import "./ImageMarquee.css";

const images = [
  "/src/assets/images/image.jpg",
    "/src/assets/images/image.jpg",
    "/src/assets/images/image.jpg",
    "/src/assets/images/image.jpg",
    "/src/assets/images/image.jpg",
    "/src/assets/images/image.jpg",
];

export default function ImageMarquee() {
  return (
    <section className="marquee-section">

      {/* Top Row */}
      <div className="marquee">
        <div className="track">
          {images.concat(images).map((img, index) => (
            <img key={index} src={img} alt="gallery" />
          ))}
        </div>
      </div>

      {/* Bottom Row (Reverse) */}
      <div className="marquee reverse">
        <div className="track">
          {images.concat(images).map((img, index) => (
            <img key={index} src={img} alt="gallery" />
          ))}
        </div>
      </div>

    </section>
  );
}
