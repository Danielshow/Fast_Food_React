import React from 'react';
import facebook from '../../../images/icons/facebook.png';
import google from '../../../images/icons/google-plus.png';
import linkedIn from '../../../images/icons/linkedin.png';
import twitter from '../../../images/icons/twitter.png';

const Footer = () => (
  <div className="footer">
    <div className="address">
      <p>
        2B, Civic Center, Victoria Island, Lagos
        <br />
      Phone Number: 08096522832
        <br />
      Email: Danielshotonwa53@gmail.com
      </p>
    </div>
    <div className="list">
      <ul>
        <li><a href="#contact_us">About us</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="order-list.html">Order Page</a></li>
        <li><a href="/">Home</a></li>
      </ul>
    </div>
    <div className="socials">
      <a href="/"><img src={facebook} alt="Facebook" /></a>
      <a href="/"><img src={google} alt="Google" /></a>
      <a href="/"><img src={linkedIn} alt="LinkedIn" /></a>
      <a href="/"><img src={twitter} alt="Twitter" /></a>
    </div>
    <div className="copy">
      <p>&copy; 2018 Fast Food Fast Inc.</p>
    </div>
  </div>
);

export default Footer;
