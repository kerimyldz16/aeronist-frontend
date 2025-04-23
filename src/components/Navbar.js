import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/B-Logo.png";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [isKadromuzExpanded, setIsKadromuzExpanded] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    const handleScroll = () => {
      setIsScrolled(isLargeScreen ? window.scrollY > 50 : true);
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".about-menu")) {
        setIsAboutMenuOpen(false);
        setIsKadromuzExpanded(false);
      }
      if (!event.target.closest(".navbar-container")) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAboutMenuOpen, isKadromuzExpanded, isOpen, isLargeScreen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleAboutMenu = () => setIsAboutMenuOpen(!isAboutMenuOpen);
  const toggleKadromuzSub = () => setIsKadromuzExpanded(!isKadromuzExpanded);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const logoToShow = isScrolled ? logo : logo;

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo" onClick={handleLogoClick}>
            <img
              src={logoToShow}
              alt="Aeronist Aerospace"
              className={`navbar-logo-img ${isScrolled ? "scrolled" : ""}`}
            />
          </Link>
          <span className="navbar-title">
            İstanbul Üniversitesi Cerrahpaşa Havacılık ve Uzay Kulübü
          </span>
        </div>

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
                  onClick={() => {
                    setIsAboutMenuOpen(false);
                    setIsKadromuzExpanded(false);
                    setIsOpen(false);
                  }}
                >
                  Tarihçemiz
                </Link>

                <button className="submenu-toggle" onClick={toggleKadromuzSub}>
                  Kadromuz
                  <span
                    className={`about-arrow ${
                      isKadromuzExpanded ? "open" : ""
                    }`}
                  >
                    &#9660;
                  </span>
                </button>

                {isKadromuzExpanded && (
                  <>
                    <Link
                      to="/yonetim-kurulu"
                      className={`menu-option ${
                        location.pathname === "/yonetim-kurulu" ? "active" : ""
                      }`}
                      onClick={() => {
                        setIsAboutMenuOpen(false);
                        setIsKadromuzExpanded(false);
                        setIsOpen(false);
                      }}
                    >
                      Yönetim Kurulu
                    </Link>
                    <Link
                      to="/ekiplerimiz"
                      className={`menu-option ${
                        location.pathname === "/ekiplerimiz" ? "active" : ""
                      }`}
                      onClick={() => {
                        setIsAboutMenuOpen(false);
                        setIsKadromuzExpanded(false);
                        setIsOpen(false);
                      }}
                    >
                      Ekiplerimiz
                    </Link>
                  </>
                )}
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
