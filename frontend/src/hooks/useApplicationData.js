import React, { useEffect, useState } from "react";

// -----------------------------DATA IMPORT--------------------------------//

import photos from "../mocks/photos";
import topics from "../mocks/topics";

const useApplicationData = () => {
  //--------------------------- STATES-----------------------------------//

  //Favourite Photos
  const [favPhotos, setFavPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [appPhotos, setappPhotos] = useState(photos);
  const [appTopics, setTopics] = useState(topics);
  const [modal, setModal] = useState(false);

  const state = { favPhotos, selectedPhoto, appPhotos, appTopics, modal };

  //------------------------ FUNCTIONS-------------------------------------//

  /////////////////////////Favourite Photos functions///////////////////////
  //main state : favPhotos
  //checks if there are any photos in favPhotos. used for fav notification - triggered if favPhotos is not empty for notification icon in top navigation bar - used in FavBadge component
  const isFavPhotoExist = () => {
    return favPhotos.length > 0;
  };

  //checks if a photo is in favPhotos based on the photo id. passed down to PhotoFavButton to fill it if image is in favPhotos
  const isFavourite = (id) => {
    return favPhotos.some((photo) => photo.id === id);
  };

  // logs favPhotos state. Display favPhotos array whenever it changes (can stay on app.jsx)
  const logFavPhotos = () =>
    useEffect(() => {
      console.log(favPhotos);
    }, [favPhotos]);

    //When FavButton is clicked on a photo- photo object is saved to fav photos if not already saved, unsaves it if it is already saved
    
    const addPhotoToFavorites = (photoId) => {
      const selectedPhoto = appPhotos.find((photo) => photo.id === photoId);
      setFavPhotos((prevFavPhotos) => [...prevFavPhotos, selectedPhoto]);
    };
    
    const removePhotoFromFavorites = (photoId) => {
      setFavPhotos((prevFavPhotos) =>
      prevFavPhotos.filter((photo) => photo.id !== photoId)
      );
  };

  const handleFavButtonClick = (photoId) => {
    isFavourite(photoId)
      ? removePhotoFromFavorites(photoId)
      : addPhotoToFavorites(photoId);
  };

  ///////////////////////////////Modal/////////////////////////////////////

  //Gets related photos of selected photo. passed into photolist in related photos section in the photodetails modal
  const getRelatedPhotos = () => {
    const relatedPhotos = [];
    if (selectedPhoto) {
      for (let photo in selectedPhoto.similar_photos) {
        relatedPhotos.push(selectedPhoto.similar_photos[photo]);
      }
    }
    return relatedPhotos;
  };

  //closes modal (used in photodetails Modal section)
  const closeModal = () => {
    setModal(false);
  };

  // opens the modal when photo is clicked  and sets photo current selected photo used on photolist image items
  const handleOnImageClick = (id) => {
    if (id) {
      const photo = [...appPhotos].find((photo) => photo.id === id);
      setSelectedPhoto(photo);
    }
    setModal(true);
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
