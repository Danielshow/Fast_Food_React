import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actionType from '../../../store/actions/actionType';
import * as signUpActions from '../../../store/actions/signup';
import mockData from '../mockData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const url = 'https://fast-foodd.herokuapp.com/api/v1';
describe('SignUp Actions', () => {
  beforeEach(()=> {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  it('Should return an action if SignUpSuccess is called', () => {
    const wrapper= signUpActions.signUpSuccess('me');
    expect(wrapper).toHaveProperty('type');
    expect(wrapper.payload).toEqual('me');
    expect(wrapper.type).toEqual(actionType.SIGNUP_SUCCESS);
  });

  it('Should return an action if SignUpFail is called', () => {
    const wrapper= signUpActions.signUpFail(mockData.mockError);
    expect(wrapper).toHaveProperty('type');
    expect(wrapper.payload).toEqual(mockData.mockError.response.data.message);
    expect(wrapper.type).toEqual(actionType.SIGNUP_FAIL);
  });

  it('Should return an action if SignUpStart is called', () => {
    const wrapper= signUpActions.signUpStart('error');
    expect(wrapper).toHaveProperty('type');
    expect(wrapper.type).toEqual(actionType.SIGNUP_START);
  });

  it('Should return an action if SignUpUser is called', () => {
    const wrapper= signUpActions.signUpUser({});
    expect(typeof wrapper).toBe('function');
  });

  it('should despatch success if signup user is called', () => {
    moxios.stubRequest(`${url}/auth/signup`, {
      status: 200,
      response: mockData.authResponse
    });

    const store = mockStore({});
    const expectedActions = [
      {type: actionType.SIGNUP_START},
      {type: actionType.SIGNUP_SUCCESS, payload: mockData.authResponse}
    ];

    return store.dispatch(signUpActions.signUpUser(mockData.signinData))
      .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch failure message if signup user is called', () => {
    moxios.stubRequest(`${url}/auth/signup`, {
      status: 400,
      response: mockData.mockError
    });

    const store = mockStore({});
    const expectedActions = [
      {type: actionType.SIGNUP_START},
      {type: actionType.SIGNUP_FAIL, payload: mockData.mockError.me}
    ];

    return store.dispatch(signUpActions.signUpUser(mockData.signinData))
      .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});


