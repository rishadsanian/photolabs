import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, slug, title }) => {
  return (
    <div key={id} className="topic-list__item">
      <span>{title}</span>
    </div>
  );
};


export default TopicListItem;
