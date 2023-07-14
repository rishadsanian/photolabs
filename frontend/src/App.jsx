import React, { useState } from "react";


// --------------------------DATA IMPORT-------------------------//

import photos from "./mocks/photos";
import topics from "./mocks/topics";

// ----------------------COMPONENTS/ROUTES IMPORT-------------------------//

import HomeRoute from "./components/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

// -------------------------STYLES IMPORT---------------------------//
import "./App.scss";

// ---------------------------- States-----------------------------------//

//  const [imageClicked, setImageClicked] = useState("");
 
  // const showModal = ()=> {
  //   return(
  //     isModalOpen
  //   ? <PhotoDetailsModal photos={photos} toggleModal={toggleModal}/>
  //   : ""
  //   )
  // }

// ---------------------------- APP-----------------------------------//

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    console.log('is modal open:',isModalOpen);
  }

  // const modalPayload 
  


  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} toggleModal={toggleModal} />
      {isModalOpen && <PhotoDetailsModal toggleModal={toggleModal} photos={photos} />}
    </div>
  );
};

export default App;
