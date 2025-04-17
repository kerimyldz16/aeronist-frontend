import React from "react";
import "../styles/News.css";
import newsImage from "../assets/HomePage/News/news.jpg";
import newsVideo from "../assets/HomePage/News/NEWS.mov";

function News() {
  return (
    <div className="news-section">
      <h2 className="news-title">TEKNOFEST 2024 AKDENİZ</h2>
      <p className="news-content">
        Teknofest 2024'te, Adana'da yüksek irtifa roketimizi sergileyerek
        havacılık ve uzay tutkunlarıyla buluştuk. Roketimizin her detayı
        ziyaretçiler tarafından büyük ilgiyle incelendi; tasarımından uçuş
        dinamiklerine kadar merak edilen her soruyu yanıtladık. Ekibimizin
        aylarca süren emeğinin karşılığını görmek, Türkiye'nin uzay
        teknolojilerine olan ilgisini hissetmek bizim için büyük bir gururdu. Bu
        eşsiz atmosferde, geleceğin mühendisleriyle buluşmak ve onlara ilham
        vermek unutulmaz bir deneyimdi.
      </p>
      <p className="news-content">
        Festival boyunca yalnızca roketimizi sergilemekle kalmadık, aynı zamanda
        T3 Vakfı gönüllüsü, başkanımız Enes Balçın öncülüğünde Astronomi ve
        Havacılık Atölyesi'nde çocuklarla bir araya geldik. Minik ellerin
        tasarladığı roket modelleri, onların uzaya olan hayallerini
        yansıtıyordu. Bilimi eğlenceyle harmanlayan atölyemizde, çocukların
        gözlerindeki heyecanı görmek bizi daha da motive etti. Geleceğin
        mühendislerine ve bilim insanlarına ilham olabilmek, Teknofest 2024'teki
        en büyük başarımız oldu!
      </p>
      <div className="news-media">
        <img
          src={newsImage}
          alt="Teknofest 2024 Akdeniz"
          className="news-image"
        />
        <video controls className="news-video">
          <source src={newsVideo} type="video/mp4" />
          Tarayıcınız video etiketini desteklemiyor.
        </video>
      </div>
    </div>
  );
}

export default News;
