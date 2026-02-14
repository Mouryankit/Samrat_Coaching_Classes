import "./CampusGallery.css";

const images = [
  {
    src: "https://picsum.photos/id/1015/600/400",
    title: "Annual Function"
  },
  {
    src: "https://picsum.photos/id/1016/600/400",
    title: "Sports Day"
  },
  {
    src: "https://picsum.photos/id/1018/600/400",
    title: "Science Exhibition"
  },
  {
    src: "https://picsum.photos/id/1020/600/400",
    title: "Cultural Fest"
  },
  {
    src: "https://picsum.photos/id/1024/600/400",
    title: "Library"
  },
  {
    src: "https://picsum.photos/id/1035/600/400",
    title: "Campus View"
  }
];

export default function CampusGallery() {
  return (
    <section className="gallery-section">
      <h2>Campus Highlights</h2>
      <div className="gallery-grid">
        {images.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img src={item.src} alt={item.title} />
            <div className="overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
