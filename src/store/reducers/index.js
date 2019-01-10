import { combineReducers } from 'redux';
import orderFoodReducer from './order';
import orderHistoryReducer from './orderHistory';
import signInReducer from './signin';
import signUpReducer from './signup';

const rootReducer = combineReducers({
  in: signInReducer,
  up: signUpReducer,
  ordHistory: orderHistoryReducer,
  ord: orderFoodReducer
});

export default rootReducer;
