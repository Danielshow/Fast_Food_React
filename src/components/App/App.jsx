import React from 'react';
import { Router, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import Header from '../layout/Header';
import SignIn from '../signIn/signInContainer';
import SignUp from '../signUp/signUpContainer';
import history from '../../helpers/history';
import '../../index.css';
/**
 * This Class use various imported Components and display on the webpage
 * @returns {string} - returns jsx
 */
const App  = () => {
  return (
    <Router history={history}>
      <div className="overallwrapper">
        <Header />
        <Route exact path='/' component={LandingPage} />
        <Route path='/login' component={SignIn} />
        <Route path='/signup' component={SignUp} />
      </div>
    </Router>
  );
};

export default App;
