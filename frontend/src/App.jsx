import React from "react";

// ----------------------COMPONENTS IMPORT-------------------------//

// import PhotoListItem from "./components/PhotoListItem";
// import TopicListItem from  "./components/TopicListItem"
// import TopicList from "./components/TopicList";
// import PhotoList from "./components/PhotoList";
// import TopNavigation from "./components/TopNavigationBar";
import HomeRoute from "./components/HomeRoute";

// -------------------------STYLES IMPORT---------------------------//
import "./App.scss";

// ---------------------------- APP-----------------------------------//

// Note: Rendering a single component to build components in isolation
const App = () => (
  <div className="App">
    <HomeRoute />
  </div>
);

export default App;
