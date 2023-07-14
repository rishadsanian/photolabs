import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
// import photos from "../mocks/photos";
// import topics from "../mocks/topics";

// export const favPhotos = [];

const HomeRoute = ({photos, topics}) => {
  const [favPhotos, setFavPhotos] = useState([]); //set initial to empty array
  console.log(favPhotos);

  //function to add or remove from favourites based on selected status
  const handleFavs = (photo, selected) => {
    //setting or removing will depend on state of previous state to previous value(initial value)
    !selected
      ? setFavPhotos([...favPhotos, photo])
      : setFavPhotos(favPhotos.filter((favPhoto) => favPhoto.id !== photo.id));
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} />
      <PhotoList photos={photos} handleFavs={handleFavs} />
      {/* <PhotoList photos={photos} favPhotos={favPhotos} /> */}
    </div>
  );
};

export default HomeRoute;
