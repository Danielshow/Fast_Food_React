import { connect } from 'react-redux';
import Order from './Order';
import {getFoodsFromAPI, orderFood, getUserFromToken }
  from '../../store/actions/order';

export const mapStateToProps = state => {
  return {
    foods: state.ord.foods,
    loading: state.ord.loading,
    isUser: state.ord.isUser,
    email: state.ord.email
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getFoods: () => {dispatch(getFoodsFromAPI());},
    orderFood: (food) => {dispatch(orderFood(food));},
    getUserFromToken: () => {dispatch(getUserFromToken());}
  };
};

const OrderContainer = connect(mapStateToProps, mapDispatchToProps)(Order);

export default OrderContainer;