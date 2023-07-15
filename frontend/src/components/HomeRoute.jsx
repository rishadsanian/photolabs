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
  handleOnClick,
  selected,
  setSelected,
  isFavourite,
  favPhotos,
  handleOnImageClick
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
        handleOnClick={(id) => handleOnClick(id)}
        selected={selected}
        setSelected={setSelected}
        handleOnImageClick={(id) => handleOnImageClick(id)}
      />
    </div>
  );
};

export default HomeRoute;
