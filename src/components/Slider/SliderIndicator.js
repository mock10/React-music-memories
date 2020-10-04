import React from "react";
import "./Slider.scss";

const SliderIndicator = (props) => {
  return (
    <>
      <li>
        <a
          className={
            props.index == props.activeIndex
              ? "carousel__indicator carousel__indicator--active"
              : "carousel__indicator"
          }
          onClick={props.onClick}
        />
      </li>
      <img src={props.slide} className="carousel__img"></img>
    </>
  );
};

export default SliderIndicator;
