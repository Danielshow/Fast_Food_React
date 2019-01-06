import * as actionType from '../../../store/actions/actionType';
import historyReducer from '../../../store/reducers/orderHistory';

describe('OrderHistory Reducers', () => {
  it('should return null when state is undefined', () => {
    expect(historyReducer(undefined, {})).toEqual({
      orderHistory: [],
      orderSuccess: null,
      orderFailure: null,
      isUserGotten: false,
      loading: null
    });
  });

  it('should change state when orderHistorySucess is called', () => {
    expect(historyReducer({
      orderHistory: [],
      orderSuccess: null,
      orderFailure: null,
      isUserGotten: false,
      loading: null
    }, {type: actionType.ORDER_HISTORY_SUCCESS, payload: 'moom'})).toEqual({
      orderSuccess: true,
      orderFailure: false,
      loading: false,
      isUserGotten: false,
      orderHistory: 'moom'});
  });

  it('should change state when orderHistoryFailure is called', () => {
    expect(historyReducer({
      orderHistory: [],
      orderSuccess: null,
      orderFailure: null,
      isUserGotten: false,
      loading: null
    }, {type: actionType.ORDER_HISTORY_FAILURE})).toEqual({
      orderSuccess: false,
      orderFailure: true,
      loading: false,
      orderHistory: [],
      isUserGotten: false});
  });

  it('should change state when getUserByToken is called', () => {
    expect(historyReducer({
      orderHistory: [],
      orderSuccess: null,
      orderFailure: null,
      isUserGotten: false,
      loading: null
    }, {type: actionType.ORDER_USER_AUTH})).toEqual({
      orderSuccess: null,
      orderFailure: null,
      loading: null,
      orderHistory: [],
      isUserGotten: true});
  });

  it('should change state when OrderHistoryFetchStart is called', () => {
    expect(historyReducer({
      orderHistory: [],
      orderSuccess: null,
      orderFailure: null,
      isUserGotten: false,
      loading: null
    }, {type: actionType.ORDER_HISTORY_FETCH_START})).toEqual({
      orderSuccess: null,
      orderFailure: null,
      loading: true,
      orderHistory: [],
      isUserGotten: false});
  });
});
