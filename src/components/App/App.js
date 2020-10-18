import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  
} from 'react-router-dom';
import "./App.scss";
import HomePage from '../HomePage/HomePage';
import SignInPage from '../SignInSignUpPage/SignInPage';
import Dashboard from "../Dashboard/Dashboard";
import {firestore} from "../../Firebase/Firebase"
import NotFound from '../../NotFound/NotFound';
import "firebase/firestore";
import SignUp from "../SignUp/SignUp";
import Header from '../Header/Header';




class App extends Component {
 state = {
      currentUser: null,
    };

  unsubscribeFormAuth =  null;
  
  

  componentDidMount() {
    const user = localStorage.getItem("uid")
    if(user){
      firestore.collection(`users`).doc(`${user}`).get().then((document)=>{
        this.setState({
          currentUser:document.data()
        })
      });
    }


  }

  componentWillUnmount() {
    
  }

  render() {
    return (
      
      <Router>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path= "/signin" component={SignInPage}/>
          <Route path= "/signup" component={SignUp}/>
          <Route path= "/dashboard" component={Dashboard} ></Route>
          <Route component={NotFound}/>
        </Switch>
      </Router> 
    );
  }
}



export default App;
