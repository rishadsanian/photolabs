import React, { useEffect, useState } from "react";

// -----------------------------DATA IMPORT--------------------------------//

import photos from "../mocks/photos";
import topics from "../mocks/topics";

const useApplicationData = () => {
  //--------------------------- STATES-----------------------------------//

  //Favourite Photos
  const [favPhotos, setFavPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [newPhotos, setNewPhotos] = useState(photos);
  const [appTopics, setTopics] = useState(topics);
  const [modal, setModal] = useState({ isOpen: false });

  const state = { favPhotos, selectedPhoto, newPhotos, appTopics, modal };

  //------------------------ FUNCTIONS-------------------------------------//

  /////////////////////////Favourite Photos functions///////////////////////
 //main state : favPhotos
  //fav notification - triggered if favPhotos is not empty for notification icon in top navigation bar - used in FavBadge (can stay in favbadge?)
  const isFavPhotoExist = () => {
    return favPhotos.length > 0;
  };

  //passed down to PhotoFavButton to fill it if image is in favPhotos (can stay there?)
  const isFavourite = (id) => {
    return favPhotos.some((photo) => photo.id === id);
  };

// Display favPhotos array whenever it changes (can stay on app.jsx)
  const logFavPhotos = () =>
    useEffect(() => {
      console.log(favPhotos); 
    }, [favPhotos]);

  //When FavButton is clicked on a photo- photo object is saved to fav photos if not already saved, unsaves it if it is already saved
  const handleFavButtonClick = (photoId) => {
    setFavPhotos((prevFavPhotos) => {
      const isPhotoFavourite = isFavourite(photoId);
      if (isPhotoFavourite) {
        return prevFavPhotos.filter((photo) => photo.id !== photoId);
      } else {
        const selectedPhoto = newPhotos.find((photo) => photo.id === photoId);
        return selectedPhoto
          ? [...prevFavPhotos, selectedPhoto]
          : prevFavPhotos;
      }
    });
  };

  ///////////////////////////////Modal/////////////////////////////////////

  //passed down to PhotoDetailsModal to close it
  //Gets related photos of selected photo
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

  const closeModal = () => {
    setModal((prevModal) => ({
      ...prevModal,
      isOpen: !prevModal.isOpen,
    }));
  };
  
  // opens the modal when photo is clicked  and sets photo current selected photo 
  const handleOnImageClick = (id) => {
    if (id) {
      const photo = [...newPhotos].find((photo) => photo.id === id);
      setSelectedPhoto(photo);
    }
    setModal((prevModal) => ({
      ...prevModal,
      isOpen: true,
    }));
  };

//----------------------------------------------------------------------------//

  return {
    state,
    logFavPhotos,
    isFavPhotoExist,
    isFavourite,
    closeModal,
    handleOnImageClick,
    getRelatedPhotos,
    handleFavButtonClick,
  };
};

export default useApplicationData;
// const useApplicationData = () => {
//   //Setting up favourite photos array
//   function favPhotoReducer(state, action) {
//     switch (action.type) {
//       case "TOGGLE":
//         if (!state.includes(action.id)) {
//           return [...state, action.id];
//         }
//         return state.filter(i => i !== action.id);
//       default:
//         return state;
//     }
//   }

//   const [favPhotos, toggleFavourite] = useReducer(favPhotoReducer, []);

//   // Setting up the photo that we have clicked on
//   function clickedPhotoReducer(state, action) {
//     switch (action.type) {
//       case "ADD":
//         state = action.info
//         return state;
//       case "REMOVE":
//         state = null;
//         return state;
//       default:
//         return state;
//     }
//   }

//   const [clickedPhoto, clickPhoto] = useReducer(clickedPhotoReducer, null);

//   // Setting up state and returning necessary values
//   return {
//     state: { favPhotos: favPhotos, clickedPhoto: clickedPhoto },
//     toggleFavourite,
//     clickPhoto
//   }
// }
