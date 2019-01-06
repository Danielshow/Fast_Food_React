import moxios from 'moxios';
import configureMockstore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actionType from '../../../store/actions/actionType';
import * as historyActions from '../../../store/actions/orderHistory';
import mockData from '../mockData';

const url = 'https://fast-foodd.herokuapp.com/api/v1';

const middlewares = [thunk];
const mockStore = configureMockstore(middlewares);

describe('Order history actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should return an action if orderHistorySuccess is called', () => {
    expect(historyActions.orderHistorySuccess('me')).toHaveProperty('type');
    expect(historyActions.orderHistorySuccess('me')).toHaveProperty('payload');
    expect(historyActions.orderHistorySuccess('me').type)
      .toEqual(actionType.ORDER_HISTORY_SUCCESS);
    expect(historyActions.orderHistorySuccess('me').payload).toEqual('me');
  });

  it('should return an action if orderHistoryFetchStart is called', () => {
    expect(historyActions.orderHistoryFetchStart()).toHaveProperty('type');
    expect(historyActions.orderHistoryFetchStart().type)
      .toEqual(actionType.ORDER_HISTORY_FETCH_START);
  });

  it('should return an action if getUserByToken is called', () => {
    expect(historyActions.getUserByToken()).toHaveProperty('type');
    expect(historyActions.getUserByToken().type)
      .toEqual(actionType.ORDER_USER_AUTH);
  });

  it('should return an action if orderHistoryFailure is called', () => {
    expect(historyActions.orderHistoryFailure()).toHaveProperty('type');
    expect(historyActions.orderHistoryFailure().type)
      .toEqual(actionType.ORDER_HISTORY_FAILURE);
  });

  it('should return an action if getUserFromToken is called', async () => {
    moxios.stubRequest(`${url}/auth/me`, {
      status: 200,
      response: mockData.tokenResponse
    });

    const expectedActions = [
      {type: actionType.ORDER_USER_AUTH},
    ];
    const store = mockStore({});
    return store.dispatch(historyActions.getUserFromToken()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });


  it('should return an error if getUserFromToken returns 400', async () => {
    moxios.stubRequest(`${url}/auth/me`, {
      status: 400,
      response: mockData.mockError400
    });

    const expectedActions = [
    ];
    const store = mockStore({});
    return store.dispatch(historyActions.getUserFromToken()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });


  it('should return an action if getOrderHistory is called', async () => {
    moxios.stubRequest(`${url}/users/orders`, {
      status: 200,
      response: mockData.tokenResponse
    });

    const expectedActions = [
      {type: actionType.ORDER_HISTORY_FETCH_START},
      {type: actionType.ORDER_HISTORY_SUCCESS,
        payload: mockData.tokenResponse.data}
    ];
    const store = mockStore({});
    return store.dispatch(historyActions.getOrderHistory()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });


  it('should return error if an getOrderHistory returns 400', async () => {
    moxios.stubRequest(`${url}/users/orders`, {
      status: 400,
      response: mockData.mockError400
    });

    const expectedActions = [
      {type: actionType.ORDER_HISTORY_FETCH_START},
      {type: actionType.ORDER_HISTORY_FAILURE,
        payload: mockData.mockError400}
    ];
    const store = mockStore({});
    return store.dispatch(historyActions.getOrderHistory()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
