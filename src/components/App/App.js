import React from 'react';
import Header from "../Header/Header"
import "./App.scss"
import Slider from "../Slider/Slider"
import images from "../../images/images"
import Container from "../Container/Container"
import About from "../About/About"
import Button from "../Button/Button"
import Heading from '../Heading/Heading';

function App() {
  return (
    <>
    <Header/>
     
   
    <Slider slides={images}
  
    
    />

<Heading/>

      <About/>


   
    {/* <Slider slides={images}/> */}
    
    </>
  );
}

export default App;
