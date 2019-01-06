import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import mockData from '../mockData';
import * as actionType from '../../../store/actions/actionType';
import * as signInActions from '../../../store/actions/signIn';
import * as act from '../../../store/actions/orderHistory';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const url = 'https://fast-foodd.herokuapp.com/api/v1';
describe('SignIn Actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  it('should return an action if postignin is called', () => {
    expect(signInActions.postSignIn()).toHaveProperty('type');
    expect(signInActions.postSignIn().type).toEqual(
      actionType.AUTH_SUCCESS);
  });

  it('should return an action if loginFailed is called', () => {
    const error = 'some-text';
    expect(signInActions.loginFailed(error)).toHaveProperty('type');
    expect(signInActions.loginFailed(error)).toHaveProperty('payload');
    expect(signInActions.loginFailed(error).payload).toEqual(error);
    expect(signInActions.loginFailed(error).type).toEqual(
      actionType.AUTH_FAIL);
  });

  it('should return an action if authStart is called', () => {
    expect(signInActions.authStart()).toHaveProperty('type');
    expect(signInActions.authStart().type).toEqual(
      actionType.AUTH_START);
  });

  it('should return an action if logoutUser is called', () => {
    expect(signInActions.logoutUser()).toHaveBeenCalled;
  });

  it('should return an action if signInUser is called',async () => {
    moxios.stubRequest(`${url}/auth/login`, {
      status: 200,
      response: mockData.authResponse
    });
    const expectedActions = [
      {type: actionType.AUTH_START},
      {type: actionType.AUTH_SUCCESS}
    ];
    const store = mockStore({});
    return store.dispatch(signInActions.signInUser(mockData.signinData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        expect(signInActions.logoutUser()).toBeCalled;
    });
  });

  it('should return an error if signInUser is called',async () => {
    moxios.stubRequest(`${url}/auth/login`, {
      status: 404,
      response: mockData.authResponse
    });
    const expectedActions = [
      {type: actionType.AUTH_START},
      {type: actionType.AUTH_FAIL, payload: mockData.authResponse.err},
    ];

    const store = mockStore({});

    return store.dispatch(signInActions.signInUser(mockData.signinData))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should return an action if clearResponse is called', () => {
    expect(signInActions.clearResponse()).toHaveProperty('type');
    expect(signInActions.clearResponse().type).toEqual(
      actionType.AUTH_CLEAR_RESPONSE);
  });
});
