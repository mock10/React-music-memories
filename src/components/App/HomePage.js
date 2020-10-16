import React from "react";
import Slider from "../Slider/Slider";
import images from "../../images/images";
import About from "../About/About";
import Heading from '../Heading/Heading';
import Footer from "../Footer/Footer";



const HomePage = () => {
    return (
        <>
        <Slider slides={images}/>
        <Heading/>
        <About/>
        <Footer/>
        </>
    )
}

export default HomePage