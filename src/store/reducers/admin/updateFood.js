import updatedObject from '../../utility';
import * as actionType from '../../actions/actionType';

const initState = {
  updateLoading: null,
  updateError: null,
  updateResponse: null,
  updateSuccess: null
};

const updateMenuStart = (state) => {
  return updatedObject(state, {
    updateLoading: true, updateError: false, updateSuccess: false});
};

const updateMenuSuccess = (state, action) => {
  return updatedObject(state, {
    updateLoading: false, updateSuccess: true, updateResponse: action.payload});
};

const updateMenuFailure = (state, action) => {
  return updatedObject(state, {
    updateLoading: false, updateError: true, updateResponse: action.err});
};

const reducer = (state=initState, action) => {
  switch (action.type) {
    case actionType.UPDATE_MENU_START: return updateMenuStart(state);
    case actionType.UPDATE_MENU_FAILURE:
      return updateMenuFailure(state, action);
    case actionType.UPDATE_MENU_SUCCESS:
      return updateMenuSuccess(state, action);
    default: return state;
  }
};

export default reducer;
