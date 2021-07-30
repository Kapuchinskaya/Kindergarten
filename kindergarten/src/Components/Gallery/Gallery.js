import React from "react";
import ReusableButton from "../Utils/ReusableButton";
import Photos from "./Photos";

const Gallery = (props) => {
  return (
    <div className="gallery-wrapper">
      <h2>Galeria</h2>
      <Photos limit={props.limit} />
      {props.btn ? (
        <div style={{ marginTop: "20px" }}>
          <ReusableButton arrow="right" path={"/galeria"} text="all photos" />
        </div>
      ) : null}
    </div>
  );
};

export default Gallery;
