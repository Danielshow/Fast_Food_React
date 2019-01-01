import reducers from '../../../store/reducers/signup';
import * as actionTypes from '../../../store/actions/actionType';

describe('Signup Reducers', () => {
  it('should return an initial state if action is undefined', () => {
    expect(reducers(undefined, {})).toEqual(
      {
        response: null,
        error: null,
        loading: false,
      }
    );
  });

  it('should change loading state to true', () => {
    expect(reducers({
      response: null,
      error: null,
      loading: false,
    }, {type: actionTypes.SIGNUP_START})).toEqual({
      response: null,
      error: null,
      loading: true,
    });
  });

  it('should change response and error state', () => {
    expect(reducers({
      response: null,
      error: null,
      loading: false,
    }, {type: actionTypes.SIGNUP_SUCCESS, payload: {
      message: 'hhhhhh'
    }})).toEqual({
      response: 'hhhhhh',
      error: false,
      loading: false,
    });
  });

  it('should change error, reponse and loading state', () => {
    expect(reducers({
      response: null,
      error: null,
      loading: false,
    }, {type: actionTypes.SIGNUP_FAIL, payload: 'error'})).toEqual({
      response: 'error',
      error: true,
      loading: false,
    });
  });
});
