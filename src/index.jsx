import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App/App';
import signUpReducer from './store/reducers/signup';
import signInReducer from './store/reducers/signin';
import orderHistoryReducer from './store/reducers/orderHistory';
import orderFoodReducer from './store/reducers/order';

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  in: signInReducer,
  up: signUpReducer,
  ordHistory: orderHistoryReducer,
  ord: orderFoodReducer
});
const store = createStore(
  rootReducer, composeEnhancers(applyMiddleware(thunk)));

const root = document.getElementById('root');

ReactDOM.render(<Provider store={store}><App /></Provider>, root);
