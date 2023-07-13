import React, { useCallback, useState } from "react";

import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

//toggle
function PhotoFavButton() {
  const  [selected, setSelected] = useState(false);
  const onClick = () => {
    console.log(selected);
 setSelected(!selected) }



  return (
    <div className="photo-list__fav-icon" onClick={onClick}>
      <div className="photo-list__fav-icon-svg">
        {/* refers to the favIcon.jsx properties */}
        <FavIcon height={30} width={20} fill={selected ? "#C80000":"#EEEEEE" }/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
