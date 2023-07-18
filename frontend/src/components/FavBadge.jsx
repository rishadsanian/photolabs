import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

export const FavBadge = ({ isFavPhotoExist, showFavPhotos }) => {
  //display alert set to boolean result of the function
  let displayAlert = isFavPhotoExist();

  return (
    <div
      className="fav-badge"
      onClick={() => isFavPhotoExist() && showFavPhotos()}
    >
      <FavIcon
        width={25}
        height={25}
        fill="#C80000"
        displayAlert={displayAlert}
      />
    </div>
  );
};

export default FavBadge;
