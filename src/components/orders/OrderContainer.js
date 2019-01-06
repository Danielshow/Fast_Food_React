import { connect } from 'react-redux';
import Order from './Order';
import {getFoodsFromAPI} from '../../store/actions/order';

export const mapStateToProps = state => {
  return {
    foods: state.ord.foods,
    loading: state.ord.loading
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getFoods: () => {dispatch(getFoodsFromAPI());}
  };
};

const OrderContainer = connect(mapStateToProps, mapDispatchToProps)(Order);

export default OrderContainer;
