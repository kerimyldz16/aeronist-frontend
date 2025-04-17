import React, { useRef, useState, useEffect } from "react";
import "../styles/GallerySection.css";

import img1 from "../assets/HomePage/gallery/gallery1.jpg";
import img2 from "../assets/HomePage/gallery/gallery2.jpg";
import img3 from "../assets/HomePage/gallery/gallery3.jpg";

function GallerySection() {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [modalIndex, setModalIndex] = useState(null);
  const images = [img1, img2, img3, img3, img3, img3];
  const [touchStartX, setTouchStartX] = useState(null);

  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    checkScroll();

    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", checkScroll);
    }

    window.addEventListener("resize", checkScroll);

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", checkScroll);
      }
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (modalIndex !== null) {
        if (e.key === "Escape") {
          closeModal();
        } else if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
          goPrev();
        } else if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
          goNext();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalIndex]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const closeModal = () => {
    setModalIndex(null);
    document.body.style.overflow = "auto";
  };

  const goNext = () => {
    if (modalIndex < images.length - 1) {
      setModalIndex(modalIndex + 1);
    }
  };

  const goPrev = () => {
    if (modalIndex > 0) {
      setModalIndex(modalIndex - 1);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX !== null) {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;

      if (diff > 50) goNext();
      else if (diff < -50) goPrev();

      setTouchStartX(null);
    }
  };

  return (
    <section className="gallery-section" id="gallery">
      <h2 className="section-title">Galeri</h2>
      <hr className="divider" />

      <div className="gallery-wrapper">
        {showLeftArrow && (
          <button
            className="gallery-scroll-button left"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            &lt;
          </button>
        )}

        <div className="gallery-container" ref={scrollRef}>
          {images.map((src, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={src}
                alt={`Galeri Görseli ${index + 1}`}
                className="gallery-image"
                onClick={() => {
                  setModalIndex(index);
                  document.body.style.overflow = "hidden";
                }}
              />
            </div>
          ))}
        </div>

        {showRightArrow && (
          <button
            className="gallery-scroll-button right"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            &gt;
          </button>
        )}
      </div>

      {modalIndex !== null && (
        <div className="gallery-modal" onClick={closeModal}>
          <div
            className="gallery-modal-inner"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button className="gallery-modal-close" onClick={closeModal}>
              ×
            </button>

            {modalIndex > 0 && (
              <button className="gallery-modal-nav left" onClick={goPrev}>
                ‹
              </button>
            )}

            <div className="gallery-modal-image-wrapper">
              <img src={images[modalIndex]} alt={`Galeri ${modalIndex + 1}`} />
            </div>

            {modalIndex < images.length - 1 && (
              <button className="gallery-modal-nav right" onClick={goNext}>
                ›
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default GallerySection;
