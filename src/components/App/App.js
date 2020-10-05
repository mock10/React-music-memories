import React from 'react';
import Header from "../Header/Header"
import "./App.scss"
import Slider from "../Slider/Slider"
import images from "../../images/images"
import About from "../About/About"
import Heading from '../Heading/Heading';
import Footer from "../Footer/Footer"

function App() {
  return (
    <>
    <Header/>
     
   
    <Slider slides={images}/>
    <Heading/>
    <About/>
    <Footer/>


   
    {/* <Slider slides={images}/> */}
    
    </>
  );
}

export default App;
