import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import HomePage from './HomePage';
import SignInSignUpPage from '../SignInSignUpPage/SignInSignUpPage';
import { auth } from "../../Firebase/Firebase"


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  let unsubscribeFormAuth =  null;

useEffect(()=> {

  unsubscribeFormAuth = auth.onAuthStateChanged(user=>{
    setCurrentUser(user);
    console.log(user)
  } );
  return () => {
    unsubscribeFormAuth();
  }
},[]);

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
