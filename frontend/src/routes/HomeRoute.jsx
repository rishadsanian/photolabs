import React from "react";
import "../styles/HomeRoute.scss"; //style
//components
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({
  photos,
  topics,
  isFavPhotoExist,
  handleFavButtonClick,
  handleOnImageClick,
  isFavourite,
  showPhotosByTopic,
  loadPhotos,
  showFavPhotos
}) => {
  //RENDER
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
        showPhotosByTopic={(id) => showPhotosByTopic(id)}
        showFavPhotos={showFavPhotos}
        // loadPhotos={loadPhotos}
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
