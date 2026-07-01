import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaBookOpen, FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "info@samratcoaching.com";
    const subject = encodeURIComponent(`New Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Selected Program: ${formData.course}\n\n` +
      `Inquiry Details:\n${formData.message}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });
  };

  return (
    <div className="contact-form-side">
      <div className="form-card-header">
        <h3>Quick Academic Inquiry</h3>
        <p>Fill out the form below and our counselor will contact you shortly.</p>
      </div>
      
      <form className="modern-contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="input-group">
            <div className="input-icon-wrapper">
              <FaUser className="field-icon" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="input-group">
            <div className="input-icon-wrapper">
              <FaEnvelope className="field-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <div className="input-icon-wrapper">
              <FaPhoneAlt className="field-icon" />
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="input-group">
            <div className="input-icon-wrapper">
              <FaBookOpen className="field-icon" />
              <select 
                name="course" 
                value={formData.course} 
                onChange={handleChange}
                className={formData.course ? "has-value" : "placeholder-select"}
                required
              >
                <option value="" disabled hidden>Select Course / Class</option>
                <option value="primary">Primary Foundation (Classes 1st - 5th)</option>
                <option value="middle">Middle School Booster (Classes 6th - 8th)</option>
                <option value="high">High School Boards Prep (Classes 9th - 10th)</option>
                <option value="senior">Senior Secondary Mastery (Classes 11th - 12th)</option>
                <option value="other">General / Other Inquiry</option>
              </select>
            </div>
          </div>
        </div>

        <div className="input-group">
          <textarea
            name="message"
            placeholder="How can we help you? (e.g., query about batch timings, fees, demo classes...)"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn-premium">
          <span>Send Inquiry Message</span>
          <FaPaperPlane className="submit-icon" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
