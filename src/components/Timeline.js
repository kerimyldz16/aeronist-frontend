import React from "react";
import { Chrono } from "react-chrono";
import "../styles/Timeline.css";

function Timeline() {
  const items = [
    { title: "2018", cardTitle: "AERONIST KULÜBÜ KURULDU" },
    {
      title: "2019",
      cardTitle: "TEKNOFEST 2019 YÜKSEK İRTİFA YARIŞMASINDA 4. OLDUK",
    },
    {
      title: "2020",
      cardTitle: "TEKNOFEST 2020 ALÇAK İRTİFA YARIŞMASINDA 3. OLDUK",
    },
    { title: "2021", cardTitle: "100 KİŞİLİK BİR AİLE OLDUK" },
    { title: "2022", cardTitle: "YENİ ALÇAK İRTİFA ROKETİMİZ VEKTÖR - A" },
    {
      title: "2024",
      cardTitle: "İHA - SİHA VE HSS KATEGORİLERİNDE YARIŞMALARA KATILDIK",
    },
  ];

  return (
    <div className="timeline-section-alt">
      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: "#00aaff",
          secondary: "#1a1a1a",
          cardBgColor: "#2e2e2e",
          cardForeColor: "#ffffff",
          titleColor: "#ffcc00",
          cardTitleColor: "#ffffff",
        }}
        slideShow
        slideShowDuration={4000}
        borderLessCards={true}
        textDensity="LESS"
        highlightCardsOnHover
        disableToolbar
        disableInteraction={true}
      />
    </div>
  );
}

export default Timeline;
