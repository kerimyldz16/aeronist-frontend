// src/pages/Home.js
import React from "react";
import Navbar from "../components/Navbar";
import SliderComponent from "../components/Slider";
import GridSection from "../components/GridSection";
import GallerySection from "../components/GallerySection";
import News from "../components/News";
function Home() {
  return (
    <>
      <Navbar />
      <SliderComponent />
      <GridSection />
      <GallerySection />
      <News />
    </>
  );
}

export default Home;
