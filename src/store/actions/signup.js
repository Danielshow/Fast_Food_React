import axios from 'axios';
import history from '../../helpers/history';
import * as actionType from './actionType';

export const signUpSuccess = (data) => {
  return {
    type: actionType.SIGNUP_SUCCESS,
    payload: data
  };
};

export const signUpFail = (err) =>{
  return {
    type: actionType.SIGNUP_FAIL,
    payload: err
  };
};

export const signUpStart = () => {
  return {
    type: actionType.SIGNUP_START
  };
};

export const signUpUser = (user) => {
  return dispatch => {
    dispatch(signUpStart());
    axios.post('https://fast-foodd.herokuapp.com/api/v1/auth/signup', {
      ...user
    }).then(response => {
      dispatch(signUpSuccess(response.data));
      history.push('/login');
    }).catch(err => {
      dispatch(signUpFail(err.response.data.message));
    });
  };
};
