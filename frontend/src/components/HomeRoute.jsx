import React, { useState } from "react";
import "../styles/HomeRoute.scss"; //style
//components
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";

const HomeRoute = ({ photos, topics }) => {
  const [favPhotos, setFavPhotos] = useState([]); //set initial to empty array
  
  
  //fav notification
  const isFavPhotoExist = () => {
    return (favPhotos.length>0);
  };

  console.log(favPhotos);
  console.log(isFavPhotoExist(favPhotos));

  //add or remove from favourites based on selected status to be passed down photolist->photoitem
  const handleFavs = (photo, selected) => {
    //setting or removing will depend on state of previous state to previous value(initial value)
    !selected
      ? setFavPhotos([...favPhotos, photo])
      : setFavPhotos(favPhotos.filter((favPhoto) => favPhoto.id !== photo.id));
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList photos={photos} handleFavs={handleFavs} />
    </div>
  );
};

export default HomeRoute;
