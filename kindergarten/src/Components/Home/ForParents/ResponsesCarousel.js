import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { showErrorToast } from "../../Utils/Toasts";
import { responsesCollection } from "../../../firebase";

const ResponsesCarousel = () => {
  const CreateSlides = () => {
    const [responses, setResponses] = useState([]);

    useEffect(async () => {
      try {
        const snapshot = await responsesCollection.get();
        const responses = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setResponses(responses);
      } catch (error) {
        showErrorToast("Sorry try again later");
      }
    }, []);

    return responses.map((slide, index) => (
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

  return <Slider {...settings}>{CreateSlides()}</Slider>;
};

export default ResponsesCarousel;
