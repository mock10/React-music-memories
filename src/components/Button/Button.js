import React from "react";
import "./Button.scss"



const Button = (props) => {
    const className =`btn btn--${props.color} btn--${props.type}`
return <button onClick={props.handleClick} className= {className}>{props.text}</button>
}


export default Button;