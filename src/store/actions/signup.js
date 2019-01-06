import axios from 'axios';
import history from '../../helpers/history';
import * as actionType from './actionType';

const url = 'https://fast-foodd.herokuapp.com/api/v1';
// const url = 'http://localhost:3000/api/v1';

export const signUpSuccess = (data) => {
  return {
    type: actionType.SIGNUP_SUCCESS,
    payload: data
  };
};

export const signUpFail = (err) =>{
  return {
    type: actionType.SIGNUP_FAIL,
    payload: err.response.data.message
  };
};

export const signUpStart = () => {
  return {
    type: actionType.SIGNUP_START
  };
};

export const signUpUser = (user) => {
  return async dispatch => {
    dispatch(signUpStart());
    return axios.post(`${url}/auth/signup`, {
      ...user
    }).then(response => {
      dispatch(signUpSuccess(response.data));
      localStorage.setItem('token', response.data.data.token);
      history.push('/');
    }).catch(err => {
      dispatch(signUpFail(err));
    });
  };
};
