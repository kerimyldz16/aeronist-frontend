import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".about-menu") && isAboutMenuOpen) {
        setIsAboutMenuOpen(false);
      }
      if (!event.target.closest(".navbar-container") && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAboutMenuOpen, isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAboutMenu = () => {
    setIsAboutMenuOpen(!isAboutMenuOpen);
  };

  return (
    <nav className="navbar navbar-scrolled">
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
              <div className={`about-options ${isOpen ? "mobile" : ""}`}>
                <Link to="/history" className="menu-option">
                  Tarihçemiz
                </Link>
                <Link to="/team" className="menu-option">
                  Kadromuz
                </Link>
              </div>
            )}
          </div>
          {(!isOpen || !isAboutMenuOpen) && (
            <>
              <Link to="/projects" className="menu-item">
                Projelerimiz
              </Link>
              <Link to="/contact" className="menu-item">
                İletişim
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
