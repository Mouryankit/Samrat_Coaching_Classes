import "./Hero.css";
import { useEffect, useState, useRef } from "react";
import { SUBJECTS, SLIDER_CARDS, STATS } from "../../data/heroData";

/* ── Animated counter hook ── */
function useCounter(end, duration = 1600, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

function StatCard({ stat, animate }) {
  const count = useCounter(stat.end, 1600, animate);
  return (
    <div className="hero-stat-card">
      <span className="hero-stat-number">{count}{stat.suffix}</span>
      <span className="hero-stat-label">{stat.label}</span>
    </div>
  );
}


const Hero = () => {
  const [subjectIdx, setSubjectIdx]     = useState(0);
  const [displayed, setDisplayed]       = useState("");
  const [isDeleting, setIsDeleting]     = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef  = useRef(null);
  const typingRef = useRef(null);

  /* ── Stats counter trigger ── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.4 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  /* ── Typewriter ── */
  useEffect(() => {
    const current = SUBJECTS[subjectIdx];
    const speed   = isDeleting ? 45 : 75;
    const pause   = 1800;

    if (!isDeleting && displayed === current) {
      typingRef.current = setTimeout(() => setIsDeleting(true), pause);
      return;
    }
    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setSubjectIdx((i) => (i + 1) % SUBJECTS.length);
      return;
    }
    typingRef.current = setTimeout(() => {
      setDisplayed((prev) =>
        isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
      );
    }, speed);
    return () => clearTimeout(typingRef.current);
  }, [displayed, isDeleting, subjectIdx]);

  /* Duplicate cards for seamless infinite loop */
  const cards = [...SLIDER_CARDS, ...SLIDER_CARDS];

  return (
    <section className="hero" id="home">

      {/* ── Background blobs ── */}
      {/* <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />
      <div className="hero-blob hero-blob-3" aria-hidden="true" /> */}

      <div className="hero-container">

        {/* ────── LEFT CONTENT ────── */}
        <div className="hero-content">

          {/* Trust badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Trusted by 5000+ Students
          </div>

          {/* Heading */}
          <h1 className="hero-heading">
            Expert Coaching for
            <span className="hero-typewriter">
              {displayed}
              <span className="hero-cursor" aria-hidden="true">|</span>
            </span>
          </h1>

          <p className="hero-desc">
            Samrat Coaching Classes provides expert guidance for Classes 9–12
            and competitive exams with personalised attention and proven results.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="#contact" className="btn-enroll">🎓 Enroll Now</a>
            <a href="#courses" className="hero-btn-outline">Explore Courses →</a>
          </div>

          {/* Pills */}
          <div className="hero-pills">
            <span className="hero-pill">✅ Commerce</span>
            <span className="hero-pill">✅ PCM</span>
            <span className="hero-pill">✅ PCB</span>
            <span className="hero-pill">✅ Arts</span>
            <span className="hero-pill">✅ Public Speaking</span>
            <span className="hero-pill">✅ Spoken English</span>
            <span className="hero-pill">✅ Small Batches</span>
            <span className="hero-pill">✅ Doubt Sessions</span>
            <span className="hero-pill">✅ Test Series</span>
          </div>
        </div>

        {/* ────── RIGHT — INFINITE MARQUEE SLIDER ────── */}
        <div className="hero-slider-wrap" aria-label="Student highlights">

          {/* Top marquee — left to right (slower) */}
          <div className="hero-marquee hero-marquee-top" aria-hidden="true">
            <div className="hero-marquee-track hero-marquee-track-reverse">
              {cards.map((card, i) => (
                <div className="hero-slide-card" key={`t-${i}`}>
                  <img src={card.img} alt={card.title} />
                  <div className="hero-slide-overlay" style={{ "--accent-clr": card.accent }}>
                    <span className="slide-tag">{card.tag}</span>
                    <strong>{card.title}</strong>
                    <p>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom marquee — right to left (main) */}
          <div className="hero-marquee hero-marquee-bottom">
            <div className="hero-marquee-track">
              {cards.map((card, i) => (
                <div className="hero-slide-card" key={`b-${i}`}>
                  <img src={card.img} alt={card.title} />
                  <div className="hero-slide-overlay" style={{ "--accent-clr": card.accent }}>
                    <span className="slide-tag">{card.tag}</span>
                    <strong>{card.title}</strong>
                    <p>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ────── STATS BAR ────── */}
      <div className="hero-stats-bar" ref={statsRef}>
        {STATS.map((stat) => (
          <StatCard key={stat.label} stat={stat} animate={statsVisible} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
