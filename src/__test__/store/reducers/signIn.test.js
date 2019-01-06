import reducers from '../../../store/reducers/signin';
import * as actionTypes from '../../../store/actions/actionType';

describe('Reducers test', () => {
  it('return initial state if action is undefined', () => {
    expect(reducers(undefined, {})).toEqual({
      response: null,
      error: null,
      loading: false,
    });
  });

  it('should update loading if authStart action is called', () => {
    expect(reducers({
      response: null,
      error: null,
      loading: false,
    }, {type: actionTypes.AUTH_START})).toEqual({
      response: null,
      error: null,
      loading: true,
    });
  });

  it('should update state if authSucess action is called', () => {
    expect(reducers({
      response: null,
      error: null,
      loading: false,
    }, {type: actionTypes.AUTH_SUCCESS
      })).toEqual({
      response: null,
      error: false,
      loading: false,
    });
  });

  it('should update state if authFail action is called', () => {
    expect(reducers({
      response: null,
      error: null,
      loading: false,
    }, {type: actionTypes.AUTH_FAIL, payload: 'any_stuff'})).toEqual({
      response: 'any_stuff',
      error: true,
      loading: false,
    });
  });

  it('should update state if authClearResponse action is called', () => {
    expect(reducers({
      response: null,
      error: null,
      loading: false,
    }, {type: actionTypes.AUTH_CLEAR_RESPONSE})).toEqual({
      response: null,
      error: null,
      loading: false,
    });
  });
});
