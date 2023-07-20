import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  photo,
  handleFavButtonClick,
  handleOnImageClick,
  isFavourite,
  allPhotos,
}) => {
  //destructure photo into variables needed for rendering
  const id = photo.id;
  const imageSource = photo.urls.regular;
  const profile = photo.user.profile;
  const username = photo.user.username;
  const location = photo.location;

  //display one photo item
  return (
    <li className="photo-list__item">
      <PhotoFavButton
        onClick={() => handleFavButtonClick(id)}
        isFavourite={isFavourite}
        id={id}
      />
      <img
        src={imageSource}
        className="photo-list__image"
        onClick={() => {
          handleOnImageClick(id);
        }}
      />
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
