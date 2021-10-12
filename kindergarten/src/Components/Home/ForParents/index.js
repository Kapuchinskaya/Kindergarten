import React from "react";
import ForParentsItem from "./forParentsItem";
import ResponsesCarousel from "./ResponsesCarousel";

const ForParents = () => {
  return (
    <div className="for-parents-section-wrapper">
      <ForParentsItem />
      <div className="responses">
        <p className="quote">"</p>
        {/* <h3>RESPONSES</h3>
        <ResponsesCarousel /> */}
      </div>
    </div>
  );
};
export default ForParents;
