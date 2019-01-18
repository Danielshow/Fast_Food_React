import updatedObject from '../../utility';
import * as actionType from '../../actions/actionType';

const initState = {
  deleteLoading: null,
  deleteError: null,
  deleteResponse: null,
  deleteSuccess: null
};

const deleteMenuStart = (state) => {
  return updatedObject(state, {deleteLoading: true, deleteError: false});
};

const deleteMenuSuccess = (state, action) => {
  return updatedObject(state, {
    deleteLoading: false, deleteSuccess: true, deleteResponse: action.payload});
};

const deleteMenuFailure = (state, action) => {
  return updatedObject(state, {
    deleteLoading: false, deleteError: true, deleteResponse: action.err});
};

const reducer = (state=initState, action) => {
  switch (action.type) {
    case actionType.DELETE_MENU_START: return deleteMenuStart(state);
    case actionType.DELETE_MENU_FAILURE:
      return deleteMenuFailure(state, action);
    case actionType.DELETE_MENU_SUCCESS:
      return deleteMenuSuccess(state, action);
    default: return state;
  }
};

export default reducer;
