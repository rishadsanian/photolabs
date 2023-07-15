import React, { useState } from "react";
import "../styles/HomeRoute.scss"; //style
//components
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";

const HomeRoute = ({
  photos,
  topics,
  isFavPhotoExist,
  handleFavs,
  handlePhotoClick,
  onClick,
  selected,
  setSelected,
  isFavourite,
  favPhotos,
}) => {
  //RENDER
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={isFavPhotoExist} />
      <PhotoList
        photos={photos}
        handleFavs={handleFavs}
        handlePhotoClick={handlePhotoClick}
        isFavourite={isFavourite}
        favPhotos={favPhotos}
        // onClick={onClick}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

export default HomeRoute;
