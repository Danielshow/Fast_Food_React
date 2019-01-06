import React from 'react';
import { Router, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import SignIn from '../signIn/signInContainer';
import SignUp from '../signUp/signUpContainer';
import history from '../../helpers/history';
import Navbar from '../layout/Navbar';
import '../../index.css';
import orderHistory from '../orderHistory/orderHisoryContainer';
/**
 * This Class use various imported Components and display on the webpage
 * @returns {string} - returns jsx
 */
const App  = () => {
  return (
    <Router history={history}>
      <div className="overallwrapper">
        <Navbar />
        <Route exact path='/' component={LandingPage} />
        <Route path='/login' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/customer/order' component={orderHistory} />
      </div>
    </Router>
  );
};

export default App;
