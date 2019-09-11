import React, {useState} from "react";
import './App.css';

// Imported Custom Components
import Navigation from "./Navigation";
import HomeSection from "./HomeSection";

const App = () => {
  return(
    <div>
      <Navigation />
      <HomeSection />
    </div>

 );
}

export default App;
