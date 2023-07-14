import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

export const FavBadge = ({ isFavPhotoExist }) => {
 let  displayAlert = isFavPhotoExist();
  return (
    <div className="fav-badge">
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
