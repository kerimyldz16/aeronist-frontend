import React, { useState } from "react";
import "../styles/Announcements.css";
import { Link } from "react-router-dom"; // backend routing ready

const announcements = [
  {
    title: "TEKNOFEST Başvuruları Başladı!",
    date: "Nisan 10, 2025",
    content:
      "Aeronist takımı olarak bu yıl da TEKNOFEST'e başvurularımızı yaptık. Tüm ekip üyelerimize başarılar diliyoruz!",
  },
  {
    title: "Yeni Üyelerimize Hoş Geldiniz!",
    date: "Mart 25, 2025",
    content:
      "Yeni dönem ekip üyelerimizle tanıştık. Hep birlikte çok başarılı bir yıl geçireceğimize inanıyoruz.",
  },
  {
    title: "Uçuş Testi Başarıyla Tamamlandı",
    date: "Mart 10, 2025",
    content:
      "Prototip roketimizin uçuş testi başarıyla tamamlandı. Teknik ekibi kutluyoruz! Test esnasında yapılan ölçümler, beklentilerin üstünde başarı gösterdi. Detaylı rapor yakında tüm ekiplerle paylaşılacak.",
  },
];

function Announcements() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="announcements-section" id="announcements">
      <h2 className="announcements-title">Duyurular</h2>
      <hr className="announcements-divider" />

      <div className="announcements-list">
        {announcements.map((item, index) => (
          <div
            className={`announcement-card ${
              expandedIndex === index ? "expanded" : ""
            }`}
            key={index}
            onClick={() => toggleExpand(index)}
          >
            <h3>{item.title}</h3>
            <p className="announcement-date">{item.date}</p>
            <p className="announcement-content">
              {expandedIndex === index
                ? item.content
                : `${item.content.slice(0, 80)}...`}
            </p>
          </div>
        ))}
      </div>

      <div className="announcements-footer">
        <Link to="/announcements" className="view-all-link">
          Tümünü Gör →
        </Link>
      </div>
    </section>
  );
}

export default Announcements;
