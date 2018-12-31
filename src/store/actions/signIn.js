import axios from 'axios';
import * as actionType from './actionType';

export const postSignIn = (response) => {
  return {
    type: actionType.AUTH_SUCCESS,
    payload: response
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

export const authLogout = () => {
  return {
    type: actionType.AUTH_LOGOUT
  };
};

export const logoutUser = () => {
  return dispatch => {
    setTimeout(()=> {
      dispatch(authLogout());
    }, 3600 * 1000);
  };
};

export const clearResponse = () => {
  return {
    type: actionType.AUTH_CLEAR_RESPONSE
  };
};

export const signInUser = (user) => {
  return dispatch => {
    dispatch(authStart());
    axios.post('https://fast-foodd.herokuapp.com/api/v1/auth/login', {
      email: user.email,
      password: user.password
    }).then(response => {
      dispatch(postSignIn(response.data));
      dispatch(logoutUser());
    }).catch(err => {
      dispatch(loginFailed(err.response.data.message));
    });
  };
};
