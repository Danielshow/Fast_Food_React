import React from 'react';
import { NavLink } from 'react-router-dom';

const SignOutLink = () => (
  <div className="signout">
    <div className="signoutlinks">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">Profile</NavLink></li>
        <li><NavLink to="/">Order</NavLink></li>
        <li>
          <a
            href="/"
            onClick={() => localStorage.setItem('token', null)}
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default SignOutLink;
