import React from "react";

import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";
import PhotoList from "./components/PhotoList";

// const photos = [];


// Note: Rendering a single component to build components in isolation
const App = () => <div className="App">
  {/* <ul className="photo-list">{photos}
  </ul> */}

  <PhotoList/>
  </div>

export default App;
