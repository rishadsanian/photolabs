import React from "react";

// --------------------------DATA IMPORT-------------------------//

import photos from "./mocks/photos";
import topics from "./mocks/topics";

// ----------------------COMPONENTS IMPORT-------------------------//

import HomeRoute from "./components/HomeRoute";

// -------------------------STYLES IMPORT---------------------------//
import "./App.scss";

// ---------------------------- APP-----------------------------------//

// Note: Rendering a single component to build components in isolation
const App = () => (
  <div className="App">
    <HomeRoute topics={topics} photos={photos}/>
  </div>
);

export default App;
