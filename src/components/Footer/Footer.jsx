import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaPaperPlane } from "react-icons/fa";
import Logo from "../../assets/images/logo.png"; 
import { quickLinks, programsLinks } from "../../data/navigationData";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-top">
        <div className="footer-container">
          
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <img src={Logo} alt="Samrat Coaching" />
              <div className="logo-text">
                <h3>Samrat</h3>
                <p>Coaching Classes</p>
              </div>
            </div>
            <p className="footer-about">
              Dedicated to providing top-quality education and mentoring to students since 2014. Empowering the next generation of academic leaders and achievers.
            </p>
            <div className="social-links-row">
              <a href="#" className="social-icon-btn" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" className="social-icon-btn" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="social-icon-btn" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="social-icon-btn" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" className="social-icon-btn" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          {/* Links Column */}
          <div className="footer-col links-col">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses Column */}
          <div className="footer-col links-col">
            <h4>Our Programs</h4>
            <ul>
              {programsLinks.map((item) => (
                <li key={item.id}>
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>


          {/* Newsletter Column */}
          <div className="footer-col newsletter-col">
            <h4>Newsletter</h4>
            <p>Get the latest academic updates, tips, and batch announcements.</p>
            <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your Email Address" required />
              <button type="submit" aria-label="Subscribe"><FaPaperPlane /></button>
            </form>
            <div className="trust-badge-footer">
              ⭐ 4.9/5 Topper Student Rating
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <p>© 2026 Samrat Coaching Classes. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
