import React  from "react";
import "./Heading.scss";
import Button from "../Button/Button"

const Heading = () => {
    return (
    <div className="heading" >
        <h1>Odkryj niezwykłą muzyczną aplikację!</h1>
        <p>Stwórz swoją mapę koncertowych wspomnień.</p>
        <Button text="Rozpocznij"/>
    </div>
    );
}


export default Heading;
