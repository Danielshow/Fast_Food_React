import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from 'react-router-dom';
import {
  isEmailValid,
  isPasswordValid,
  isPasswordAndConfirmPasswordEqual
} from '../../helpers/authHelpers';
import Toast from '../layout/Toast';

/**
 * @class
 * @description - SIgnInForm Component
 */
class signUpForm extends Component {
  /**
   * @constructor
   */
  constructor() {
    super();
    this.state = {
      password: '',
      email: '',
      emailError: false,
      localResponse: null,
      passwordError: false,
      confirmpassword: '',
      name: '',
      address: '',
      cpasswordError: false,
      warning: null,
    };
  }

  /**
   * @param {object} e
   * @returns {object} - state
   */
  handleChange = (e) => {
    const {
      password,
      confirmpassword
    } = this.state;
    if (e.target.id === 'email' && !isEmailValid(e.target.value)) {
      this.setState({
        emailError: true,
        [e.target.id]: e.target.value,
        localResponse: 'Invalid Email: Provide a valid email',
        warning: null
      });
    } else if (e.target.id === 'password' && !isPasswordValid(e.target.value)) {
      this.setState({
        passwordError: true,
        [e.target.id]: e.target.value,
        localResponse: 'Password length must be a minimum of six characters',
        warning: null
      });
    } else if (e.target.id === 'password' &&
      !isPasswordAndConfirmPasswordEqual(confirmpassword, e.target.value)) {
      this.setState({
        passwordError: true,
        [e.target.id]: e.target.value,
        localResponse: 'Password and confirm password not equal',
        warning: null
      });
    } else if (e.target.id === 'confirmpassword' &&
      !isPasswordAndConfirmPasswordEqual(password, e.target.value)) {
      this.setState({
        [e.target.id]: e.target.value,
        localResponse: 'Password and confirm password not equal',
        cpasswordError: true,
        warning: null
      });
    } else if (e.target.id === 'confirmpassword' && e.target.value.length > 5) {
      this.setState({
        [e.target.id]: e.target.value,
        localResponse: null,
        cpasswordError: false,
        warning: null,
        passwordError: false
      });
    } else if (e.target.id === 'password') {
      if (e.target.value === confirmpassword){
        this.setState({
          passwordError: false,
          cpasswordError: false,
          [e.target.id]: e.target.value,
          localResponse: null,
          warning: null
        });
      }
      this.setState({
        passwordError: false,
        [e.target.id]: e.target.value,
        localResponse: null,
        warning: null
      });
    } else if (e.target.id === 'email') {
      this.setState({
        emailError: false,
        [e.target.id]: e.target.value,
        localResponse: null,
        warning: null
      });
    } else {
      this.setState({
        [e.target.id]: e.target.value,
        localResponse: null,
        warning: null
      });
    }
  }
  /**
   * @param {object} e
   * @returns {object} - object
   */
  handleSubmit = async (e) => {
    const {
      emailError,
      passwordError,
      email,
      password,
      confirmpassword,
      address,
      name,
      cpasswordError
    } = this.state;
    e.preventDefault();
    if (emailError || passwordError || cpasswordError) {
      this.setState({
        warning: 'Some fields are Invalid'
      });
      return;
    }
    const {
      signUpUser,
    } = this.props;
    await signUpUser({
      email,
      password,
      confirmpassword,
      address,
      name
    });
  }
  /**
   * @returns {HTML}- JSX
   */
  render() {
    const {state: { password, email, emailError, confirmpassword,
      name, address, passwordError, localResponse, cpasswordError, warning},
      props: {error, response}} = this;
    let warningDisplay = null;
    if (warning) {
      warningDisplay = <Toast warning={warning} />;
    }
    return (
      <div className="form-container signupf">
        {warningDisplay}
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
            <label htmlFor="name">Name or Nickname</label>
            <br />
            <input
              type="text"
              id="name"
              value={name}
              onChange={this.handleChange}
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
              className={passwordError ? 'inValid' : 'valid'}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <br />
            <input
              type="password"
              id="confirmpassword"
              value={confirmpassword}
              onChange={this.handleChange}
              required
              className={cpasswordError? 'inValid': 'valid'}
            />
          </div>
          <div className="input-field">
            <label htmlFor="address">Address</label>
            <br />
            <input
              type="text"
              id="address"
              value={address}
              onChange={this.handleChange}
              required
            />
          </div>
          {error ===true? <p className="errorMessage">{response}</p>:null}
          <p className="errorMessage">{localResponse}</p>
          <div className="input-field">
            <button
              type="submit"
              id="submit"
              className="input-button"
            >
                Sign Up
            </button>
          </div>
        </form>
        <p className="create-account createSign">
          Already have an account?
          <span className="account">
            &nbsp;
            <Link to='/login'>Login</Link>
          </span>
        </p>
      </div>
    );
  }
}

signUpForm.propTypes = {
  error: PropTypes.bool,
  response: PropTypes.string,
  signUpUser: PropTypes.func
};

signUpForm.defaultProps = {
  response: 'response',
  error: false,
  signUpUser: () => {}
};


export default signUpForm;
