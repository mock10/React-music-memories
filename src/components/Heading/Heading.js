import React  from "react";
import "./Heading.scss";
import Button from "../Button/Button";
import {
    Link
  } from 'react-router-dom';


const Heading = () => {
    return (
    <div className="heading" >
        <h1>Odkryj niezwykłą muzyczną aplikację!</h1>
        <p>Stwórz swoją mapę koncertowych wspomnień.</p>
        <Link to="/signup">
            <Button text="Rozpocznij" type="animated" color="transparent"/>
        </Link>
     
    </div>
    );
}
export default Heading;
