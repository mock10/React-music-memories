import React from "react";
import "./Logo.scss"

const Logo = (props) => {
    const logoStyle ={color: `${props.color}`}
    return (
        <h2 className= "main-logo" style={logoStyle}>Mume</h2>
    );
}


export default Logo;