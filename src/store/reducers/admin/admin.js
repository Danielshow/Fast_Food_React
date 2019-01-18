import updatedObject from '../../utility';
import * as actionType from '../../actions/actionType';

const initState = {
  loading: null,
  error: false,
  fetchError: null,
  response: null,
  success: null,
  foods: null,
  fetchResponse: null,
  updateError: null,
  updateResponse: null,
  isAdmin: false,
};

const postMenuStart = (state) => {
  return updatedObject(state, {loading: true, error: false});
};

const postMenuSuccess = (state, action) => {
  return updatedObject(state, {
    loading: false, success: true, response: action.payload, error: false});
};

const postMenuFailure = (state, action) => {
  return updatedObject(state, {
    loading: false, error: true, response: action.payload});
};

const adminMenuStart = (state) => {
  return updatedObject(state, {loading: true, fetchError: false});
};

const adminMenuSuccess = (state, action) => {
  return updatedObject(state, {
    loading: false, foods: action.payload, fetchError: false});
};

const adminMenuFailure = (state, action) => {
  return updatedObject(state, {
    loading: false, fetchError: true, fetchResponse: action.payload});
};

const getAdmin = (state) => {
  return updatedObject(state, {
    isAdmin: true
  });
};

const reducer = (state=initState, action) => {
  switch (action.type) {
    case actionType.POST_MENU_START: return postMenuStart(state);
    case actionType.POST_MENU_ERROR: return postMenuFailure(state, action);
    case actionType.POST_MENU_SUCCESS: return postMenuSuccess(state, action);
    case actionType.ADMIN_MENU_START: return adminMenuStart(state);
    case actionType.ADMIN_MENU_FAIL: return adminMenuFailure(state, action);
    case actionType.ADMIN_MENU_SUCCESS: return adminMenuSuccess(state, action);
    case actionType.GET_ADMIN: return getAdmin(state);
    default: return state;
  }
};

export default reducer;
