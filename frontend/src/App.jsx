import React, { useState } from "react";

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

  //fav notification - triggered if favPhotos is not empty for notification icon in top navigation bar
  const isFavPhotoExist = () => {
    return favPhotos.length > 0;
  };

  //add or remove from favourites function which will be performed on click based on selected status to be passed down photolist->photoitem
  const handleFavs = (photo, selected) => {
    !selected
      ? setFavPhotos([...favPhotos, photo]) //if not already on list add to list
      : setFavPhotos(favPhotos.filter((favPhoto) => favPhoto.id !== photo.id)); //if already on list, remove from list
  };

  const isFavourite = (id) => {
    return favPhotos.some(photo => photo.id === id);
  };
 
  // const [selected, setSelected] = useState((false));
  // const onClick = () => {
  //   setSelected(!selected);
  //   handleFavs(photo, selected);
  // };
  //---------------------------------------------------------------------------

  //Modal
  const toggleModal = () => {
    setModal((prevModal) => ({
      ...prevModal,
      isOpen: !prevModal.isOpen,
    }));

    // console.log("is modal open:", modal.isOpen);
    // console.log(modal);
  };


  const handlePhotoClick = (id, selected, photo) => {
   if (!modal.isOpen) {toggleModal()};
    setModal((prev) => ({
      ...prev,
      id: id,
      selected: selected,
      photo: photo,
    }));
  };
  
  console.log('modal.photo: ',modal.photo);
  const getRelatedPhotos = () => {
    const relatedPhotos = [];
    for (let photoKey in modal.photo.similar_photos) {
      const photo = modal.photo.similar_photos[photoKey];
      relatedPhotos.push(photo);
  }
  // console.log('related photos: ', relatedPhotos);
  return relatedPhotos;
};
// -------------------------- logs-------------------------------------//
  console.log("Favourite Photos:", favPhotos);
  // console.log("modal", modal);

  // -------------------------- Render-------------------------------------//

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        isFavPhotoExist={isFavPhotoExist}
        handleFavs={handleFavs}
        handlePhotoClick={handlePhotoClick}
        // onClick={onClick}
        selected={selected}
        setSelected={setSelected}
        // favPhotos={favPhotos}
        isFavourite={isFavourite}
        />
      {modal.isOpen && (
        <PhotoDetailsModal
          toggleModal={toggleModal}
          modal={modal}
          photo={modal.photo}
          handleFavs={handleFavs}
          // onClick={onClick}
          // selected={selected}
          // favPhotos={favPhotos}
          isFavourite={isFavourite}
          handlePhotoClick={handlePhotoClick}
          getRelatedPhotos={getRelatedPhotos}
          photos={photos}
        />
      )}
    </div>
  );
};

export default App;

//--------------------------------------------------------------------------//
