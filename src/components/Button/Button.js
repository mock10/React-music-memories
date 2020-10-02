import React from "react";
import "./Button.scss"

const Button = (props) => {
    return <button className= "btn btn-animated">{props.text}</button>
}


export default Button 