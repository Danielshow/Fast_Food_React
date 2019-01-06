import updateObject from '../utility';
import * as actionType from '../actions/actionType';

const initState = {
  foods: [],
  loading: false,
  err: false
};

const orderFoodStartFetch = (state) => {
  return updateObject(state, {loading: true});
};

const orderFoodSuccess = (state, action) => {
  return updateObject(state, {loading: false, foods: action.payload});
};

const orderFoodFailure = (state) => {
  return updateObject(state, {loading: false, err: true});
};

const reducer = (state=initState, action) => {
  switch (action.type) {
    case actionType.ORDER_FOOD_START_FETCH: return orderFoodStartFetch(state);
    case actionType.ORDER_FOOD_SUCCESS: return orderFoodSuccess(state, action);
    case actionType.ORDER_FOOD_FAILURE: return orderFoodFailure(state);
    default: return state;
  }
};

export default reducer;
