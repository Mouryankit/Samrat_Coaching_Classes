import "./HeroBasic.css";
import profileImg from "/src/assets/images/image.jpg"; // replace with your image

export default function HeroBasic() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Hi, I'm <span>Ankit Maurya</span>
        </h1>
        <h2>MERN Stack Developer</h2>
        <p>
          I build responsive, scalable and user-friendly web applications 
          using MongoDB, Express, React and Node.js.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">View Projects</button>
          <button className="secondary-btn">Contact Me</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="image-wrapper">
          <img src={profileImg} alt="Ankit" />
        </div>
      </div>
    </section>
  );
}
