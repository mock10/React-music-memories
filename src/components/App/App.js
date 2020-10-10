import React, { useEffect, useState } from 'react';
import {
  HashRouter,
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import "./App.scss";
import HomePage from './HomePage';
import SignInSignUpPage from '../SignInSignUpPage/SignInSignUpPage';
import { auth } from "../../Firebase/Firebase"
import NotFound from '../../NotFound/NotFound';


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
    <Router>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path= "/signin" component={SignInSignUpPage}/>
      <Route component={NotFound}/>
      </Switch>
    </Router>


   
    {/* <Slider slides={images}/> */}
    
    </>
  );
}

export default App;
