import React, { useEffect, useState } from "react";

// -----------------------------DATA IMPORT--------------------------------//

import photos from "./mocks/photos";
import topics from "./mocks/topics";

// ----------------------COMPONENTS/ROUTES IMPORT-------------------------//

import HomeRoute from "./components/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

// ----------------------------STYLES IMPORT-------------------------------//
import "./App.scss";

//////////////////////////////// APP ///////////////////////////////////////

const App = () => {
  //--------------------------- STATES-----------------------------------//

  //Favourite Photos
  const [favPhotos, setFavPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [newPhotos, setNewPhotos] = useState(photos);

  //Modal 
  const [modal, setModal] = useState({ isOpen: false });

  //------------------------ FUNCTIONS-------------------------------------//

  //Favourite Photos

  //fav notification - triggered if favPhotos is not empty for notification icon in top navigation bar
  const isFavPhotoExist = () => {
    return favPhotos.length > 0;
  };

  //passed down to PhotoFavButton to fill it if image is in favPhotos
  const isFavourite = (id) => {
    return favPhotos.some((photo) => photo.id === id);
  };

  //Modal

  //passed down to PhotoDetailsModal to close it
  const closeModal = () => {
    setModal((prevModal) => ({
      ...prevModal,
      isOpen: !prevModal.isOpen,
    }));
  };

  //Sets and records the clicked photo as current and selected photo and opens the modal
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

  //Favourites
  useEffect(() => {
    console.log(favPhotos); // Display favPhotos array whenever it changes
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

  //Render
  return (
    <div className="App">
      <HomeRoute
        photos={newPhotos}
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
        handleFavButtonClick={(id) => handleFavButtonClick(id)}
        handleOnImageClick={(id) => handleOnImageClick(id)}
        isFavourite={isFavourite}
      />
      {modal.isOpen && (
        <PhotoDetailsModal
        handleFavButtonClick={(id) => handleFavButtonClick(id)}
          selectedPhoto={selectedPhoto}
          getRelatedPhotos={getRelatedPhotos}
          handleOnImageClick={(id) => handleOnImageClick(id)}
          isFavourite={isFavourite}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default App;

//--------------------------------------------------------------------------//
