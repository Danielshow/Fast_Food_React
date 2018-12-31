import * as actionType from '../actions/actionType';
import updateObject from '../utility';

const initState = {
  response: null,
  error: null,
  loading: false,
  token: null
};

const authStart = (state) => {
  return updateObject(state, {loading: true});
};
const authSucess = (state, action) => {
  return updateObject(state,
    {response: action.payload.message,
      loading: false, error: false,
      token: action.payload.data.token});
};

const authFail = (state, action) => {
  return updateObject(state,
    {error: true, response: action.payload, loading: false});
};

const authLogout = (state) => {
  return updateObject(state, { token: null});
};

const authClearResponse = (state) => {
  return updateObject(state, {response:  null});
};

const reducer = (state=initState, action) => {
  switch (action.type) {
    case actionType.AUTH_START: return authStart(state);
    case actionType.AUTH_SUCCESS: return authSucess(state, action);
    case actionType.AUTH_FAIL: return authFail(state, action);
    case actionType.AUTH_LOGOUT: return authLogout(state);
    case actionType.AUTH_CLEAR_RESPONSE: return authClearResponse(state);
    default:
      return state;
  }
};

export default reducer;
