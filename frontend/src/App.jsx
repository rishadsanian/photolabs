import React from "react";

// --------------------------------STYLES IMPORT------------------------------//
import "./App.scss";

// ---------------------------------ROUTES IMPORT-------------------------//

import HomeRoute from "./components/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

//====-----------------------------DATA IMPORT--------------------------------//

import useApplicationData from "./hooks/useApplicationData";

//-----------------------------------TO DO-----------------------------------//
//todo close modal if clicked on background
//set modal image max width and height

//////////////////////////////////// APP ///////////////////////////////////////

const App = () => {
  const {
    state,
    isFavPhotoExist,
    isFavourite,
    closeModal,
    handleOnImageClick,
    getRelatedPhotos,
    handleFavButtonClick,
    logFavPhotos,
  } = useApplicationData();

  //////////////////////////////////STATES//////////////////////////////////////

  const { favPhotos, selectedPhoto, newPhotos, appTopics, modal } = state;

  ///////////////////////////////////LOGS///////////////////////////////////////
  logFavPhotos();

  //////////////////////////////////Render//////////////////////////////////////
  return (
    <div className="App">
      <HomeRoute
        photos={newPhotos}
        topics={appTopics}
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

////////////////////////////////////////////////////////////////////////////////