import React, { useState } from "react";
import "../styles/HomeRoute.scss"; //style
//components
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";

const HomeRoute = ({ photos, topics, toggleModal }) => {
  const [favPhotos, setFavPhotos] = useState([]); //set initial state to empty array for saving favourite photos

  //fav notification - triggered if favPhotos is not empty for notification icon in top navigation bar
  const isFavPhotoExist = () => {
    return favPhotos.length > 0;
  };

  console.log(favPhotos);
  console.log(isFavPhotoExist(favPhotos));

  //add or remove from favourites function which will be performed on click based on selected status to be passed down photolist->photoitem
  const handleFavs = (photo, selected) => {
    !selected
      ? setFavPhotos([...favPhotos, photo]) //if not already on list add to list
      : setFavPhotos(favPhotos.filter((favPhoto) => favPhoto.id !== photo.id)); //if already on list, remove from list
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={isFavPhotoExist} />
      <PhotoList
        photos={photos}
        handleFavs={handleFavs}
        toggleModal={toggleModal}
      />
    </div>
  );
};

export default HomeRoute;
