import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const SignOutLink = () => (
  <div className="signout">
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/order">Order</NavLink></li>
        <li className="dropwelcome">
            Welcome ↓
          <ul className="dropdown">
            <li><NavLink to="/customer/order">My Order</NavLink></li>
            <li>
              <Link
                to="/"
                onClick={() => localStorage.clear()}
              >
                Logout
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
);

export default SignOutLink;
