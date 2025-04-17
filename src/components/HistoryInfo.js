import React, { useEffect, useRef } from "react";
import "../styles/HistoryInfo.css";
import image1 from "../assets/HomePage/News/idef.jpg";
import image2 from "../assets/History/hist2.jpg";

function HistoryInfo() {
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      [image1Ref, image2Ref].forEach((ref) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
            ref.current.classList.add("visible");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="historyinfo-section" id="history">
      <h2 className="historyinfo-title">Kulüp Tarihçemiz</h2>
      <hr className="historyinfo-divider" />

      <div className="historyinfo-block">
        <div className="historyinfo-column">
          <div className="historyinfo-text">
            <h3>İlk Adımlarımız</h3>
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
        </div>
        <div className="historyinfo-column">
          <img
            ref={image1Ref}
            src={image1}
            alt="Aeronist Kuruluş"
            className="historyinfo-image"
          />
        </div>
      </div>

      <div className="historyinfo-block reverse">
        <div className="historyinfo-column">
          <div className="historyinfo-text">
            <h3>Başarılarla Dolu Yıllar</h3>
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
              ileri taşımaya devam edeceğiz.{" "}
            </p>
          </div>
        </div>
        <div className="historyinfo-column">
          <img
            ref={image2Ref}
            src={image2}
            alt="Aeronist Başarılar"
            className="historyinfo-image"
          />
        </div>
      </div>
    </section>
  );
}

export default HistoryInfo;
