import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { forParentsCollection } from "../../../firebase";
import { showErrorToast } from "./../../Utils/Toasts";

const ForParentsItem = () => {
  const CreateSlides = () => {
    const [info, setInfo] = useState([]);

    useEffect(async () => {
      try {
        const snapshot = await forParentsCollection.get();
        const info = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setInfo(info);
      } catch (error) {
        showErrorToast("Sorry try again later");
      }
    });

    return info.map((slide, index) => (
      <Link to="/dla_rodzicow" className="for-parents-slide" key={index}>
        <div className="for-parents-slide-wrapper">
          <div className="for-parents-slide-text-wrapper">
            <p className="for-parents-slide-text">{slide.title}</p>
          </div>

          <img src={slide.image} className="for-parents-slide-img" />
        </div>
      </Link>
    ));
  };
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1620,
        settings: {
          arrows: false,
          className: "center",
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1360,
        settings: {
          arrows: false,
          className: "center",
          centerMode: true,
          slidesToShow: 2.5,
          slidesToScroll: 2.5,
          infinite: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          className: "center",
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },

      {
        breakpoint: 910,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 810,
        settings: {
          arrows: false,
          className: "center",
          centerMode: true,
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return <Slider {...settings}>{CreateSlides()}</Slider>;
};

export default ForParentsItem;
