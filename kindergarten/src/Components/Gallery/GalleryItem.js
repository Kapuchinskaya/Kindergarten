import React from "react";
import ReusableButton from "../Utils/ReusableButton";
// import { useHistory, useParams } from 'react-router-dom'
import galleryData from "../../Resources/data/galleryData";

const GalleryItem = (props) => {
  const photo = galleryData.find(
    (photocard) => photocard.id === +props.match.params.id
  );
  if (!photo) return null;
  console.log(photo);
  return (
    <div className="gallery-item">
      <h3>{photo.title}</h3>
      <img src={photo.img} alt={photo.title}></img>
      <ReusableButton text="BACK" path="/galeria" arrow="left"></ReusableButton>
    </div>
  );
};

export default GalleryItem;
