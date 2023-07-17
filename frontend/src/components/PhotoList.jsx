import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({
  photos,
  handleFavButtonClick,
  handleOnImageClick,
  isFavourite,
}) => {
  //Make an array with photolistitem and photo properties per index
  const photoItems = photos.map((photo) => (
    <PhotoListItem
      key={photo.id}
      photo={photo}
      handleFavButtonClick={(id) => handleFavButtonClick(id)}
      handleOnImageClick={(id) => handleOnImageClick(id)}
      isFavourite={isFavourite}
    />
  ));

  //display the array
  return <ul className="photo-list">{photoItems}</ul>;
};

export default PhotoList;
