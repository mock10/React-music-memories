import React from 'react';
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import SignIn from "../SignIn/SignIn"
import Header from "../Header/Header";
import HomePage from './HomePage';


function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path= "/signin" component={SignIn}/>
    </Switch>


   
    {/* <Slider slides={images}/> */}
    
    </>
  );
}

export default App;
