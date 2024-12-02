import React from "react";
import Slider from "react-slick";
import "../styles/Sponsorship.css";
import sponsorshipFile from "../assets/sponsorship.pdf";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaDownload } from "react-icons/fa";
import elm1 from "../assets/Sponsors/roketsan.jpg";
import elm2 from "../assets/Sponsors/iu.jpg";
import elm3 from "../assets/Sponsors/eker.jpg";
import pla1 from "../assets/Sponsors/ahmet.jpg";
import pla2 from "../assets/Sponsors/vg.png";
import alt1 from "../assets/Sponsors/prodigma.jpg";
import alt2 from "../assets/Sponsors/ekom.jpg";
import alt3 from "../assets/Sponsors/promakim.jpg";
import alt4 from "../assets/Sponsors/komp.jpg";
import des1 from "../assets/Sponsors/poliya.jpg";
import des2 from "../assets/Sponsors/sora.jpg";
import des3 from "../assets/Sponsors/filetto.jpg";
import des4 from "../assets/Sponsors/wurthe.jpg";
import des5 from "../assets/Sponsors/makser.jpg";
import des6 from "../assets/Sponsors/fymakine.jpg";
import des7 from "../assets/Sponsors/ari.jpg";
import des8 from "../assets/Sponsors/kologlu.jpg";
import des9 from "../assets/Sponsors/dinamik.jpg";

const Sponsorship = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Slider oklarını kaldırmak için
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="sponsorship-section">
      <h2 className="section-title-h2">Sponsorluk</h2>
      <p className="sponsorship-text">
        Daha da iyisi, biz gelelim, yüz yüze görüşelim!
      </p>
      <a href={sponsorshipFile} className="download-button" download>
        Aeronist Aerospace Sponsorluk Dosyası <FaDownload />
      </a>

      {/* Elmas Sponsorlarımız */}
      <div className="sponsor-categories">
        <h3>Elmas Sponsorlarımız</h3>
        <div className="elmas-sponsors desktop-only">
          {[elm1, elm2, elm3].map((sponsor, index) => (
            <div key={index} className="sponsor-card">
              <img src={sponsor} alt="Elmas Sponsor" className="sponsor-logo" />
            </div>
          ))}
        </div>
        <div className="mobile-only">
          <Slider {...sliderSettings}>
            {[elm1, elm2, elm3].map((sponsor, index) => (
              <div key={index} className="sponsor-card">
                <img
                  src={sponsor}
                  alt="Elmas Sponsor"
                  className="sponsor-logo"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Platin Sponsorlarımız */}
      <div className="sponsor-categories">
        <h3>Platin Sponsorlarımız</h3>
        <div className="platin-sponsors desktop-only">
          {[pla1, pla2].map((sponsor, index) => (
            <div key={index} className="sponsor-card">
              <img
                src={sponsor}
                alt="Platin Sponsor"
                className="sponsor-logo"
              />
            </div>
          ))}
        </div>
        <div className="mobile-only">
          <Slider {...sliderSettings}>
            {[pla1, pla2].map((sponsor, index) => (
              <div key={index} className="sponsor-card">
                <img
                  src={sponsor}
                  alt="Platin Sponsor"
                  className="sponsor-logo"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Altın ve Destekçilerimiz - Slider ile Gösterim */}
      <h3>Altın Sponsorlarımız</h3>
      <Slider {...sliderSettings}>
        {[alt1, alt2, alt3, alt4].map((sponsor, index) => (
          <div key={index} className="sponsor-card">
            <img src={sponsor} alt="Sponsor" className="sponsor-logo" />
          </div>
        ))}
      </Slider>

      <h3 className="support">Destekçilerimiz</h3>
      <Slider {...sliderSettings}>
        {[des1, des2, des3, des4, des5, des6, des7, des8, des9].map(
          (sponsor, index) => (
            <div key={index} className="sponsor-card">
              <img src={sponsor} alt="Destekçi" className="sponsor-logo" />
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

export default Sponsorship;
