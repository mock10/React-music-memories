import React from "react";
import "./Slider.scss";

const SliderIndicator = (props) => {
  return (
    <>
      <div>
        <li
          className={
            props.index === props.activeIndex
              ? "carousel__indicator carousel__indicator--active"
              : "carousel__indicator"
          }
          onClick={props.onClick}
        />
      </div>
      <img src={props.slide} className="carousel__img" alt=""></img>
    </>
  );
};

export default SliderIndicator;
