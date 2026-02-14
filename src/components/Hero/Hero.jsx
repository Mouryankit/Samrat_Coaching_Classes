import "./Hero.css";
import heroImg from "/src/assets/images/image.jpg"; // you can change image name/path



const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        
        {/* Left Content */}
        <div className="hero-content">
          <h1>
            Empowering Students to Achieve
            <span> Academic Excellence</span>
          </h1>

          <p>
            Samrat Coaching Classes provides expert guidance for
            Classes 9–12 and competitive exams with proven results.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Enroll Now
            </a>
            <a href="#courses" className="btn-secondary">
              View Courses
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="hero-stats">
            <div>
              <h3>10+</h3>
              <span>Years Experience</span>
            </div>
            <div>
              <h3>5000+</h3>
              <span>Students</span>
            </div>
            <div>
              <h3>95%</h3>
              <span>Success Rate</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image">
            <img src={heroImg} alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
