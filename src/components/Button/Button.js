import React from "react";
import "./Button.scss"

const Button = ({color, type, text, handleClick, children, ...otherProps}) => {
    const className =`btn btn--${color} btn--${type}`
return (
    <button onClick={handleClick} className= {className} {...otherProps}>
        {text}
        {children}
    </button>
    )
}

export default Button;