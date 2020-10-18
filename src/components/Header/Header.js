import React from "react";
import "./Header.scss";
import {
    Link
  } from 'react-router-dom';
import {logOut} from "../../Firebase/Firebase"


const Header = ({currentUser}) => {
    
    const handleLogout = ()=>{
        window.location = "/";
        logOut();
    }
    return ( 
    <>
    <header className="header">
        <div className="navbar">
            <img className= "navbar__logo" alt=""></img>
            <nav>
                <ul className= "navbar__options">              
                    {
                        currentUser? (
        
                        <>
                            <li><Link to="/dashboard">{currentUser&&currentUser.displayName.split(' ')[0]}</Link></li>
                            {/* <li className= "navbar__element" onClick={logOut}>Wyloguj się</li> */}
                            <li onClick={handleLogout} ><Link to="/"> Wyloguj się</Link></li> 
                        </>
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