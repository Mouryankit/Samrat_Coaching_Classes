import React from "react";
import "./Contact.css";
import ContactInfoGrid from "./ContactInfoGrid";
import MapMockup from "./MapMockup";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <span className="contact-eyebrow">Get In Touch</span>
        <h2 className="section-title">Ready to Start Your Success?</h2>
        <p className="section-subtitle">
          Have questions about our courses or batches? Our team is here to help you navigate your academic path.
        </p>
      </div>

      <div className="contact-container">
        
        {/* Left: Contact Info Cards & Map Mockup */}
        <div className="contact-info-side">
          <ContactInfoGrid />
          <MapMockup />
        </div>

        {/* Right: Modern Form */}
        <ContactForm />

      </div>
    </section>
  );
};

export default Contact;
