import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import SignInLink from './SignOutLink';
import SignOutLink from './SignInLink';
import DrawerToggleButton from './DrawerToggleButton';

const Navbar = ({sideDrawerEventClick}) => {
  const token = localStorage.getItem('token');
  return (
    <div className="navbar">
      <div>
        <DrawerToggleButton sideDrawerEventClick={sideDrawerEventClick} />
      </div>
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

Navbar.propTypes = {
  sideDrawerEventClick: PropTypes.func.isRequired
};
export default Navbar;
