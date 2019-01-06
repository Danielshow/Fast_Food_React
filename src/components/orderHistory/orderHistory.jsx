import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import ViewDetails from './viewDetails';
/**
 * @class
 * @param {*} order
 */
class orderHistory extends Component {
  /**
   * @constructor
   */
  constructor() {
    super();
    this.state={
      modal: false,
      response: ''
    };
  }
  /**
   * @description - Get a user from token
   * @returns {user} a user
   */
  componentDidMount() {
    const { getUserFromToken } = this.props;
    getUserFromToken();
  }

  /**
   * @param {*} prevProps
   * @returns {void}
   */
  componentDidUpdate(prevProps) {
    const { isUserGotten, getOrderHistory} = this.props;
    if(isUserGotten !== prevProps.isUserGotten) {
      getOrderHistory();
    }
  }

  handleClick = (order) => {
    this.setState({
      modal: true,
      response: order
    });
  }

  removeModal = () => {
    this.setState({
      modal: false,
    });
  }
  /**
   * @returns {JSX} returns JSX
   */
  render() {
    const { props:
      { loading, myOrders, orderFailure }, state: {modal, response} } = this;
    const myOrderList = myOrders.map((order) => {
      return (
        <tbody key={order.id}>
          <tr>
            <td>{order.id}</td>
            {/* eslint-disable-next-line */}
            <td className="view" onClick={() => this.handleClick(order)}>
              View Details  ←
            </td>
            <td>{order.price}</td>
            <td>{order.status}</td>
          </tr>
        </tbody>
      );
    });
    return (
      <div className="orderContainer">
        {modal?
          <ViewDetails orders={response} removeModal={this.removeModal} />:null}
        {loading?<Spinner />:null}
        <div className="orderhistory">
          <h1>Order History</h1>
          <table>
            <tbody>
              <tr>
                <th>Order ID</th>
                <th>Details</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </tbody>
            {myOrderList}
          </table>
        </div>
        {orderFailure?<h3>You have no orders</h3>:null}
      </div>
    );
  }
}

orderHistory.propTypes = {
  isUserGotten: PropTypes.bool,
  getOrderHistory: PropTypes.func,
  getUserFromToken: PropTypes.func,
  loading: PropTypes.bool,
  // eslint-disable-next-line
  myOrders: PropTypes.array,
  orderFailure: PropTypes.bool
};

orderHistory.defaultProps = {
  isUserGotten: false,
  getOrderHistory: () => {},
  getUserFromToken: () => {},
  loading: false,
  myOrders: [],
  orderFailure: true
};

export default orderHistory;
