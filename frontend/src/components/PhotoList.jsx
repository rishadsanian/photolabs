import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({
  photos,
  handleFavs,
  handlePhotoClick,
  handleOnClick,
  selected,
  setSelected,
  isFavourite,
  favPhotos,
  handleOnImageClick
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
      handleOnClick={(id) => handleOnClick(id)}
      selected={selected}
      setSelected={setSelected}
      handleOnImageClick={(id) => handleOnImageClick(id)}
    />
  ));

  //display the array
  return <ul className="photo-list">{photoItems}</ul>;
};

export default PhotoList;
