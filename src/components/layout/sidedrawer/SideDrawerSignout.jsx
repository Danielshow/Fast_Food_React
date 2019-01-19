import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const sideDrawer = () => {
  return (
    <nav className="side-drawer">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/order">Order</NavLink></li>
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
    </nav>
  );
};

export default sideDrawer;
