import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actionType from '../../../store/actions/actionType';
import * as orderActions from '../../../store/actions/order';
import mockData from '../mockData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const url = 'https://fast-foodd.herokuapp.com/api/v1';
describe('### Order Actions', () => {
  beforeAll(() => {
    moxios.install();
  });

  afterAll(() => {
    moxios.uninstall();
  });

  it('Should perform an action if getMenu success is called', () => {
    const res = {
      data: {
        data: {}
      }
    };
    expect(orderActions.getMenuSuccess(res).type).toEqual(
      actionType.GET_MENU_SUCCESS);
    expect(orderActions.getMenuSuccess(res)).toHaveProperty('type');
    expect(orderActions.getMenuSuccess(res).payload).toEqual({});
    expect(orderActions.getMenuSuccess(res)).toHaveProperty('payload');
  });

  it('should perform an action if getMenuStart is called', () => {
    expect(orderActions.getMenuStart().type).toEqual(
      actionType.GET_MENU_START);
    expect(orderActions.getMenuStart()).toHaveProperty('type');
  });

  it('should perform an action if orderFoodFailure is called', () => {
    expect(orderActions.getMenuFailure().type).toEqual(
      actionType.GET_MENU_FAILURE);
    expect(orderActions.getMenuFailure()).toHaveProperty('type');
  });

  it('Should perform an action if order success is called', () => {
    const res = {
      data: {
        data: {}
      }
    };
    expect(orderActions.orderFoodSuccess(res).type).toEqual(
      actionType.ORDER_FOOD_SUCCESS);
    expect(orderActions.orderFoodSuccess(res)).toHaveProperty('type');
    expect(orderActions.orderFoodSuccess(res).payload).toEqual({});
    expect(orderActions.orderFoodSuccess(res)).toHaveProperty('payload');
  });

  it('should perform an action if getFoodStart is called', () => {
    expect(orderActions.orderFoodStart().type).toEqual(
      actionType.ORDER_FOOD_START_FETCH);
    expect(orderActions.orderFoodStart()).toHaveProperty('type');
  });

  it('should perform an action if orderFoodFailure is called', () => {
    expect(orderActions.orderFoodFailure().type).toEqual(
      actionType.ORDER_FOOD_FAILURE);
    expect(orderActions.orderFoodFailure()).toHaveProperty('type');
  });
  
  it('should perform an action if getUserByToken is called', () => {
    const res = {
      data: {
        data: [
          {}
        ]
      }
    };
    expect(orderActions.getUserByToken(res).type).toEqual(
      actionType.GET_TOKEN_TO_ORDER);
    expect(orderActions.getUserByToken(res)).toHaveProperty('type');
  });

  it('should perform an action if getUserByTokenFailure is called', () => {
    const err = {};
    expect(orderActions.getUserByTokenFailure(err).type).toEqual(
      actionType.GET_TOKEN_TO_ORDER_FAILURE);
    expect(orderActions.getUserByTokenFailure(err)).toHaveProperty('type');
    expect(orderActions.getUserByTokenFailure(err).err).toEqual(undefined);
  });

  it('should perform an action if getFoodsFromAPI is called', async () => {
    moxios.stubRequest(`${url}/menu`, {
      status: 200,
      response: mockData.authResponse
    });

    const store = mockStore({});
    const expectedActions = [
      {type: actionType.GET_MENU_START},
      {type: actionType.GET_MENU_SUCCESS, payload: mockData.authResponse.data}
    ];
    return store.dispatch(orderActions.getFoodsFromAPI()).then(()=> {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should perform an action if orderFood is called', async () => {
    moxios.stubRequest(`${url}/orders`, {
      status: 200,
      response: mockData.authResponse
    });

    const store = mockStore({});
    const expectedActions = [
      {type: actionType.ORDER_FOOD_START_FETCH},
      {type: actionType.ORDER_FOOD_SUCCESS, payload: mockData.authResponse.data}
    ];
    return store.dispatch(orderActions.orderFood(mockData.signinData)).then(()=> {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should perform an action if getUserByToken is called', async () => {
    moxios.stubRequest(`${url}/auth/me`, {
      status: 200,
      response: undefined
    });

    const store = mockStore({});
    const expectedActions = [
      {type: actionType.GET_TOKEN_TO_ORDER_FAILURE, err: undefined}
    ];
    return store.dispatch(orderActions.getUserFromToken()).then(()=> {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should return an error if getUserFromToken returns 400', async () => {
    moxios.stubRequest(`${url}/auth/me`, {
      status: 400,
      response: mockData.mockError400
    });

    const expectedActions = [
      {err: undefined, type: actionType.GET_TOKEN_TO_ORDER_FAILURE}
    ];
    const store = mockStore({});
    return store.dispatch(orderActions.getUserFromToken()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
