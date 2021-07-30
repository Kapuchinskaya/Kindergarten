import React from "react";
import Slider from "react-slick";
import responsesData from "../../../Resources/data/responsesData";
import quote from "../../../Resources/images/quote.png";

const ResponsesCarousel = () => {
  const createSlides = () => {
    return responsesData.map((slide, index) => (
      <div key={index} className="response-item">
        <p className="response-item-content">{slide.content}</p>
        <p className="response-item-owner">{slide.owner}</p>
      </div>
    ));
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return <Slider {...settings}>{createSlides()}</Slider>;
};

export default ResponsesCarousel;
