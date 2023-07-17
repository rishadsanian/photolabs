import React from "react";
import "../styles/HomeRoute.scss"; //style
//components
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";

const HomeRoute = ({
  photos,
  topics,
  isFavPhotoExist,
  handleFavButtonClick,
  handleOnImageClick,
  isFavourite,
  showPhotosByTopic,
  loadPhotos,
}) => {
  //RENDER
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
        showPhotosByTopic={(id) => showPhotosByTopic(id)}
        // loadPhotos={loadPhotos()}
      />
      <PhotoList
        photos={photos}
        handleFavButtonClick={(id) => handleFavButtonClick(id)}
        handleOnImageClick={(id) => handleOnImageClick(id)}
        isFavourite={isFavourite}
      />
    </div>
  );
};

export default HomeRoute;
