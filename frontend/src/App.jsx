import React, { useState, useEffect, useMemo } from "react";

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
  // const [photoId, setPhotoId] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [newPhotos, setNewPhotos] = useState(photos);

  //Modal - Passed down to PhotoListItem.jsx
  const [modal, setModal] = useState({
    isOpen: false,
    id: null,
    selected: false,
    photo: null,
  });

  // const [selected, setSelected] = useState(false);

  //------------------------ FUNCTIONS-------------------------------------//

  //Favourite Photos

  //fav notification - triggered if favPhotos is not empty for notification icon in top navigation bar
  const isFavPhotoExist = () => {
    return favPhotos.length > 0;
  };

  // const isFavourite = (id) => {
  //   return favPhotos.some((photo) => photo.id === id);
  // };

  //Modal
  const toggleModal = (id = undefined) => {
    if (id) {
      const photo = [...newPhotos].find((photo) => photo.id === id);
      setSelectedPhoto(photo);
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

  //Favourites
  const handleFavPhotoClick = (photo_id) => {
    const clonedPhotos = [...newPhotos];
    const selectedPhoto = updateSelectedPhoto(photo_id, clonedPhotos);
    selectedPhoto.selected = !selectedPhoto.selected;
    setSelectedPhoto(selectedPhoto);
    const favedPhotos = clonedPhotos.filter((photo) => !!photo.selected);
    setFavPhotos(favedPhotos);
    setNewPhotos(clonedPhotos);
  };

  function updateSelectedPhoto(photo_id, clonedPhotos) {
    let selectedPhoto = {};
    clonedPhotos.forEach((photo) => {
      if (photo.id === photo_id) {
        selectedPhoto = photo;
      }
    });
    return selectedPhoto;
  }

  return (
    <div className="App">
      <HomeRoute
        photos={newPhotos}
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
        handleOnClick={(id) => handleFavPhotoClick(id)}
        handleOnImageClick={(id) => toggleModal(id)}
        modal={modal}
        // selected={selected}
        // setSelected={setSelected}
      />
      {modal.isOpen && (
        <PhotoDetailsModal
          toggleModal={toggleModal}
          modal={modal}
          photo={modal.photo}
          filteredPhoto={selectedPhoto}
          getRelatedPhotos={getRelatedPhotos}
          photos={newPhotos}
          handleOnClick={(id) => handleFavPhotoClick(id)}
          handleOnImageClick={(id) => toggleModal(id)}
        />
      )}
    </div>
  );
};

export default App;

//--------------------------------------------------------------------------//
