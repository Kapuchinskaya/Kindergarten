import React from "react";
import Carousel from "./PhotoCarousel/Carousel";
import ArticleOverview from "./ArticlesOverview";
import ForParents from "./ForParents";
import GalleryHome from "./Gallery/index";
import Contacts from './Contact/index';
const Home = () => {
  return (
    <div className="home-wrapper">
      <Carousel />
      <ArticleOverview />
      <ForParents />
      <GalleryHome />
      <Contacts />
    </div>
  );
};

export default Home;
