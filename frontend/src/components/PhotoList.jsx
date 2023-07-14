import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, handleFavs }) => {
  //Make an array with photolistitem and photo properties per index
  const photoItems = photos.map((photo) => (
    <PhotoListItem
      key={photo.id}
      handleFavs={handleFavs}
      photo={photo}
    />
  ));
 

  //display the array
  return <ul className="photo-list">{photoItems}</ul>;
};


export default PhotoList;
