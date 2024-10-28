import React from "react";
import "../styles/GallerySection.css";

import img1 from "../assets/gallery1.jpg";
import img2 from "../assets/gallery2.jpg";
import img3 from "../assets/gallery3.jpg";

function GallerySection() {
  return (
    <section className="gallery-section" id="gallery">
      <h2 className="section-title">Galeri</h2>
      <hr className="divider" />
      <div className="gallery-container">
        <div className="gallery-item">
          <img src={img1} alt="Galeri Görseli 1" />
          <p>
            İleriye yönelik hedeflerimize ulaşmak için birlikte çalışıyoruz ve
            bu yolda her zaman en iyisini yapmayı amaçlıyoruz.
          </p>
        </div>
        <div className="gallery-item">
          <img src={img2} alt="Galeri Görseli 2" />
          <p>
            Havacılık ve uzay alanında gerçekleştirdiğimiz çalışmalar,
            teknolojiyi ileriye taşıma yolunda önemli bir katkı sağlıyor.
          </p>
        </div>
        <div className="gallery-item">
          <img src={img3} alt="Galeri Görseli 3" />
          <p>
            Öğrencilerimizin emeği ve azmiyle, yeni nesil teknolojiler ve
            projeler üzerinde çalışıyoruz.
          </p>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
