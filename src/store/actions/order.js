import axios from 'axios';
import * as actionType from './actionType';
import history from '../../helpers/history';

const url = 'https://fast-foodd.herokuapp.com/api/v1';

export const getMenuSuccess = (res) => {
  return {
    type: actionType.GET_MENU_SUCCESS,
    payload: res.data.data
  };
};

export const getMenuStart = () => {
  return {
    type: actionType.GET_MENU_START
  };
};

export const getMenuFailure = (err) => {
  return {
    type: actionType.GET_MENU_FAILURE,
    err: err
  };
};

export const orderFoodSuccess = (res) => {
  return {
    type: actionType.ORDER_FOOD_SUCCESS,
    payload: res.data.data
  };
};

export const orderFoodStart = () => {
  return {
    type: actionType.ORDER_FOOD_START_FETCH
  };
};

export const orderFoodFailure = (err) => {
  return {
    type: actionType.ORDER_FOOD_FAILURE,
    err: err
  };
};

export const getUserByToken = (res) => {
  return {
    type: actionType.GET_TOKEN_TO_ORDER,
    email: res.data.data[0].email
  };
};

export const getUserByTokenFailure = (err) => {
  return {
    type: actionType.GET_TOKEN_TO_ORDER_FAILURE,
    err: err.response
  };
};

export const getFoodsFromAPI = () => {
  return async dispatch => {
    dispatch(getMenuStart());
    return axios.get(`${url}/menu`).then((res) => {
      dispatch(getMenuSuccess(res));
    }).catch(err => {
      dispatch(getMenuFailure(err));
    });
  };
};

export const orderFood = (orders) => {
  const token = localStorage.getItem('token');
  return async dispatch => {
    dispatch(orderFoodStart());
    return axios.post(`${url}/orders`, orders ,{
      headers: {Authorization: `Bearer ${token}`},
    }).then((res) => {
      dispatch(orderFoodSuccess(res));
      localStorage.removeItem('myOrders');
    }).catch(err => {
      dispatch(orderFoodFailure(err));
      history.push('/');
    });
  };
};

export const getUserFromToken = () => {
  const token = localStorage.getItem('token');
  return async dispatch => {
    return axios.get(`${url}/auth/me`, {
      headers: {Authorization: `Bearer ${token}`}
    }).then((res) => {
      dispatch(getUserByToken(res));
    }).catch(err => {
      dispatch(getUserByTokenFailure(err));
    });
  };
};
