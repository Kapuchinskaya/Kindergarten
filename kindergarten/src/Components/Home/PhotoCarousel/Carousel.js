import React from "react";
import Slider from "react-slick";
import news from "../../../Resources/data/newsData";

const Carousel = () => {
  const createSlides = () => {
    return news.map((slide, index) => (
      <div key={index} className="carousel-wrapper">
        <div
          className="carousel-image"
          style={{
            background: `url(${slide.image})`,
            height: `${window.innerHeight}px`,
          }}
        ></div>
        <div className="slide-description">
          <div className="slide-description-header"> {slide.title}</div>
          <div className="slide-description-content"> {slide.title}</div>
        </div>
      </div>
    ));
  };

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 400,
  };

  return <Slider {...settings}>{createSlides()}</Slider>;
};

export default Carousel;
