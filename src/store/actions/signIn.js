import axios from 'axios';
import * as actionType from './actionType';
import history from '../../helpers/history';

const url = 'https://fast-foodd.herokuapp.com/api/v1';
// const url = 'http://localhost:3000/api/v1';

export const postSignIn = () => {
  return {
    type: actionType.AUTH_SUCCESS
  };
};

export const loginFailed = (error) => {
  return {
    type: actionType.AUTH_FAIL,
    payload: error
  };
};

export const authStart = () => {
  return {
    type: actionType.AUTH_START
  };
};

export const clearResponse = () => {
  return {
    type: actionType.AUTH_CLEAR_RESPONSE
  };
};

export const signInUser = (user) => {
  return async dispatch => {
    dispatch(authStart());
    return axios.post(`${url}/auth/login`, {
      email: user.email,
      password: user.password
    }).then(response => {
      dispatch(postSignIn());
      localStorage.setItem('token', response.data.data.token);
      if (response.data.data.roles === 'admin') {
        return history.push('/admin');
      }
      return history.push('/order');
    }).catch(err => {
      dispatch(loginFailed(err.response.data.message));
    });
  };
};
