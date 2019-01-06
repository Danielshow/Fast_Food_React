import * as actionType from '../../../store/actions/actionType';
import orderReducers from '../../../store/reducers/order';

describe('##Order Reducers', () => {
  it('should return initial state when undefined is supplied', () => {
    expect(orderReducers(undefined, {})).toEqual({
      foods: [],
      loading: false,
      err: false
    });
  });

  it('should change state if orderStartFetch is called', () => {
    expect(orderReducers({
      foods: [],
      loading: false,
      err: false
    }, {type: actionType.ORDER_FOOD_START_FETCH})).toEqual({
      foods: [],
      loading: true,
      err: false
    });
  });

  it('should change state if orderFoodSucsess is called', () => {
    expect(orderReducers({
      foods: [],
      loading: false,
      err: false
    }, {type: actionType.ORDER_FOOD_SUCCESS, payload: []})).toEqual({
      foods: [],
      loading: false,
      err: false
    });
  });

  it('should change state if orderFoodFailure is called', () => {
    expect(orderReducers({
      foods: [],
      loading: false,
      err: false
    }, {type: actionType.ORDER_FOOD_FAILURE, payload: []})).toEqual({
      foods: [],
      loading: false,
      err: true
    });
  });
});
