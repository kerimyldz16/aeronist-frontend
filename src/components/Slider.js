import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider.css";
import img1 from "../assets/slide-img1.jpg";
import img2 from "../assets/slide-img2.jpg";
import img3 from "../assets/slide-img3.jpg";

function SliderComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
        }}
      >
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <section className="slider">
      <Slider {...settings}>
        <div className="slide">
          <img src={img1} alt="Slide 1" className="slide-img" />
        </div>
        <div className="slide">
          <img src={img2} alt="Slide 2" className="slide-img" />
        </div>
        <div className="slide">
          <img src={img3} alt="Slide 3" className="slide-img" />
        </div>
      </Slider>
    </section>
  );
}

export default SliderComponent;
