import axios from 'axios';
import * as actionType from './actionType';
import history from '../../helpers/history';

const url = 'https://fast-foodd.herokuapp.com/api/v1';
// const url = 'http://localhost:3000/api/v1';

export const postMenuStart = () => {
  return {
    type: actionType.POST_MENU_START
  };
};

export const postMenuFailure = (err) => {
  return {
    type: actionType.POST_MENU_ERROR,
    payload: err
  };
};

export const postMenuSuccess = (response) => {
  return {
    type: actionType.POST_MENU_SUCCESS,
    payload: response
  };
};

export const adminMenuSuccess = (res) => {
  return {
    type: actionType.ADMIN_MENU_SUCCESS,
    payload: res.data.data
  };
};

export const adminMenuStart = () => {
  return {
    type: actionType.ADMIN_MENU_START
  };
};

export const adminMenuFailure = (err) => {
  return {
    type: actionType.ADMIN_MENU_FAIL,
    err: err
  };
};

export const updateMenuSuccess = (res) => {
  return {
    type: actionType.UPDATE_MENU_SUCCESS,
    payload: res
  };
};

export const updateMenuStart = () => {
  return {
    type: actionType.UPDATE_MENU_START
  };
};

export const updateMenuFailure = (err) => {
  return {
    type: actionType.UPDATE_MENU_FAILURE,
    err: err
  };
};

export const deleteMenuSuccess = (res) => {
  return {
    type: actionType.DELETE_MENU_SUCCESS,
    payload: res
  };
};

export const deleteMenuStart = () => {
  return {
    type: actionType.DELETE_MENU_START
  };
};

export const deleteMenuFailure = (err) => {
  return {
    type: actionType.DELETE_MENU_FAILURE,
    err: err
  };
};

export const getAdmin = () => {
  return {
    type: actionType.GET_ADMIN,
  };
};


export const postMenu = (menu) => {
  const token = localStorage.getItem('token');
  return async dispatch => {
    dispatch(postMenuStart());
    try {
      const res = await axios.post(`${url}/menu`, menu, {
        headers: {Authorization: `Bearer ${token}`}
      });
      dispatch(postMenuSuccess(res.data.message));
      // window.location.reload();
    } catch(err) {
      dispatch(postMenuFailure(err.response.data.message));
    }
  };
};

export const getFoodsFromAPI = () => {
  return async dispatch => {
    dispatch(adminMenuStart());
    return axios.get(`${url}/menu`).then((res) => {
      dispatch(adminMenuSuccess(res));
    }).catch(err => {
      dispatch(adminMenuFailure(err));
    });
  };
};

export const updateMenu = (menu, id) => {
  const token = localStorage.getItem('token');
  return async dispatch => {
    dispatch(updateMenuStart());
    try {
      const res = await axios.put(`${url}/menu/${id}`, menu, {
        headers: {Authorization: `Bearer ${token}`}
      });
      dispatch(updateMenuSuccess(res.data.message));
      // window.location.reload();
    } catch(err) {
      dispatch(updateMenuFailure(err.response.data.message));
    }
  };
};

export const deleteMenu = (id) => {
  const token = localStorage.getItem('token');
  return async dispatch => {
    dispatch(deleteMenuStart());
    try {
      const res = await axios.delete(`${url}/menu/${id}`, {
        headers: {Authorization: `Bearer ${token}`}
      });
      dispatch(deleteMenuSuccess(res.data.message));
    } catch(err) {
      dispatch(deleteMenuFailure(err.response.data.message));
    }
  };
};

export const getUserFromToken = () => {
  const token = localStorage.getItem('token');
  return async dispatch => {
    return axios.get(`${url}/auth/me`, {
      headers: {Authorization: `Bearer ${token}`}
    }).then((res) => {
      if (res.data.data[0].roles !== 'admin'){
        history.push('/order');
      }
      dispatch(getAdmin());
    }).catch(err => {
      history.push('/login');
      return err;
    });
  };
};
