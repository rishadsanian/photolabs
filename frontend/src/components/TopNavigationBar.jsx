import React from "react";
// style
import "../styles/TopNavigationBar.scss";
// components
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({ topics, isFavPhotoExist, showPhotosByTopic }) => {
  return (
    <div className="top-nav-bar">
      <div className="top-nav-bar__left">
        <span className="top-nav-bar__logo">PhotoLabs</span>
      </div>

      <div className="top-nav-bar__right">
        <TopicList topics={topics}  showPhotosByTopic={(id)=>showPhotosByTopic(id)} />
        <FavBadge isFavPhotoExist={isFavPhotoExist} />
      </div>
    </div>
  );
};

export default TopNavigation;
