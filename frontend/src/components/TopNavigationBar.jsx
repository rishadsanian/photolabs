import React from "react";
// style
import "../styles/TopNavigationBar.scss";
// components
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <div className="top-nav-bar__left">
        <span className="top-nav-bar__logo">PhotoLabs</span>
      </div>

      <div className="top-nav-bar__right">
        <TopicList topics={props.topics} />
        <FavBadge />
      </div>
    </div>
  );
};

export default TopNavigation;
