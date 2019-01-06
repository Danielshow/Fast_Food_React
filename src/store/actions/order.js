import axios from 'axios';
import * as actionType from './actionType';

const url = 'https://fast-foodd.herokuapp.com/api/v1';

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
export const getFoodsFromAPI = () => {
  return async dispatch => {
    dispatch(orderFoodStart());
    return axios.get(`${url}/menu`).then((res) => {
      dispatch(orderFoodSuccess(res));
    }).catch(err => {
      dispatch(orderFoodFailure(err));
    });
  };
};
