import React from 'react';
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import HomePage from './HomePage';
import SignInSignUpPage from '../SignInSignUpPage/SignInSignUpPage';


function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path= "/signin" component={SignInSignUpPage}/>
    </Switch>


   
    {/* <Slider slides={images}/> */}
    
    </>
  );
}

export default App;
