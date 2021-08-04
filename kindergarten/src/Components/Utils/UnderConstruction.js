import React from "react";
import ReusableButton from "./ReusableButton";
import image from "../../Resources/images/construction.png";

const UnderConstruction = (props) => {
  return (
    <div className="under-the-construction">
      <img src={image} alt="under construction"></img>
      <p>Sorry :(</p>
      <p>{props.message}</p>

      <ReusableButton
        text="BACK"
        path={props.path??"/"}
        arrow="left"
      ></ReusableButton>
    </div>
  );
};

export default UnderConstruction;

