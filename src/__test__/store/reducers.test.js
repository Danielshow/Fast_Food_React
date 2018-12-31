import reducers from '../../store/reducers/reducers';
import * as actionTypes from '../../store/actions/actionType';

describe('Reducers test', () => {
  it('return initial state if action is undefined', () => {
    expect(reducers(undefined, {})).toEqual({
      response: null,
      error: null,
      loading: false,
      token: null
    });
  });

  it('should update loading if authStart action is called', () => {
    expect(reducers({
      response: null,
      error: null,
      loading: false,
      token: null
    }, {type: actionTypes.AUTH_START})).toEqual({
      response: null,
      error: null,
      loading: true,
      token: null
    });
  });

  it('should update state if authSucess action is called', () => {
    expect(reducers({
      response: null,
      error: null,
      loading: false,
      token: null
    }, {type: actionTypes.AUTH_SUCCESS, payload: {
      message: 'me',
      data: {token: 'yes'}
    }})).toEqual({
      response: 'me',
      error: false,
      loading: false,
      token: 'yes'
    });
  });

  it('should update state if authFail action is called', () => {
    expect(reducers({
      response: null,
      error: null,
      loading: false,
      token: null
    }, {type: actionTypes.AUTH_FAIL, payload: 'any_stuff'})).toEqual({
      response: 'any_stuff',
      error: true,
      loading: false,
      token: null
    });
  });

  it('should update state if authLogout action is called', () => {
    expect(reducers({
      response: null,
      error: null,
      loading: false,
      token: null
    }, {type: actionTypes.AUTH_LOGOUT})).toEqual({
      response: null,
      error: null,
      loading: false,
      token: null
    });
  });

  it('should update state if authClearResponse action is called', () => {
    expect(reducers({
      response: null,
      error: null,
      loading: false,
      token: null
    }, {type: actionTypes.AUTH_CLEAR_RESPONSE})).toEqual({
      response: null,
      error: null,
      loading: false,
      token: null
    });
  });
});
