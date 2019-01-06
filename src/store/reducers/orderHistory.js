import * as actionType from '../actions/actionType';
import updateObject from '../utility';

const initState = {
  orderHistory: [],
  orderSuccess: null,
  orderFailure: null,
  isUserGotten: false,
  loading: null
};

const orderHistorySucess = (state, action) => {
  return updateObject(state, {
    orderSuccess: true,
    orderFailure: false,
    loading: false,
    isUserGotten: false,
    orderHistory: action.payload});
};

const orderHistoryFailure = (state) => {
  return updateObject(state,
    {orderFailure: true, orderSuccess: false, loading: false});
};

const getUserByToken = (state) => {
  return updateObject(state, {isUserGotten: true});
};

const orderHistoryFetchStart = (state) => {
  return updateObject(state, {loading: true});
};

const orderHistoryReducer = (state=initState, action) => {
  switch (action.type) {
    case actionType.ORDER_HISTORY_SUCCESS:
      return orderHistorySucess(state, action);
    case actionType.ORDER_HISTORY_FAILURE: return orderHistoryFailure(state);
    case actionType.ORDER_USER_AUTH: return getUserByToken(state);
    case actionType.ORDER_HISTORY_FETCH_START:
      return orderHistoryFetchStart(state);
    default: return state;
  }
};

export default orderHistoryReducer;
