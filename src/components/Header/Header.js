import React from "react";
import "./Header.scss"


const Header = () => {
    return ( 
    <>
    <header className="header">
        <div className="navbar">
            <img className="navbar__logo" alt=""></img>
            <nav>
                <ul>
                    <li><a href="#register">Zarejestruj się</a></li>
                    <li><a href="#login">Zaloguj się</a></li>
                </ul>
            </nav>
        </div>
    </header>
    </>
)
}

export default Header;