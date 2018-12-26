import React from 'react';
import timely from '../../../images/image/undraw_Jogging_t14q.svg';
import calendar from '../../../images/image/undraw_empty_xct9.svg';
import cart from '../../../images/image/undraw_exploring_1l7f.svg';

const AboutUs = () => (
  <div className="about_us" id="contact_us">
    <h1>Fast Food Fast</h1>
    <hr />
    <p>
      Yummy Yummy, We are Fast Food Fast, Your onetime online food
      delivery platform, We are committed to supplying you quality meals.
      Dont Worry about cooking,
      We will take care of that, We are really Good at it
    </p>

    <div className="disgrid">
      <div className="timly">
        <img src={timely} alt="Timely" className="logo1" />
        <h3>Timeliness</h3>
        <p>
          We are Timely, You are only 30 minutes away to Super Delicious and
          Healthy meals delivered to your Doorstep. Try us out,
          you wont be disapointed
        </p>
      </div>

      <div className="timly">
        <img src={calendar} alt="calendar" className="logo1" />
        <h3>Date Opened</h3>
        <p>
          We are here always because of you, We love you so much and want
          to supply quality meals. Dial us anytime, We will get there
        </p>
      </div>

      <div className="timly">
        <img src={cart} alt="Cart" className="logo1" />
        <h3>Order</h3>
        <p>
          Do you know you can order anything? We dont hinder creativity,
          so take your time and order what you like. We will supply
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
