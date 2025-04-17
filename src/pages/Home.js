import React from "react";
import SliderComponent from "../components/Slider";
import GridSection from "../components/GridSection";
import GallerySection from "../components/GallerySection";
import News from "../components/News";
import Announcements from "../components/Announcements";
function Home() {
  return (
    <>
      <SliderComponent />
      <GridSection />
      <GallerySection />
      <Announcements />
      <News />
    </>
  );
}

export default Home;
