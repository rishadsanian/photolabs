import React, { useState } from "react";
import "../styles/HomeRoute.scss"; //style
//components
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";

const HomeRoute = ({
  photos,
  topics,
  isFavPhotoExist,
  handleOnClick,
  handleOnImageClick,
  isFavourite,
  // modal,
  // handleFavs,
  // handlePhotoClick,
  // selected,
  // setSelected,
  // favPhotos,
}) => {
  //RENDER
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={isFavPhotoExist} />
      <PhotoList
        photos={photos}
        handleOnClick={(id) => handleOnClick(id)}
        handleOnImageClick={(id) => handleOnImageClick(id)}
        isFavourite={isFavourite}
        // modal = {modal}
        // handleFavs={handleFavs}
        // handlePhotoClick={handlePhotoClick}
        // favPhotos={favPhotos}
        // selected={selected}
        // setSelected={setSelected}
      />
    </div>
  );
};

export default HomeRoute;
