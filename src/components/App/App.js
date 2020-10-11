import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import "./App.scss";
import HomePage from './HomePage';
import SignInSignUpPage from '../SignInSignUpPage/SignInSignUpPage';
import Dashboard from "../Dashboard/Dashboard";
import { auth, createUserProfilDocument} from "../../Firebase/Firebase"
import NotFound from '../../NotFound/NotFound';
import "firebase/firestore";


class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }
  unsubscribeFormAuth =  null;
  

  componentDidMount() {
    this.unsubscribeFormAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfilDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          },
          () => {
            console.log(this.state);
          }

          )
        });

     }
     this.setState({currentUser: userAuth});
 
    });
  }

  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }

  render() {
    return (
      <>
      <Router>
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path= "/signin" component={SignInSignUpPage}/>
        <Route path= "/dashboard" component={Dashboard}/>
        <Route component={NotFound}/>
        </Switch>
      </Router>
  
  
     
      {/* <Slider slides={images}/> */}
      
      </>
    );
  }
}



export default App;
