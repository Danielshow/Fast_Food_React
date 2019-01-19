import React from 'react';
import { NavLink } from 'react-router-dom';

const sideDrawer = () => {
  return (
    <nav className='side-drawer'>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/order">Order</NavLink></li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
