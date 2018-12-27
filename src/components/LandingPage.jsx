import React from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import SignInLink from './layout/SignOutLink';
import SignOutLink from './layout/SignInLink';
import '../App.css';
import AboutUs from './layout/AboutUs';
import RecentFood from './layout/RecentFood';
import SucessStories from './layout/SuccessStories';
/**
 * @function
 * @returns {JSX}- jsx
 *
 */
const LandingPage = () => {
  return (
    <div className="container">
      <Navbar />
      <SignInLink />
      <SignOutLink />
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
