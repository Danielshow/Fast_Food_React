import React from 'react';
import { NavLink } from 'react-router-dom';

const SignInLink = () => (
  <div className="signin">
    <div className="signinlinks">
      <ul>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to="/login"><li>Login</li></NavLink>
        <NavLink to="/"><li>Order</li></NavLink>
      </ul>
    </div>
  </div>
);

export default SignInLink;
