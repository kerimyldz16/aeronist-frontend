import React from "react";
import "../styles/ContactInfo.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="contact-info-section">
      <h2 className="contact-section-title-h2">Bize Ulaşın</h2>
      <div className="contact-info-card">
        <div className="contact-detail">
          <FaEnvelope className="contact-icon" />
          <p>
            Email:{" "}
            <a href="mailto:aeronistaerospace@gmail.com">
              aeronistaerospace@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-detail">
          <FaPhoneAlt className="contact-icon" />
          <p>
            Telefon: <a href="tel:+905387350461">+90 538 735 04 61</a>
          </p>
        </div>
        <div className="contact-detail">
          <FaMapMarkerAlt className="contact-icon" />
          <p>
            Aeronist Havacılık ve Uzay <br />
            İstanbul Üniversitesi-Cerrahpaşa, Mühendislik Fakültesi B Blok,
            34320 Avcılar/İstanbul, Türkiye
          </p>
        </div>
      </div>
      <div className="map-container">
        <iframe
          title="Aeronist Aerospace Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d784.2458040299277!2d28.723444825158566!3d40.99343746994806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa67b9ea740eb%3A0x657c1e147c7adf37!2sIstanbul%20University-Cerrahpasa!5e0!3m2!1sen!2str!4v1688880000000!5m2!1sen!2str"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;
