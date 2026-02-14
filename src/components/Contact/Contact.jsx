import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
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
    console.log("Form submitted:", formData);
    alert("Thank you! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Us</h2>
      <p className="section-subtitle">
        Fill out the form below and we will get back to you
      </p>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="course"
              placeholder="Interested Course"
              value={formData.course}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="contact-btn">
            Submit
          </button>
        </form>

        <div className="contact-info">
          <h3>Our Contact Info</h3>
          <p>📍 123 Main Street, City, State</p>
          <p>📞 +91 XXXXXXXXXX</p>
          <p>✉ info@samratcoaching.com</p>
          <p>🌐 www.samratcoaching.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
