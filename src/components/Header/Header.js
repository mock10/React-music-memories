import React from "react";
import "./Header.scss";
import {
    Link
  } from 'react-router-dom';
import { auth } from "../../Firebase/Firebase"
import {logOut} from "../../Firebase/Firebase"


const Header = (props) => {
    return ( 
    <>
    <header className="header">
        <div className="navbar">
            <img className="navbar__logo" alt=""></img>
            <nav>
                <ul className= "navbar__options">
                    
                    {
                        props.currentUser? (
                        <li className= "navbar__element" onClick={logOut}>Wyloguj się</li> 
                        ) : (
                            <>
                                <li><Link to="/signup">Zarejestruj się</Link></li>
                                 <li><Link to="/signin">Zaloguj się</Link></li>
                            </>
                        )        
                    }
                </ul>
            </nav>
        </div>
    </header>
    </>
)
}

export default Header;