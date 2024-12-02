import React, { useEffect, useRef } from "react";
import Timeline from "../components/Timeline";
import "../styles/History.css";
import image1 from "../assets/HomePage/News/idef.jpg";
import image2 from "../assets/HomePage/News/idef2.jpg";

function History() {
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
          <img
            src={image1}
            alt="Aeronist Tarihçe 1"
            className="history-image"
            ref={image1Ref}
          />
          <div className="history-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
        </div>
        <div className="history-row history-row-reverse">
          <img
            src={image2}
            alt="Aeronist Tarihçe 2"
            className="history-image"
            ref={image2Ref}
          />
          <div className="history-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
        </div>
        <Timeline />
      </div>
    </>
  );
}

export default History;
