import React, { useState, useEffect }  from "react";
import CarouselIndicator from "./SliderIndicator";
import Slide from "./Slide";
import "./Slider.scss"


const Slider = (props)=> {
    const [activeIndex, setActiveIndex]= useState(0);
  
    function goToSlide(index)  {
     setActiveIndex(index)
  }
 
    useEffect(() => {
        const interval = setInterval(() => {
        let slidesLength = props.slides.length;

        if (activeIndex === slidesLength-1) {
            setActiveIndex(0);
            return
        };

        setActiveIndex(activeIndex +1);
        }, 8000);
        
        return () => clearInterval(interval);
    }, [activeIndex, props.slides.length]);

    return (
      <div className="carousel">
          {props.slides.map((slide, index) =>
            <Slide
              key={index}
              index={index}
              activeIndex={activeIndex}
              slide={slide}
            />
          )}

        <ul className="carousel__indicators">
          {props.slides.map((slide, index) =>
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={activeIndex}
              isActive={activeIndex === index} 
              onClick={e => goToSlide(index)}
            />
          )}
        </ul>
      </div>
    );
  }

export default Slider;