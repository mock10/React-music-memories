import React from "react";
import "./Header.scss";
import {
    Link
  } from 'react-router-dom';


const Header = () => {
    return ( 
    <>
    <header className="header">
        <div className="navbar">
            <img className="navbar__logo" alt=""></img>
            <nav>
                <ul>
                    <li><Link to="/signin">Zarejestruj się</Link></li>
                    <li><Link to="/signin">Zaloguj się</Link></li>
                </ul>
            </nav>
        </div>
    </header>
    </>
)
}

export default Header;