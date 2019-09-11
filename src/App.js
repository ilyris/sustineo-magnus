import React, {useState} from "react";
import './App.css';

// Imported Custom Components
import Navigation from "./Navigation";
import HomeSection from "./HomeSection";
import About from "./About";

const App = () => {
  return(
    <div>
      <Navigation />
      <HomeSection />
      <About />
    </div>

 );
}

export default App;
