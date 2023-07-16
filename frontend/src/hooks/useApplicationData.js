import React, { useState, useEffect, useMemo } from "react";

// -----------------------------DATA IMPORT--------------------------------//

import photos from "./mocks/photos";
import topics from "./mocks/topics";

// ----------------------COMPONENTS/ROUTES IMPORT---------------------------//

import HomeRoute from "./components/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

// --------------------------STYLES IMPORT------------------------------------//
import "./App.scss";

//-----------------------------Favphotos--------------------------------------//
const [favPhotos, setFavPhotos] = useState([]);

//fav notification - triggered if favPhotos is not empty for notification icon in top navigation bar
const isFavPhotoExist = () => {
  return favPhotos.length > 0;
};


const handleFavButtonClick = (photo_id) => {
  const clonedPhotos = [...newPhotos];
  const selectedPhoto = updateSelectedPhoto(photo_id, clonedPhotos);
  selectedPhoto.selected = !selectedPhoto.selected;
  setSelectedPhoto(selectedPhoto);
  const favedPhotos = clonedPhotos.filter((photo) => !!photo.selected)
  setFavPhotos(favedPhotos)
  setNewPhotos(clonedPhotos);
};




const useApplicationData = () => {
  //Setting up favourite photos array
  function favPhotoReducer(state, action) {
    switch (action.type) {
      case "TOGGLE":
        if (!state.includes(action.id)) {
          return [...state, action.id];
        }
        return state.filter(i => i !== action.id);
      default:
        return state;
    }
  }


  const [favPhotos, toggleFavourite] = useReducer(favPhotoReducer, []);

  // Setting up the photo that we have clicked on
  function clickedPhotoReducer(state, action) {
    switch (action.type) {
      case "ADD":
        state = action.info
        return state;
      case "REMOVE":
        state = null;
        return state;
      default:
        return state;
    }
  }

  const [clickedPhoto, clickPhoto] = useReducer(clickedPhotoReducer, null);

  // Setting up state and returning necessary values
  return {
    state: { favPhotos: favPhotos, clickedPhoto: clickedPhoto },
    toggleFavourite,
    clickPhoto
  }
}
//////////////////////////////// APP ///////////////////////////////////////

// export default function Application(props) {
//   const {
//     state,
//     onPhotoSelect,
//     updateToFavPhotoIds,
//     onLoadTopic,
//     onClosePhotoDetailsModal,
//   } = useApplicationData();

//   return (
//     // React components
//   );
// }
  //--------------------------- STATES-----------------------------------//

  //Favourite Photos

  // const state = [ 
  const [photoId, setPhotoId] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [newPhotos, setNewPhotos] = useState(photos);
// ]
  //Modal - Passed down to PhotoListItem.jsx
  const [modal, setModal] = useState({
    isOpen: false,
    id: null,
    selected: false,
    photo: null,
  });

  const [selected, setSelected] = useState(false);

  //------------------------ FUNCTIONS-------------------------------------//

  //Favourite Photos


  // const isFavourite = (id) => {
  //   return favPhotos.some((photo) => photo.id === id);
  // };

  //Modal
  const toggleModal = (id = undefined) => {
    if (id) {
      const photo = [...newPhotos].find(photo => photo.id === id)
      setSelectedPhoto(photo)
    }
    setModal((prevModal) => ({
      ...prevModal,
      isOpen: !prevModal.isOpen,
    }));
  };
  const getRelatedPhotos = () => {
    const relatedPhotos = [];
    if (Object.keys(selectedPhoto).length > 0) {
      for (let photoKey in selectedPhoto.similar_photos) {
        const photo = selectedPhoto.similar_photos[photoKey];
        relatedPhotos.push(photo);
      }
    }
    return relatedPhotos;
  };



  function updateSelectedPhoto(photo_id, clonedPhotos) {
    let selectedPhoto = {}
    clonedPhotos.forEach((photo) => {
      if (photo.id === photo_id) {
        selectedPhoto = photo
      }
    });
    return selectedPhoto
  }
