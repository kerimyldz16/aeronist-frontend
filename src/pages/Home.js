// src/pages/Home.js
import React from "react";
import Navbar from "../components/Navbar";
import SliderComponent from "../components/Slider";
import GridSection from "../components/GridSection";
import GallerySection from "../components/GallerySection";
function Home() {
  return (
    <>
      <Navbar />
      <SliderComponent />
      <GridSection />
      <GallerySection />
    </>
  );
}

export default Home;
