import React, { useEffect } from "react";
import "../styles/GridSection.css";
import logo from "../assets/logo.jpg";
import img1 from "../assets/grid-img1.jpg";
import img2 from "../assets/grid-img2.jpg";

function GridSection() {
  useEffect(() => {
    const gridItems = document.querySelectorAll(".grid-item");
    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    }, observerOptions);

    gridItems.forEach((item) => {
      observer.observe(item);
    });
  }, []);

  return (
    <section className="grid-section" id="about">
      <div className="logo-container">
        <img src={logo} alt="Aeronist Aerospace Logo" className="logo-img" />
        <h2 className="logo-title">Aeronist Aerospace</h2>
        <hr className="divider" />
        <p className="logo-description">
          <em>Aeronist</em>, İstanbul Üniversitesi Cerrahpaşa Mühendislik
          Fakültesi
          <strong> Aeronist Havacılık ve Uzay Topluluğu</strong> olarak, tam
          bağımsız bir Türkiye hedefi doğrultusunda ülkemize fayda sağlayabilmek
          amacıyla kurulmuştur.
        </p>
      </div>
      <h2 className="section-title">Topluluk Olarak</h2>
      <hr className="divider" />
      <div className="grid-container">
        <div className="grid-item">
          <img src={img1} alt="Misyonumuz" />
          <h3>Misyonumuz</h3>
          <p>
            Misyonumuz, ulusal ve uluslararası projelere en iyi şekilde
            hazırlanıp, okulumuza ve ülkemize yakışır başarılar elde etmektir.
          </p>
        </div>
        <div className="grid-item">
          <img src={img2} alt="Vizyonumuz" />
          <h3>Vizyonumuz</h3>
          <p>
            Vizyonumuz, sınırsız hayal gücüne sahip ve bilimin gücüne inanan
            bireyler yetiştirmektir.
          </p>
        </div>
      </div>
    </section>
  );
}

export default GridSection;
