import React from 'react';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';
import RecentFood from './RecentFood';
import SucessStories from './SuccessStories';
import Footer from '../layout/Footer';
/**
 * @function
 * @returns {JSX}- jsx
 *
 */
const LandingPage = () => {
  return (
    <div className="container">
      <div className="hero2">
        <h1>
          Why Eat Junks?
          <br />
        We Deliver Healthy Meals
          <br />
        We got you covered!!
        </h1>
        <Link to="/order">
          <button type="button" className="button1">Order Food</button>
        </Link>
      </div>
      <div className="wrapper">
        <AboutUs />
        <RecentFood />
        <SucessStories />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
