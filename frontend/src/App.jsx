import React from "react";

import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";
import PhotoList from "./components/PhotoList";

const photos = [];

for (let i = 0; i < 3; i++) {
  photos.push(<PhotoListItem key={i} />);
}

// Note: Rendering a single component to build components in isolation
const App = () => <div className="App">
  <ul className="photo-list">{photos}
  </ul>
  </div>

export default App;
