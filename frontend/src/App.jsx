import React, { useEffect } from "react";

// --------------------------------STYLES IMPORT------------------------------//
import "./App.scss";

// ---------------------------------ROUTES IMPORT-------------------------//

import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

//-----------------------------------DATA IMPORT----------------------------//

import useApplicationData from "./hooks/useApplicationData";

//-----------------------------------TO DO-----------------------------------//
//todo close modal if clicked on background
//set modal image max width and height
//add All next to topic list
// favbadge click to show fav photos
//make modal bigger
//make close button spring
//dark mode

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
    loadPhotos,
    loadTopics,
    showPhotosByTopic,
    showFavPhotos,
    displayAllPhotos
  } = useApplicationData();

  //////////////////////////////////STATES//////////////////////////////////////

  const { favPhotos, selectedPhoto, appPhotos, appTopics, modal} = state;

  ///////////////////////////////////LOAD DATA//////////////////////////////////

  loadPhotos();
  loadTopics();

  ///////////////////////////////////LOGS///////////////////////////////////////
  // logFavPhotos();

  //////////////////////////////////Render//////////////////////////////////////
  return (
    <div className="App">
      <HomeRoute
        photos={appPhotos}
        topics={appTopics}
        isFavPhotoExist={isFavPhotoExist}
        handleFavButtonClick={(id) => handleFavButtonClick(id)}
        handleOnImageClick={(id) => handleOnImageClick(id)}
        isFavourite={isFavourite}
        showPhotosByTopic={(id) => showPhotosByTopic(id)}
        showFavPhotos = {showFavPhotos}
        displayAllPhotos = {displayAllPhotos}
      />
      {modal && (
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
