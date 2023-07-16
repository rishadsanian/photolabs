import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({
  photos,
  handleOnClick,
  handleOnImageClick,
  modal

  // isFavourite,
  // handleFavs,
  // handlePhotoClick,
  // selected,
  // setSelected,
  // favPhotos,
}) => {
  //Make an array with photolistitem and photo properties per index
  const photoItems = photos.map((photo) => (
    <PhotoListItem
      key={photo.id}
      photo={photo}
      handleOnClick={(id) => handleOnClick(id)}
      handleOnImageClick={(id) => handleOnImageClick(id)}
      modal={modal}
      // isFavourite={isFavourite}
      // handleFavs={handleFavs}
      // handlePhotoClick={handlePhotoClick}
      // favPhotos={favPhotos}
      // selected={selected}
      // setSelected={setSelected}
    />
  ));

  //display the array
  return <ul className="photo-list">{photoItems}</ul>;
};

export default PhotoList;
