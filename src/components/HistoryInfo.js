import React, { useEffect, useRef } from "react";
import "../styles/History.css";
import image1 from "../assets/HomePage/News/idef.jpg";
import image2 from "../assets/HomePage/News/idef2.jpg";

function HistoryInfo() {
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (image1Ref.current) {
        const rect1 = image1Ref.current.getBoundingClientRect();
        if (rect1.top < window.innerHeight) {
          image1Ref.current.classList.add("history-image-visible");
        }
      }
      if (image2Ref.current) {
        const rect2 = image2Ref.current.getBoundingClientRect();
        if (rect2.top < window.innerHeight) {
          image2Ref.current.classList.add("history-image-visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="history-section">
        <h2 className="section-title-h2">Biz Kimiz?</h2>

        <div className="history-row">
          <div className="history-text">
            <h3 className="history-text-title">İlk Adımlarımız</h3>
            <p>
              Aeronist Aerospace, ulusal ve uluslararası arenada yer almak
              amacıyla, havacılık ve uzay teknolojilerine ilgi duyan
              öğrencilerin girişimleriyle kurulmuştur. Temel hedefimiz, ülkemizi
              en iyi şekilde temsil ederek teknolojiyi daha ileri taşımaktır.
              Aeronist Aerospace, ulusal ve uluslararası arenada yer almak
              amacıyla, havacılık ve uzay teknolojilerine ilgi duyan
              öğrencilerin girişimleriyle kurulmuştur. Temel hedefimiz, ülkemizi
              en iyi şekilde temsil ederek teknolojiyi daha ileri taşımaktır.
              Aeronist Aerospace, ulusal ve uluslararası arenada yer almak
              amacıyla, havacılık Aeronist Aerospace, ulusal ve uluslararası
              arenada yer almak amacıyla, havacılık ve uzay teknolojilerine ilgi
              duyan öğrencilerin girişimler
            </p>
          </div>
          <img
            src={image1}
            alt="Aeronist Tarihçe 1"
            className="history-image"
            ref={image1Ref}
          />
        </div>

        <div className="history-row history-row-reverse">
          <div className="history-text">
            <h3 className="history-text-title">Başarılarla Dolu Yıllar</h3>
            <p>
              Geçen yıllar içinde pek çok projede yer alarak, yüksek başarılar
              elde ettik. Takım ruhuyla ilerlediğimiz bu yolda, yerli ve milli
              üretime destek sağlamak için çalışmalarımıza devam ediyoruz.
              Aeronist Aerospace, ulusal ve uluslararası arenada yer almak
              amacıyla, havacılık ve uzay teknolojilerine ilgi duyan
              öğrencilerin girişimleriyle kurulmuştur. Temel hedefimiz, ülkemizi
              en iyi şekilde temsil ederek teknolojiyi daha ileri taşımaktır.
              Aeronist Aerospace, ulusal ve uluslararası arenada yer almak
              amacıyla, havacılık ve uzay teknolojilerine ilgi duyan
              öğrencilerin girişimleriyle kurulmuştur. Temel hedefimiz, ülkemizi
              en iyi şekilde temsil ederek teknolojiyi daha ileri taşımaktır.
            </p>
          </div>
          <img
            src={image2}
            alt="Aeronist Tarihçe 2"
            className="history-image"
            ref={image2Ref}
          />
        </div>
      </div>
    </>
  );
}

export default HistoryInfo;
