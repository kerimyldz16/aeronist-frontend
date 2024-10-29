import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <hr className="divider-footer" />
      <div className="footer-links">
        <a href="https://www.instagram.com/aeronist/">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/aeronist-aerospace/">
          <FaLinkedin />
        </a>
        <a href="https://x.com/aeronist">
          <FaTwitter />
        </a>
        <a href="https://www.youtube.com/@aeronistaerospace">
          <FaYoutube />
        </a>
      </div>
      <p>Aeronist Havacılık ve Uzay</p>
      <p>
        Telif Hakkı © 2018 - 2024 Aeronist Havacılık ve Uzay - Tüm Hakları
        Saklıdır.
      </p>
    </footer>
  );
}

export default Footer;
