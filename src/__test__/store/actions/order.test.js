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

  it('should perform an action if orderFoodStart is called', () => {
    expect(orderActions.orderFoodStart().type).toEqual(
      actionType.ORDER_FOOD_START_FETCH);
    expect(orderActions.orderFoodStart()).toHaveProperty('type');
  });

  it('should perform an action if orderFoodFailure is called', () => {
    expect(orderActions.orderFoodFailure().type).toEqual(
      actionType.ORDER_FOOD_FAILURE);
    expect(orderActions.orderFoodFailure()).toHaveProperty('type');
  });

  it('should perform an action if getFoodsFromAPI is called', async () => {
    moxios.stubRequest(`${url}/menu`, {
      status: 200,
      response: mockData.authResponse
    });

    const store = mockStore({});
    const expectedActions = [
      {type: actionType.ORDER_FOOD_START_FETCH},
      {type: actionType.ORDER_FOOD_SUCCESS, payload: mockData.authResponse.data}
    ];
    return store.dispatch(orderActions.getFoodsFromAPI()).then(()=> {
      expect(store.getActions()).toEqual(expectedActions);
    });

  });
});
