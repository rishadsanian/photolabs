import React from "react";
// style
import "../styles/TopNavigationBar.scss";
import "../styles/TopicListItem.scss";
// components
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({ topics, isFavPhotoExist, showPhotosByTopic, loadPhotos }) => {
  return (
    <div className="top-nav-bar">
      <div className="top-nav-bar__left">
        <span className="top-nav-bar__logo" onClick={()=>loadPhotos()}>PhotoLabs</span>
      </div>

      <div className="top-nav-bar__right">
        {/* <span className="topic-list__item" on> All </span> */}
        <TopicList topics={topics}  showPhotosByTopic={(id)=>showPhotosByTopic(id)} />
        <FavBadge isFavPhotoExist={isFavPhotoExist} />
      </div>
    </div>
  );
};

export default TopNavigation;
