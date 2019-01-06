import React from 'react';
import { NavLink } from 'react-router-dom';
import SignInLink from './SignOutLink';
import SignOutLink from './SignInLink';

const Navbar = () => {
  const token = localStorage.getItem('token');
  return (
    <div className="navbar">
      <div className="brand">
        <NavLink to='/'>
          <h3> Fast Food</h3>
        </NavLink>
      </div>
      {
          !token || token==='null'? <SignOutLink /> : <SignInLink />
      }
    </div>
  );
};

export default Navbar;
