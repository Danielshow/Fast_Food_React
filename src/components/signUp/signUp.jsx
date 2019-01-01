import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from './signUpForm';
import Spinner from '../layout/Spinner';

const SignUp = (
  {loading, error, response, signUpUser, token}) => {
  return (
    <div className="signUpContainer">
      { loading===true? <Spinner />:null}
      <div className="signupForm">
        <div className="content">
          <h1>Fast Food</h1>
          <h3>
            Register to Order Quality Meals
            <br />
            Yummy!!!!! Yummy!!!!!!!!
          </h3>
          <SignUpForm
            error={error}
            response={response}
            signUpUser={signUpUser}
            token={token}
          />
        </div>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  response: PropTypes.string,
  signUpUser: PropTypes.func,
  token: PropTypes.string,
};

SignUp.defaultProps = {
  loading: false,
  signUpUser: () => {},
  response: 'response',
  error: false,
  token: 'token',
};
export default SignUp;
