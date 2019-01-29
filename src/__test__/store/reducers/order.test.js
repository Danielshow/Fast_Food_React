import * as actionType from '../../../store/actions/actionType';
import orderReducers from '../../../store/reducers/order';

describe('##Order Reducers', () => {
  it('should return initial state when undefined is supplied', () => {
    expect(orderReducers(undefined, {})).toEqual({
      foods: [],
      loading: false,
      err: false,
      isUser: null,
      email: null,
      success: null
    });
  });

  it('should change state if getMenustart is called', () => {
    expect(orderReducers({
      foods: [],
      loading: false,
      err: false
    }, {type: actionType.GET_MENU_START})).toEqual({
      foods: [],
      loading: true,
      err: false
    });
  });

  it('should change state if getMenuSuccess is called', () => {
    expect(orderReducers({
      foods: [],
      loading: false,
      err: false
    }, {type: actionType.GET_MENU_SUCCESS, payload: []})).toEqual({
      foods: [],
      loading: false,
      err: false
    });
  });

  it('should change state if getMenuFailure is called', () => {
    expect(orderReducers({
      foods: [],
      loading: false,
      err: false
    }, {type: actionType.GET_MENU_FAILURE, payload: []})).toEqual({
      foods: [],
      loading: false,
      err: true
    });
  });

  it('should change state if orderFoodStart is called', () => {
    expect(orderReducers({
      foods: [],
      loading: false,
      err: false
    }, {type: actionType.ORDER_FOOD_START_FETCH})).toEqual({
      foods: [],
      loading: true,
      err: false,
      success: false,
    });
  });

  it('should change state if orderFoodSuccess is called', () => {
    expect(orderReducers({
      foods: [],
      loading: false,
      err: false
    }, {type: actionType.ORDER_FOOD_SUCCESS, payload: {}})).toEqual({
      foods: [],
      loading: false,
      err: false,
      orders: {},
      success: true
    });
  });

  it('should change state if orderFoodFailure is called', () => {
    expect(orderReducers({
      foods: [],
      loading: false,
      err: false
    }, {type: actionType.ORDER_FOOD_FAILURE})).toEqual({
      foods: [],
      loading: false,
      err: true,
    });
  });

  it('should change state if getTokenOrder is called', () => {
    expect(orderReducers({
      foods: [],
      loading: false,
      err: false
    }, {type: actionType.GET_TOKEN_TO_ORDER, email: {}})).toEqual({
      foods: [],
      loading: false,
      err: false,
      email: {},
      isUser: true
    });
  });

  it('should change state if getTokenToOrderFailure is called', () => {
    expect(orderReducers({
      foods: [],
      loading: false,
      err: false
    }, {type: actionType.GET_TOKEN_TO_ORDER_FAILURE, email: {}})).toEqual({
      foods: [],
      loading: false,
      err: false,
      isUser: false
    });
  });
});
