import React from "react";
import { connect } from 'react-redux';
import "./Header.scss";
import {
    Link
  } from 'react-router-dom';
import {logOut} from "../../Firebase/Firebase"


const Header = ({currentUser}) => {
    return ( 
    <>
    <header className="header">
        <div className="navbar">
            <img className= "navbar__logo" alt=""></img>
            <nav>
                <ul className= "navbar__options">              
                    {
                        currentUser? (
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

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
  });
  
  export default connect(mapStateToProps)(Header);