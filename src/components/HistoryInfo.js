import React, { useEffect, useRef } from "react";
import "../styles/HistoryInfo.css";
import image1 from "../assets/HomePage/News/idef.jpg";
import image2 from "../assets/History/hist2.jpg";

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
              2018 yılında çeşitli dallardan bir grup mühendislik öğrencisi
              tarafından, İstanbul Üniversitesi-Cerrahpaşa Mühendislik Fakültesi
              bünyesinde Havacılık ve Uzay Kulübü olarak kurulan kulübümüz,
              havacılık ve uzay teknolojilerine ilgi duyan öğrencileri bir araya
              getirerek bu alanda projeler geliştirmek amacıyla yola çıktı.
              Kuruluşumuzdan itibaren, mühendislik disiplinlerini pratiğe
              dökerek öğrenci gelişimini desteklemeyi ve ulusal ile uluslararası
              arenada üniversitemizi ve milletimizi en iyi şekilde temsil etmeyi
              hedefliyoruz. Havacılık, uzay ve savunma sanayii alanlarında katkı
              sağlamak için çalışmalarımıza kararlılıkla devam ediyoruz.
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
              Kuruluşumuzdan bu yana gökyüzüne ve ötesine uzanan bir yolculuğun
              içindeyiz. "Gökyüzü sınır değil başlangıçtır." mottosunu her daim
              iliklerimizde hissediyoruz. Havacılık ve uzay tutkusu ile bir
              araya gelen kulübümüz, sınırları zorlayan projelere imza atarak
              yıllar boyu mühendislik yetkinliklerini sahaya taşıdı ve taşımaya
              devam ediyor. Roket ve insansız hava aracı (İHA) takımlarımız
              TEKNOFEST yarışmalarına katılarak çeşitli dereceler ve başarılar
              elde etti. Her geçen yıl daha büyük hedeflerle ilerliyor, teknik
              bilgimizi pratiğe dökerek kendimizi geliştiriyoruz. Bu yıl su altı
              roket ve hava savunma projelerini de bünyemize katarak, farklı
              alanlarda da yetkinlik kazanmayı hedefliyoruz. Aynı zamanda
              Uluslararası Roket Yarışması (IREC)'na katılarak kulüp kuruluş
              amacımız doğrultusunda, Türkiye'yi temsil edecek olmanın
              gururuyla, büyük bir adım atıyoruz. Azim ve takım ruhuyla
              çıktığımız bu yolda, büyük bir aile samimiyetiyle çalışmalarımıza
              devam ederek ülkemizi en iyi şekilde temsil etmeye ve teknolojiyi
              ileri taşımaya devam edeceğiz.
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
