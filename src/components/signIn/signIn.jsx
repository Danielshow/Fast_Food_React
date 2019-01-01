import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import SignInForm from './signInForm';
/**
 * @param {*} param
 * @returns {JSX} - Display Component
 */
const signIn = (
  {loading, error, response, authSignInUser, token, authClearResponse}) => {
  token? localStorage.setItem('token', token): null;
  return (
    <div className="signinContainer">
      { loading===true? <Spinner />:null}
      <div className="signinForm">
        <div className="content">
          <h1>Fast Food</h1>
          <h3>
            Welcome to Fast Food
            <br />
            Food Delivery Platform
          </h3>
        </div>
        <SignInForm
          error={error}
          response={response}
          authSignInUser={authSignInUser}
          token={token}
          authClearResponse={authClearResponse}
        />
      </div>
    </div>
  );
};

signIn.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  response: PropTypes.string,
  authSignInUser: PropTypes.func,
  token: PropTypes.string,
  authClearResponse: PropTypes.func
};

signIn.defaultProps = {
  loading: false,
  authSignInUser: () => {},
  response: 'response',
  error: false,
  token: 'token',
  authClearResponse: () => {}
};

export default signIn;
