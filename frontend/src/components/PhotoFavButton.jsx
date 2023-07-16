import React from "react";

import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

//toggle
// function PhotoFavButton({selected}) {
function PhotoFavButton({
  selected,
  onClick,
  isFavourite,
  id
}) {
  return (
    // <div className="photo-list__fav-icon" onClick={onClick} selected={selected}>
    <div className="photo-list__fav-icon" onClick={onClick} >
      <div className="photo-list__fav-icon-svg">
        {/* refers to the favIcon.jsx properties */}
        <FavIcon
          height={30}
          width={20}
          fill={isFavourite(id) ? "#C80000" : "#EEEEEE"}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;
