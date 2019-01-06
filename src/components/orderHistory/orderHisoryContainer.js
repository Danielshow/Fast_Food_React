import { connect } from 'react-redux';
import orderHistory from './orderHistory';
import { getOrderHistory, getUserFromToken } from
  '../../store/actions/orderHistory';

export const mapStateToProps = state => {
  return {
    myOrders: state.ordHistory.orderHistory,
    isUserGotten: state.ordHistory.isUserGotten,
    loading: state.ordHistory.loading,
    orderFailure: state.ordHistory.orderFailure
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getOrderHistory: () => dispatch(getOrderHistory()),
    getUserFromToken: () => dispatch(getUserFromToken())
  };
};

const orderHistoryContainer = connect(
  mapStateToProps, mapDispatchToProps)(orderHistory);

export default orderHistoryContainer;
