import React from "react";
import "./Slider.scss";

const Slide = (props)=>{
    return (
      <div
        className={
          props.index == props.activeIndex
            ? "carousel__slide carousel__slide--active"
            : "carousel__slide"
        }
      >
        <img className= "carousel__img" src= {props.slide}></img>
      </div>
    );
}

export default Slide;