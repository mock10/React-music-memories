import React from "react";
import SignIn from "../SignIn/SignIn";
import "./SignInSignUpPage.scss";
import Logo from "../Logo/Logo"

const SignInSignUpPage = () => {
    return (
        <>
        <div className="sign-in">
        <Logo color="#000000"/>
            <SignIn/>
            </div>
        </>
    );
}


export default SignInSignUpPage;