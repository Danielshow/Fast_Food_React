import * as actionType from '../actions/actionType';
import updateObject from '../utility';

const initState = {
  response: null,
  error: null,
  loading: false,
};

const authStart = (state) => {
  return updateObject(state, {loading: true});
};
const authSucess = (state) => {
  return updateObject(state,
    {loading: false, error: false});
};

const authFail = (state, action) => {
  return updateObject(state,
    {error: true, response: action.payload, loading: false});
};

const authClearResponse = (state) => {
  return updateObject(state, {response:  null});
};

const reducer = (state=initState, action) => {
  switch (action.type) {
    case actionType.AUTH_START: return authStart(state);
    case actionType.AUTH_SUCCESS: return authSucess(state);
    case actionType.AUTH_FAIL: return authFail(state, action);
    case actionType.AUTH_CLEAR_RESPONSE: return authClearResponse(state);
    default:
      return state;
  }
};

export default reducer;
