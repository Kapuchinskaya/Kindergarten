import React from "react";
import ReusableButton from "../Utils/ReusableButton";
import Photos from "./Photos";
import ToHomeButtonLayout from "./../Hoc/ToHomeButtonLayout";

const Gallery = (props) => {
  return (
    <ToHomeButtonLayout deleteBackBtn={props.deleteBackBtn}>
      <div className="gallery-wrapper">
        <h2>Galeria</h2>
        <Photos limit={props.limit} />
        {props.btn ? (
          <div style={{ marginTop: "20px" }}>
            <ReusableButton
              arrow="right"
              path={"/galeria"}
              text="wszystkie zdjęcia"
            />
          </div>
        ) : null}
      </div>
    </ToHomeButtonLayout>
  );
};

export default Gallery;
