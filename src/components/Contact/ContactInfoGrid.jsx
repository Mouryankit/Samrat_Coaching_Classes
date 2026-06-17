import React from "react";
import { contactDetails } from "../../data/contactData";


const ContactInfoCard = ({ icon: Icon, title, lines }) => {
  return (
    <div className="info-item-card">
      <div className="info-icon-box"><Icon /></div>
      <div className="info-text">
        <h4>{title}</h4>
        {lines.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
    </div>
  );
};

const ContactInfoGrid = () => {
  return (
    <div className="contact-info-grid">
      {contactDetails.map((detail, index) => (
        <ContactInfoCard key={index} {...detail} />
      ))}
    </div>
  );
};

export default ContactInfoGrid;
