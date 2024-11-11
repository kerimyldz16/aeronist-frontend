import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);

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

  const toggleAboutMenu = () => {
    setIsAboutMenuOpen(!isAboutMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Aeronist Aerospace
        </Link>
        <button
          className={`menu-toggle ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          ☰
        </button>
        <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <div className="about-menu">
            <button className="about-toggle" onClick={toggleAboutMenu}>
              Hakkımızda
              <span className={`about-arrow ${isAboutMenuOpen ? "open" : ""}`}>
                &#9660;
              </span>
            </button>
            {isAboutMenuOpen && (
              <div className="about-options">
                <Link to="/history" className="menu-option">
                  Tarihçemiz
                </Link>
                <Link to="/team" className="menu-option">
                  Kadromuz
                </Link>
              </div>
            )}
          </div>
          <Link to="/projects" className="menu-item">
            Projelerimiz
          </Link>
          <Link to="/contact" className="menu-item">
            İletişim
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
