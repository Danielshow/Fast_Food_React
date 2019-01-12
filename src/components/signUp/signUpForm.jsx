import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from 'react-router-dom';
import Toast from '../layout/Toast';
import validate from '../../helpers/validation';
import { isPasswordAndConfirmPasswordEqual } from '../../helpers/authHelpers';

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
      localerror: {},
      password: '',
      email: '',
      confirmpassword: '',
      name: '',
      warning: null,
    };
  }

  /**
   * @param {*} e - event
   * @returns {object} - Changed state
   */
  handleChange = (e) => {
    const { localerror } = this.state;
    const data = { type: e.target.id, content: e.target.value };
    const rerror = validate(data, localerror);
    this.setState({
        [e.target.id]: e.target.value,
        localerror: rerror
    }, () => {
      this.validateConfirmPassword();
    });
  }

  validateConfirmPassword = () => {
    const { password, confirmpassword, localerror } = this.state;
    const perror = { ...localerror };
    if (!isPasswordAndConfirmPasswordEqual(password, confirmpassword)) {
      perror.confirmPassword = true;
      this.setState({
        localerror: perror,
      });
    } else {
      delete perror.confirmPassword;
      this.setState({
        localerror: perror,
      });
    }
  }
  /**
   * @param {object} e
   * @returns {object} - object
   */
  handleSubmit = async (e) => {
    const {
      localerror,
      email,
      password,
      confirmpassword,
      address,
      name,
    } = this.state;
    e.preventDefault();
    if (Object.keys(localerror).length > 0) {
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
    const {state: {warning, localerror},
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
              onChange={this.handleChange}
              className={localerror.email ? 'inValid' : 'valid'}
              placeholder='email@email.com'
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="name">Name or Nickname</label>
            <br />
            <input
              type="text"
              id="name"
              className={localerror.name ? 'inValid' : 'valid'}
              onChange={this.handleChange}
              required
              placeholder='name'
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              className={localerror.password ? 'inValid' : 'valid'}
              onChange={this.handleChange}
              required
              placeholder='password'
            />
          </div>
          <p className='small-text'>
            Password must not be less than six characters
          </p>
          <div className="input-field">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <br />
            <input
              type="password"
              id="confirmpassword"
              onChange={this.handleChange}
              required
              className={localerror.confirmPassword? 'inValid': 'valid'}
              placeholder='confirm password'
            />
          </div>
          <p className='small-text'>
            Confirm password must be equal to password
          </p>
          {error ===true? <p className="errorMessage">{response}</p>:null}
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
