import React from "react";
// style
import "../styles/TopNavigationBar.scss";
// components
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({
  topics,
  isFavPhotoExist,
  showPhotosByTopic,
  showFavPhotos,
  displayAllPhotos
}) => {
  return (
    <div className="top-nav-bar">
      <div className="top-nav-bar__left">
        <span 
        className="top-nav-bar__logo" 
        onClick={()=>displayAllPhotos()}
        >PhotoLabs</span>
      </div>

      <div className="top-nav-bar__right">
        <span 
        className="top-nav-bar__all"
        onClick={()=>displayAllPhotos()}
         > All </span>
        <TopicList
          topics={topics}
          showPhotosByTopic={(id) => showPhotosByTopic(id)}
        />
        <FavBadge isFavPhotoExist={isFavPhotoExist} showFavPhotos={showFavPhotos} />
      </div>
    </div>
  );
};

export default TopNavigation;
