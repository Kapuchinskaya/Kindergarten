import React from "react";
import Carousel from "./PhotoCarousel/Carousel";
import ArticleOverview from "./Articles_overview";
const Home = () => {
  return (
    <div className="home-wrapper">
      <Carousel />
      <ArticleOverview />
    </div>
  );
};

export default Home;
