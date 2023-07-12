import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ id, imageSource, profile, username, location }) => {
  // const { id, imageSource, profile, username, location } = props;
  // const photoItem = {id: {id, imageSource, profile, username, location}}

  return (
    <li key={id} className="photo-list__item">
      <img src={imageSource} className="photo-list__image" />
      <footer>
        <img src={profile} />
        <section className="photo-list__user-profile">
          <p className="photo-list__user-info">{username}</p>
          <p className="photo-list__user-location ">
            {location.city}, {location.country}
          </p>
        </section>
      </footer>
    </li>
  );
};

PhotoListItem.defaultProps = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

export default PhotoListItem;
