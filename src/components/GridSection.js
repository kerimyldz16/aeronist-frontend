import React, { useEffect, useRef, useState } from "react";
import "../styles/GridSection.css";
import logo from "../assets/logo.jpg";
import img1 from "../assets/HomePage/gallery/gallery1.jpg";
import img2 from "../assets/HomePage/gallery/gallery2.jpg";

function GridSection() {
  const [animated, setAnimated] = useState(false);
  const statsRef = useRef([]);

  useEffect(() => {
    const gridItems = document.querySelectorAll(".grid-item");
    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in");
        }
      });
    }, observerOptions);

    gridItems.forEach((item) => observer.observe(item));
  }, []);

  useEffect(() => {
    const animateNumbers = () => {
      statsRef.current.forEach((el, index) => {
        const target = +el.getAttribute("data-target");
        let count = 0;
        const increment = target / 100;

        const updateCount = () => {
          count += increment;
          if (count < target) {
            el.textContent = Math.ceil(count);
            requestAnimationFrame(updateCount);
          } else {
            el.textContent = index === 2 ? `${target}+` : target;
          }
        };

        updateCount();
      });
    };

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
            statSection.classList.add("in-view");
            animateNumbers();
          }
        });
      },
      { threshold: 0.6 }
    );

    const statSection = document.querySelector(".stats-section");
    if (statSection) {
      statsObserver.observe(statSection);
      statSection.classList.add("in-view");
    }
  }, [animated]);

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

      {/* 👇 Number Flow Animation Section */}
      <div className="stats-section">
        <div className="stat-box">
          <h3 ref={(el) => (statsRef.current[0] = el)} data-target="5">
            0
          </h3>
          <p>Ekip</p>
        </div>
        <div className="stat-box">
          <h3 ref={(el) => (statsRef.current[1] = el)} data-target="6">
            0
          </h3>
          <p>Yarışma</p>
        </div>
        <div className="stat-box">
          <h3 ref={(el) => (statsRef.current[2] = el)} data-target="70">
            0
          </h3>
          <p>Ekip Üyesi</p>
        </div>
      </div>

      <h2 className="section-title">Topluluk Olarak</h2>
      <hr className="divider" />
      <div className="grid-container">
        <div className="grid-item">
          <img src={img1} alt="Misyonumuz" />
          <h3>Misyonumuz</h3>
          <p>
            Misyonumuz, ulusal ve uluslararası projelere en iyi şekilde
            hazırlanarak okullarımızı ve ülkemizi en iyi şekilde temsil etmek;
            elde ettiğimiz başarılarla tam bağımsız Türkiye hedefine
            katkıda bulunmaktır.
          </p>
        </div>
        <div className="grid-item">
          <img src={img2} alt="Vizyonumuz" />
          <h3>Vizyonumuz</h3>
          <p>
            "İstikbal göklerdedir. Gökyüzünü koruyamayan uluslar, yarınlarından
            asla emin olamazlar." sözünü referans alarak, ülkemizi savunma
            sanayi, uzay ve teknoloji alanlarında en üst seviyeye taşımayı
            hedefliyoruz. Vizyonumuz, bilime inanan, teknolojiyi anlayıp
            geleceğe yön verebilen bireyler yetiştirmektir.
          </p>
        </div>
      </div>
    </section>
  );
}

export default GridSection;
