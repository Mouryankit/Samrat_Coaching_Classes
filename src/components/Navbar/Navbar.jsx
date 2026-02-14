import Logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";
import "./Navbar.css";

const navLinks = [
  { id: 1, label: "Home", link: "#home" },
  { id: 2, label: "About", link: "#about" },
  { id: 3, label: "Courses", link: "#courses" },
  { id: 4, label: "Results", link: "#results" },
  { id: 5, label: "Reviews", link: "#reviews" },
  { id: 6, label: "Contact", link: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="navbar-logo">
        <img src={Logo} alt="SCC" className="logo-img" />
        <span>Samrat Coaching Classes</span>
      </div>

      {/* Links */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        {navLinks.map((item) => (
          <li key={item.id}>
            <a href={item.link} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          </li>
        ))}

        {/* Mobile Button */}
        <li className="mobile-cta">
          <a href="#contact" className="btn-primary">
            Enroll Now
          </a>
        </li>
      </ul>

      {/* Desktop Button */}
      <div className="navbar-cta">
        <a href="#contact" className="btn-primary">
          Enroll Now
        </a>
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
