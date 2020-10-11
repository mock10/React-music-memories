import React from "react";
import SignIn from "../SignIn/SignIn";
import "./SignInSignUpPage.scss";
import Logo from "../Logo/Logo";
import {
    Link
  } from 'react-router-dom';

const SignInSignUpPage = () => {
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


export default SignInSignUpPage;