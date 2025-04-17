import React from "react";
import Slider from "react-slick";
import "../styles/Sponsorship.css";
import sponsorshipFile from "../assets/sponsorship.pdf";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaDownload } from "react-icons/fa";
import roketsan from "../assets/Sponsors/roketsan.jpg";
import istuni from "../assets/Sponsors/iu.jpg";
import eker from "../assets/Sponsors/eker.jpg";
import ahmet from "../assets/Sponsors/ahmet.jpg";
import vg from "../assets/Sponsors/vg.png";
import prodigma from "../assets/Sponsors/prodigma.jpg";
import ekom from "../assets/Sponsors/ekom.jpg";
import promakim from "../assets/Sponsors/promakim.jpg";
import komp from "../assets/Sponsors/komp.jpg";
import poliya from "../assets/Sponsors/poliya.jpg";
import sora from "../assets/Sponsors/sora.jpg";
import filetto from "../assets/Sponsors/filetto.png";
import wurthe from "../assets/Sponsors/wurthe.jpg";
import makser from "../assets/Sponsors/makser.jpg";
import fymakine from "../assets/Sponsors/fymakine.jpg";
import ari from "../assets/Sponsors/ari.jpg";
import kologlu from "../assets/Sponsors/kologlu.jpg";
import dinamik from "../assets/Sponsors/dinamik.jpg";
import özdisan from "../assets/Sponsors/özdisan.png";
import metatech from "../assets/Sponsors/metatech.jpg";

const Sponsorship = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
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
    <section className="sponsorship-section">
      <h2 className="section-title-h2">Sponsorluk</h2>
      <p className="sponsorship-text">
        Daha da iyisi, biz gelelim, yüz yüze görüşelim!
      </p>
      <a href={sponsorshipFile} className="download-button" download>
        Sponsorluk Dosyamızı İndirin <FaDownload />
      </a>

      <h3>Destekçilerimiz</h3>
      <Slider {...sliderSettings}>
        {[filetto, ekom, wurthe, komp, özdisan, metatech].map(
          (sponsor, index) => (
            <div key={index} className="sponsor-card">
              <img
                src={sponsor}
                alt={`Sponsor ${index}`}
                className="sponsor-logo"
              />
            </div>
          )
        )}
      </Slider>

      <h3 className="support">Geçmiş Destekçilerimiz</h3>
      <Slider {...sliderSettings}>
        {[
          ahmet,
          ari,
          dinamik,
          eker,
          fymakine,
          istuni,
          kologlu,
          makser,
          poliya,
          prodigma,
          promakim,
          roketsan,
          sora,
          vg,
        ].map((sponsor, index) => (
          <div key={index} className="sponsor-card">
            <img
              src={sponsor}
              alt={`Geçmiş Sponsor ${index}`}
              className="sponsor-logo"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Sponsorship;
