import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Logo from "../../assets/images/logo.png"; 

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Logo & Name */}
        <div className="footer-logo">
          <img
            src={Logo}
            alt="SCC"
            className="footer-logo-img"
          />
          <span>Samrat Coaching Classes</span>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#features">Why Choose Us</a></li>
            <li><a href="#faculty">Faculty</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📍 123 Main Street, City, State</p>
          <p>📞 +91 XXXXXXXXXX</p>
          <p>✉ info@samratcoaching.com</p>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Samrat Coaching Classes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
