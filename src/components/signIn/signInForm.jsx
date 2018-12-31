import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmailValid } from '../../helpers/authHelpers';

/**
 * @class
 * @description - SIgnInForm Component
 */
class signInForm extends Component {
    /**
   * @constructor
   */
  constructor(){
    super();
    this.state = {
      password: '',
      email: '',
      emailError: false,
    };
  }

    /**
   * @param {object} e
   * @returns {object} - state
   */
  handleChange = (e) => {
    const { props: {authClearResponse} } = this;
    authClearResponse();
    if (e.target.id === 'email' && !isEmailValid(e.target.value)){
      this.setState({
        emailError: true,
        [e.target.id]: e.target.value,
      });

    }else {
      this.setState({
        emailError: false,
        [e.target.id]: e.target.value,
    });
    }
  }
   /**
   * @param {object} e
   * @returns {object} - object
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const { props: {authSignInUser} } = this;
    authSignInUser(this.state);
    this.setState({
      password: '',
    });
  }
   /**
   * @returns {HTML}- JSX
   */
  render() {
    const {state: {password, email, emailError},
      props: {error, response}} = this;
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={this.handleChange}
              className={emailError ? 'inValid' : 'valid'}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={this.handleChange}
              required
            />
          </div>
          {error===true? <p className="errorMessage">{response}</p>:null}
          <div className="input-field">
            <button
              type="submit"
              className="input-button"
              disabled={emailError?true:false}
            >
                Sign In
            </button>
          </div>
        </form>
        <p className="create-account">
          New Foodie?
          <span className="account">
            &nbsp; Create Account
          </span>
        </p>
      </div>
    );
  }
}

signInForm.propTypes = {
  error: PropTypes.bool,
  response: PropTypes.string,
  authSignInUser: PropTypes.func,
  authClearResponse: PropTypes.func
};

signInForm.defaultProps = {
  authSignInUser: () => {},
  response: 'response',
  error: false,
  authClearResponse: () => {}
};


export default signInForm;
