import axios from 'axios';
import * as actionType from './actionType';
import history from '../../helpers/history';

const url = 'https://fast-foodd.herokuapp.com/api/v1';
// const url = 'http://localhost:3000/api/v1';

export const orderHistorySuccess = (response) => {
  return {
    type: actionType.ORDER_HISTORY_SUCCESS,
    payload: response
  };
};

export const orderHistoryFetchStart = () => {
  return {
    type: actionType.ORDER_HISTORY_FETCH_START
  };
};

export const getUserByToken = () => {
  return {
    type: actionType.ORDER_USER_AUTH,
  };
};

export const orderHistoryFailure = (err) => {
  return {
    type: actionType.ORDER_HISTORY_FAILURE,
    payload: err
  };
};

export const getOrderHistory = () => {
  const token = localStorage.getItem('token');
  return async dispatch => {
    dispatch(orderHistoryFetchStart());
    return axios.get(`${url}/users/orders`, {
      headers: {Authorization: `Bearer ${token}`}
    }).then( response => {
      dispatch(orderHistorySuccess(response.data.data));
    }).catch(err => {
      dispatch(orderHistoryFailure(err));
    });
  };
};

export const getUserFromToken = () => {
  const token = localStorage.getItem('token');
  return async dispatch => {
    return axios.get(`${url}/auth/me`, {
      headers: {Authorization: `Bearer ${token}`}
    }).then(() => {
      dispatch(getUserByToken());
    }).catch(err => {
      history.push('/login');
      return err;
    });
  };
};
