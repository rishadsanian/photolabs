import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, handleFavs }) => {
  //destructure photo into variables needed for rendering
  const id = photo.id;
  const imageSource = photo.urls.regular;
  const profile = photo.user.profile;
  const username = photo.user.username;
  const location = photo.location;

  //State for selecting/unselecting fav button
  const [selected, setSelected] = useState(false);
  const onClick = () => {
    setSelected(!selected);
    handleFavs(photo, selected);
  };

  //display one photo item
  return (
    <li key={id} className="photo-list__item">
      <PhotoFavButton selected={selected} onClick={onClick} />
      <img src={imageSource} className="photo-list__image"></img>
      <footer className="photo-list__footer">
        <img src={profile} className="photo-list__user-profile" />
        <section className="photo-list__user-details">
          <p className="photo-list__user-info">{username}</p>
          <p className="photo-list__user-location ">
            {location.city}, {location.country}
          </p>
        </section>
      </footer>
    </li>
  );
};

export default PhotoListItem;
