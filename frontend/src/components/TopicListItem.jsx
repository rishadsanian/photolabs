import React, { useEffect } from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, slug, title, showPhotosByTopic }) => {
  const handleItemClick = () => {
    showPhotosByTopic(id);
  };

  return (
    <div key={id} className="topic-list__item" onClick={handleItemClick}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
