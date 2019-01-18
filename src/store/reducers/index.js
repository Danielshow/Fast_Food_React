import { combineReducers } from 'redux';
import orderFoodReducer from './order';
import orderHistoryReducer from './orderHistory';
import signInReducer from './signin';
import signUpReducer from './signup';
import adminReducer from './admin/admin';
import adminUpdate from './admin/updateFood';
import adminDelete from './admin/deleteFood';

const rootReducer = combineReducers({
  in: signInReducer,
  up: signUpReducer,
  ordHistory: orderHistoryReducer,
  ord: orderFoodReducer,
  admin: adminReducer,
  adminDelete,
  adminUpdate
});

export default rootReducer;
