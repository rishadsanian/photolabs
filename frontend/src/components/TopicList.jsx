import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics }) => {
  //Make an array
  const topicItems = topics.map((topic) => (
    <TopicListItem
      key={topic.id}
      id={topic.id}
      slug={topic.slug}
      title={topic.title}
    />
  ));

  //display the array
  return <div className="top-nav-bar__topic-list">{topicItems}</div>;
};

export default TopicList;
