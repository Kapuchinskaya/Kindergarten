import React from "react";
import ReusableButton from "../Utils/ReusableButton";

const ToHomeButtonLayout = (props) => {
  return (
    <div className="component-container">
      {props.children}
      <ReusableButton text="BACK" path="/" arrow="left" />
    </div>
  );
};

export default ToHomeButtonLayout;
