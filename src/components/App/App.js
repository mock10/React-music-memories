import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';
import "./App.scss";
import HomePage from './HomePage';
import SignInSignUpPage from '../SignInSignUpPage/SignInSignUpPage';
import Dashboard from "../Dashboard/Dashboard";
import { auth, createUserProfilDocument} from "../../Firebase/Firebase"
import NotFound from '../../NotFound/NotFound';
import "firebase/firestore";
import SignUp from "../SignUp/SignUp";
import Header from '../Header/Header';
import { setCurrentUser } from "../../redux/user/user.actions"




class App extends Component {
  
  unsubscribeFormAuth =  null;
  
  
  

  componentDidMount() {
    const { setCurrentUser } = this.props;
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
     setCurrentUser(userAuth);
 
    });
  }


  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }

  render() {
    return (
      
      <Router>
        <Header ></Header>
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path= "/signin"  render={() =>
              this.props.currentUser ? (
                <Redirect to='/dashboard' />
              ) : (
                <SignInSignUpPage />
              )
            }
          />
        <Route path= "/signup" component={SignUp}/>
        <Route exact path= "/dashboard" render={() =>
              !this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <Dashboard />
              )
            }
          />
          <Route path="/dashboard" component={Dashboard}/>

        <Route component={NotFound}/>
        </Switch>
      </Router> 
    );
  }
}



const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
