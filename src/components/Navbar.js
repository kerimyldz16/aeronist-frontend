import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="logo">
        <a href="#home">Aeronist Aerospace</a>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#about">Hakkımızda</a>
        </li>
        <li>
          <a href="projects">Faaliyetlerimiz</a>
        </li>
        <li>
          <a href="#news">Haberler</a>
        </li>
        <li>
          <a href="#contact">İletişim</a>
        </li>
      </ul>
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
