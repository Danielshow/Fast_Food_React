import React from 'react';
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
        <a href="./order-list.html">
          <button type="button" className="button1">Order Food</button>
        </a>
        <a href="#contact">
          <button type="button" className="button2">Contact Us</button>
        </a>
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
