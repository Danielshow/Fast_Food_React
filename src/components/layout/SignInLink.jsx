import React from 'react';
import { NavLink } from 'react-router-dom';

const SignInLink = () => (
  <div className="navList">
    <nav>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/">Order</NavLink></li>
      </ul>
    </nav>
  </div>
);

export default SignInLink;
