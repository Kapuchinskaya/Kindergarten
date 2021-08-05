import React from "react";
import ReusableButton from "../Utils/ReusableButton";
import Photos from "./Photos";
import ToHomeButtonLayout from "./../Hoc/ToHomeButtonLayout";

const Gallery = (props) => {
  return (
    <ToHomeButtonLayout>
      <h2>Galeria</h2>
      <Photos limit={props.limit} />
      {props.btn ? (
        <div style={{ marginTop: "20px" }}>
          <ReusableButton arrow="right" path={"/galeria"} text="all photos" />
        </div>
      ) : null}
    </ToHomeButtonLayout>
  );
};

export default Gallery;
