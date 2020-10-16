import React from "react";
import SignIn from "../SignIn/SignIn";
import "./SignInPage.scss";
import Logo from "../Logo/Logo";
import {
    Link
  } from 'react-router-dom';

const SignInPage = () => {
;

    return (
        <>
        <div className="sign-in">
            <Link to="/">
                <Logo color="#000000"/>
            </Link>
            <SignIn/>
            </div>
        </>
    );
}


export default SignInPage;