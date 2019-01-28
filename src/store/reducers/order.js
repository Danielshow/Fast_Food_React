import updateObject from '../utility';
import * as actionType from '../actions/actionType';

const initState = {
  foods: [],
  loading: false,
  err: false,
  isUser: null,
  email: null,
  success: null,
};

const getMenuStart = (state) => {
  return updateObject(state, {loading: true});
};

const getMenuSuccess = (state, action) => {
  return updateObject(state, {loading: false, foods: action.payload});
};

const getMenuFailure = (state) => {
  return updateObject(state, {loading: false, err: true});
};

const orderFoodStart = (state) => {
  return updateObject(state, {loading: true, success: false});
};

const orderFoodSuccess = (state, action) => {
  return updateObject(state, {
    loading: false, orders: action.payload, success: true});
};

const orderFoodFailure = (state) => {
  return updateObject(state, {loading: false, err: true});
};

const getTokenToOrder = (state, action) => {
  return updateObject(state, {isUser: true, email: action.email});
};

const getTokenToOrderFailure = (state) => {
  return updateObject(state, {isUser: false});
};

const reducer = (state=initState, action) => {
  switch (action.type) {
    case actionType.GET_MENU_START: return getMenuStart(state);
    case actionType.GET_MENU_SUCCESS: return getMenuSuccess(state, action);
    case actionType.GET_MENU_FAILURE: return getMenuFailure(state);
    case actionType.ORDER_FOOD_START_FETCH: return orderFoodStart(state);
    case actionType.ORDER_FOOD_SUCCESS: return orderFoodSuccess(state, action);
    case actionType.ORDER_FOOD_FAILURE: return orderFoodFailure(state);
    case actionType.GET_TOKEN_TO_ORDER: return getTokenToOrder(state, action);
    case actionType.GET_TOKEN_TO_ORDER_FAILURE:
      return getTokenToOrderFailure(state);
    default: return state;
  }
};

export default reducer;
