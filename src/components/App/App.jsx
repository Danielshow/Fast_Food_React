import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import Header from '../layout/Header';
import SignIn from '../signIn/signInContainer';
import '../../index.css';
/**
 * This Class use various imported Components and display on the webpage
 * @returns {string} - returns jsx
 */
const App  = () => {
  return (
    <BrowserRouter>
      <div className="overallwrapper">
        <Header />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/login' component={SignIn} />
      </div>
    </BrowserRouter>
  );
};

export default App;
