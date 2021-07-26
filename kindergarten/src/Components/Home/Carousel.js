import React from "react";
import Slider from "react-slick";
import slide_one from "../../Resources/carousel_images/c_1.jpg";
import slide_two from "../../Resources/carousel_images/c_2.jpg";
import slide_three from "../../Resources/carousel_images/c_3.jpg";

const Carousel = () => {
  const content = [
    {
      image: slide_one,
      header: "Info #1",
      content:
        "Sed efficitur pharetra mauris, a interdum leo molestie tincidunt. Praesent.",
    },
    {
      image: slide_two,
      header: "Info #2",
      content:
        "Sed efficitur pharetra mauris, a interdum leo molestie tincidunt. Praesent.",
    },
    {
      image: slide_three,
      header: "Info #3",
      content:
        "Sed efficitur pharetra mauris, a interdum leo molestie tincidunt. Praesent.",
    },
  ];

  const createSlides = () => {
    return content.map((slide) => (
      <div key={slide.image} className="carousel-wrapper">
        <div
          className="carousel-image"
          style={{
            background: `url(${slide.image})`,
            height: `${window.innerHeight}px`,
          }}
        ></div>
        <div className="slide-description">
          <div className="slide-description-header"> {slide.header}</div>
          <div className="slide-description-content"> {slide.content}</div>
        </div>
      </div>
    ));
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 400,
  };

  return <Slider {...settings}>{createSlides()}</Slider>;
};

export default Carousel;
