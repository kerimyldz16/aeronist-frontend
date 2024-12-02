import React from "react";
import "../styles/News.css";
import idefImage1 from "../assets/HomePage/News/idef.jpg";
import idefImage2 from "../assets/HomePage/News/idef2.jpg";

function News() {
  return (
    <div className="news-section">
      <h2 className="news-title">IDEF, Uluslararası Savunma Sanayii Fuarı</h2>
      <p className="news-content">
        IDEF, Uluslararası Savunma Sanayii Fuarı, Türkiye Cumhuriyeti
        Cumhurbaşkanlığı himayelerinde, Milli Savunma Bakanlığı ev sahipliğinde,
        Türk Silahlı Kuvvetlerini Güçlendirme Vakfı yönetim ve sorumluluğunda,
        TÜYAP Tüm Fuarcılık Yapım A.Ş. organizatörlüğünde konunun uzmanlarına
        yönelik gerçekleştirilen bir fuardır.
      </p>
      <p className="news-content">
        Dünyanın en büyük 4 savunma sanayii fuarından biri olan ve Türk Savunma
        Sanayii ürünlerinin vitrine çıktığı IDEF, Uluslararası Savunma Sanayii
        Fuarı'nda Aeronist Aerospace olarak yerimizi aldık.
      </p>
      <div className="news-images">
        <img src={idefImage1} alt="IDEF Fuarı 1" className="news-image" />
        <img src={idefImage2} alt="IDEF Fuarı 2" className="news-image" />
      </div>
    </div>
  );
}

export default News;
