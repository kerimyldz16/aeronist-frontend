// src/pages/Contact.js
import React from "react";
import Sponsorship from "../components/Sponsorship";
import ContactInfo from "../components/ContactInfo";
import "../styles/Contact.css";

function Contact() {
  return (
    <>
      <div className="contact-page">
        <Sponsorship />
        <ContactInfo />
      </div>
    </>
  );
}

export default Contact;
