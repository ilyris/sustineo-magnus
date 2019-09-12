import React, {useState} from "react";
import './App.css';

// Imported Custom Components
import Navigation from "./Navigation";
import HomeSection from "./HomeSection";
import About from "./About";
import ProductInformation from './ProductInformation';

const App = () => {
  const aboutTitle = `Our Passion`;
  const productInformationTitle = 'Our Product';
  return(
    <div>
      <Navigation />
      <HomeSection />
      <ProductInformation title={productInformationTitle}/>
      <About title={aboutTitle} />

    </div>

 );
}

export default App;
