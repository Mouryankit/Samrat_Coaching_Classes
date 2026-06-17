import Logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";
import "./Navbar.css";
import { navLinks } from "../../data/navigationData";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  /* ── Scroll shadow ── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Lock body scroll when drawer is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ── Active section via IntersectionObserver ── */
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.link.replace("#", ""));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveLink(`#${id}`); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

        {/* ── Logo ── */}
        <a href="#home" className="navbar-logo" onClick={() => handleLinkClick("#home")}>
          <img src={Logo} alt="SCC Logo" className="logo-img" />
          <div className="navbar-logo-text">
            <span className="navbar-logo-title">Samrat Coaching Classes</span>
            <span className="navbar-logo-sub">Excellence in Education</span>
          </div>
        </a>

        {/* ── Links drawer ── */}
        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className={activeLink === item.link ? "active" : ""}
                onClick={() => handleLinkClick(item.link)}
              >
                {item.label}
              </a>
            </li>
          ))}

          {/* Mobile enroll button */}
          <li className="mobile-cta">
            <a href="#contact" className="btn-enroll" onClick={() => setMenuOpen(false)}>
              Enroll Now
            </a>
          </li>
        </ul>

        {/* ── Desktop CTA ── */}
        <div className="navbar-cta">
          <a href="#contact" className="btn-enroll">Enroll Now</a>
        </div>

        {/* ── Hamburger ── */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* ── Backdrop — tap to close drawer ── */}
      <div
        className={`navbar-backdrop ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}
