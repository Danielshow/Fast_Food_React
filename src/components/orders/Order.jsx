import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withToastManager } from 'react-toast-notifications';
import Spinner from '../layout/Spinner';
import OrderConfirmation from './orderConfirmation';
import OrderDetails from './OrderDetails';
import history from '../../helpers/history';
/**
 * @class
 */
export class Order extends Component {
    /**
     * @constructor
     */
    constructor() {
      super();
      this.state = {
        orders: [],
        total: 0,
        modal: false,
      };
    }
    /**
   * @description - Get menu from API
   * @returns {list} menu of foods
   */
  componentDidMount() {
    const { getFoods, getUserFromToken } = this.props;
    getFoods();
    const order = JSON.parse(localStorage.getItem('myOrders'));
    if (order) {
      this.setState({
        orders: order.orders,
        total: order.total
      });
    }
    getUserFromToken();
  }

  /**
   * @description - Get menu from API
   * @returns {list} menu of foods
   */
  componentDidUpdate() {
    localStorage.setItem('myOrders', JSON.stringify(this.state));
  }

    /**
   * @param {string} food
   * @return {object} - updated state
   */
  handleClick = (food) => {
    const { orders, total } = this.state;
    const orderso = orders.filter((order) => {
      if (order.id === food.id) {
        food.quantity = order.quantity + 1;
        food.tprice = food.price * food.quantity;
      }
      return food.id !== order.id;
    });

    if (!food.quantity) {
      food.quantity = 1;
      food.tprice = food.price;
    }

    const myorders = [...orderso, food];
    this.setState({
      orders: myorders,
      total: total+Number(food.price)
    });
  }

  /**
   * @param {int} id
   * @return {object} - updated state
   */
  handleRemove = (id) => {
    const { orders, total } = this.state;
    let newTotal;
    const updatedOrders = orders.filter((order) => {
      if(order.id === id) {
        newTotal = total - Number(order.price * order.quantity);
        order.tprice = 0;
        order.quantity = 0;
      }
      return order.id !== id;
    });

    this.setState({
      orders: updatedOrders,
      total: newTotal
    });
  }

  removeModal = () => {
    this.setState({
      modal: false,
    });
  }

  displayModal = () => {
    const { props: { isUser, toastManager}, state: {orders} } = this;
    if (isUser & orders.length > 0) {
      this.setState({
        modal: true,
      });
    } else if(orders.length < 1) {
      toastManager.add('Cart is empty', {
        appearance: 'error',
        autoDismiss: true,
      });
    } else {
      history.push('/login');
    }
  }
  /**
   * @returns {JSX} returns JSX
  */
  render() {
    const { state: { orders, total, modal, isUser },
      props: {loading, foods, orderFood} } = this;
    const foodList = foods.map(food => {
      return (
        <div className="food" key={food.id}>
          <img src={food.image} alt="" className="foodImage" />
          <p className="foodItems">
            {food.food}
            &nbsp;
            ₦
            {food.price}
          </p>
          <button
            onClick={() => this.handleClick(food)}
            type="button"
            className="foodButton"
          >
              Add to Cart
          </button>
        </div>
      );
    });
    return (
      <div className="orderContainer">
        {modal?
          // eslint-disable-next-line
          <OrderConfirmation removeModal={this.removeModal} orders={orders} total={total} orderFood={orderFood} />:null}
        {loading?<Spinner />:null}
        <div className="foodContainer">
          {foods.length < 1? <h3>No Foood Available</h3>:null}
          {foodList}
          <OrderDetails
            orders={orders}
            total={total}
            displayModal={this.displayModal}
            handleRemove={this.handleRemove}
            orderFood={orderFood}
            isUser={isUser}
          />
        </div>
      </div>
    );
  }
}

Order.propTypes = {
  getFoods: PropTypes.func,
  loading: PropTypes.bool,
  orderFood: PropTypes.func,
  // eslint-disable-next-line
  foods: PropTypes.array,
  getUserFromToken: PropTypes.func,
  isUser: PropTypes.bool,
  toastManager: PropTypes.object.isRequired
};

Order.defaultProps = {
  foods: [],
  getFoods: () => {},
  loading: false,
  orderFood: () => {},
  getUserFromToken: () => {},
  isUser: false
};

export default withToastManager(Order);
