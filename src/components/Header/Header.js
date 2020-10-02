import React from "react";
import Button from "../Button/Button"
import "./Header.scss"


const Header = () => {
    return ( 
    <>
    <header className="header">
        <div className="navbar">
            <img className="navbar__logo"></img>
            <nav>
                <ul>
                    <li><a href="#register">Zarejestruj się</a></li>
                    <li><a href="#login">Zaloguj się</a></li>
                </ul>
            </nav>
        </div>
        <div className="content">
            <h1>Odkryj niezwykłą muzyczną aplikację</h1>
            <p>Stwórz swoją mapę koncertowych wspomnień.</p>
            <Button text="Rozpocznij"/>
        </div>
    </header>
    </>
)
}

export default Header;