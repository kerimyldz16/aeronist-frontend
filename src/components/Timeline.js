import React from "react";
import { Chrono } from "react-chrono";
import "../styles/Timeline.css";

function Timeline() {
  const items = [
    {
      title: "2018",
      cardTitle: "Teknofest Alçak İrtifa Yarışmasında 2.lik elde ettik.",
    },
    {
      title: "2019",
      cardTitle:
        "Teknofest Alçak İrtifa ve Yüksek İrtifa Yarışmalarında finale çıkmaya hak kazandık.",
    },
    {
      title: "2020",
      cardTitle:
        "Teknofest Alçak İrtifa 4.lüğü elde ederken Orta İrtifa Final aşamasına çıkmaya hak kazandık.",
    },
    {
      title: "2021",
      cardTitle:
        "Teknofest Yüksek İrtifa Roket Yarışmasında Finalist olduk. Uluslararası IHA Yarışmasına katıldık.",
    },
    {
      title: "2022",
      cardTitle:
        "Teknofest Yüksek İrtifa Roket Yarışmasında 4.lük elde ettik. Uluslararası IHA Yarışmasına katıldık.",
    },
    {
      title: "2023",
      cardTitle:
        "Teknofest Yüksek İrtifa ve Orta İrtifa Yarışmalarına katıldık. Uluslararası IHA Yarışmasına katıldık.",
    },
    {
      title: "2024",
      cardTitle:
        "Teknofest Yüksek İrtifa Roket Yarışmasında 3.lük elde ettik ve Orta İrtifa Roket Yarışmasında finalist olduk. Uluslararası IHA Yarışmasına katıldık.",
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
        disableToolbar
        disableInteraction={true}
      />
    </div>
  );
}

export default Timeline;
