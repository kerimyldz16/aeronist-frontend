import React from "react";
import SliderComponent from "../components/Slider";
import GridSection from "../components/GridSection";
import GallerySection from "../components/GallerySection";
import News from "../components/News";
function Home() {
  return (
    <>
      <SliderComponent />
      <GridSection />
      <GallerySection />
      <News />
    </>
  );
}

export default Home;
