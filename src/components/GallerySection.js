import React from "react";
import "../styles/GallerySection.css";

import img1 from "../assets/HomePage/gallery/gallery1.jpg";
import img2 from "../assets/HomePage/gallery/gallery2.jpg";
import img3 from "../assets/HomePage/gallery/gallery3.jpg";

function GallerySection() {
  return (
    <section className="gallery-section" id="gallery">
      <h2 className="section-title">Galeri</h2>
      <hr className="divider" />
      <div className="gallery-container">
        <img src={img1} alt="Galeri Görseli 1" className="gallery-image" />
        <img src={img2} alt="Galeri Görseli 2" className="gallery-image" />
        <img src={img3} alt="Galeri Görseli 3" className="gallery-image" />
      </div>
    </section>
  );
}

export default GallerySection;
