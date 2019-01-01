import * as actionType from '../actions/actionType';
import updateObject from '../utility';

const initState = {
  response: null,
  error: null,
  loading: false,
};

const  signUpStart = (state) => {
  return updateObject(state, {loading: true});
};
const signUpSucess = (state, action) => {
  return updateObject(state,
    {response: action.payload.message,
      loading: false, error: false,
    });
};

const signUpFail = (state, action) => {
  return updateObject(state,
    {error: true, response: action.payload, loading: false});
};
const reducer = (state=initState, action) => {
  switch (action.type) {
    case actionType.SIGNUP_START: return signUpStart(state);
    case actionType.SIGNUP_SUCCESS: return signUpSucess(state, action);
    case actionType.SIGNUP_FAIL: return signUpFail(state, action);
    default:
      return state;
  }
};

export default reducer;
