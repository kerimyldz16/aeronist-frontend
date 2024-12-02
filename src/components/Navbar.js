import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".about-menu") && isAboutMenuOpen) {
        setIsAboutMenuOpen(false);
      }
      if (!event.target.closest(".navbar-container") && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAboutMenuOpen, isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAboutMenu = () => {
    setIsAboutMenuOpen(!isAboutMenuOpen);
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleLogoClick}>
          <img
            src={logo}
            alt="Aeronist Aerospace"
            className={`navbar-logo-img ${isScrolled ? "scrolled" : ""}`}
          />
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
                <Link
                  to="/tarihcemiz"
                  className={`menu-option ${
                    location.pathname === "/tarihcemiz" ? "active" : ""
                  }`}
                >
                  Tarihçemiz
                </Link>
                <Link
                  to="/kadromuz"
                  className={`menu-option ${
                    location.pathname === "/kadromuz" ? "active" : ""
                  }`}
                >
                  Kadromuz
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/projelerimiz"
            className={`menu-item ${
              location.pathname === "/projelerimiz" ? "active" : ""
            }`}
          >
            Projelerimiz
          </Link>
          <Link
            to="/iletisim"
            className={`menu-item ${
              location.pathname === "/iletisim" ? "active" : ""
            }`}
          >
            İletişim
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
