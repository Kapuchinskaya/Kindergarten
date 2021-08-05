import React from "react";
import ReusableButton from "../Utils/ReusableButton";

const ToHomeButtonLayout = (props) => {
  return (
    <div className="component-container">
      {props.children}
      {!props.deleteBackBtn ? (
        <ReusableButton text="WSTECZ" path="/" arrow="left" />
      ) : null}
    </div>
  );
};

export default ToHomeButtonLayout;
