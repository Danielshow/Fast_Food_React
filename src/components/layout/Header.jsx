import React from 'react';
import Navbar from './Navbar';
import SignInLink from './SignOutLink';
import SignOutLink from './SignInLink';
/**
 * @function
 * @returns {JSX}- jsx
 *
 */
const Header = () => {
  const token = localStorage.getItem('token');
  return (
    <div>
      <Navbar />
      {
        !token || token==='null'? <SignOutLink /> : <SignInLink />
      }
    </div>
  );
};

export default Header;
