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
  showFavPhotos,
  displayAllPhotos,
  allPhotos
}) => {
  //RENDER
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
        showPhotosByTopic={(id) => showPhotosByTopic(id)}
        showFavPhotos={showFavPhotos}
        displayAllPhotos={displayAllPhotos}
    
      />
      <PhotoList
        photos={photos}
        handleFavButtonClick={(id) => handleFavButtonClick(id)}
        handleOnImageClick={(id) => handleOnImageClick(id)}
        isFavourite={isFavourite}
        allPhotos={allPhotos}
      />
    </div>
  );
};

export default HomeRoute;
