import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({
  photos,
  handleFavs,
  handlePhotoClick,
  onClick,
  selected,
  setSelected,
  isFavourite,
  favPhotos
}) => {
  //Make an array with photolistitem and photo properties per index
  const photoItems = photos.map((photo) => (
    <PhotoListItem
      key={photo.id}
      handleFavs={handleFavs}
      photo={photo}
      handlePhotoClick={handlePhotoClick}
      isFavourite={isFavourite}
      favPhotos={favPhotos}
      // onClick={onClick}
      selected={selected}
      setSelected={setSelected}
    />
  ));

  //display the array
  return <ul className="photo-list">{photoItems}</ul>;
};

export default PhotoList;
