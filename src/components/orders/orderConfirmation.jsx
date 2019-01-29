import React, { Component }from 'react';
import PropTypes from 'prop-types';
import { withToastManager } from 'react-toast-notifications';
import { isValidPhoneNumber, isAddressValid } from '../../helpers/authHelpers';
import Toast from '../layout/Toast';
import combineOrders from '../../helpers/orderHelpers';

/**
 * @class
 */
export class OrderConfirmation extends Component{
  /**
   * @constructor
   */
  constructor() {
    super();
    this.state = {
      address: '',
      phonenumber: '',
      perror: '',
      addressError: '',
      response: null
    };
  }
  /**
   * @param {*} nextProps
   * @memberof OrderConfirmation
   * @returns {void}
   */
  shouldComponentUpdate(nextProps) {
    const { success, toastManager, removeModal } = this.props;
    if(success !== nextProps.success && nextProps.success === true) {
      localStorage.removeItem('myOrders');
      toastManager.add('Order Successfull', {
        appearance: 'warning',
        autoDismiss: true,
      });
      removeModal();
      return true;
    }
    return true;
  }

/**
 * @param {*} e
 * @returns {object} - update state
 */
  handleChange = (e) => {
    if (e.target.id === 'phonenumber' && !isValidPhoneNumber(e.target.value)){
      this.setState({
        perror: true,
        [e.target.id]: e.target.value,
        response: 'Phone number must be 11 numbers'
      });
    } else if (e.target.id === 'address' && !isAddressValid(e.target.value)){
        this.setState({
          addressError: true,
          [e.target.id]: e.target.value,
          response: 'Invalid Address: Input a valid address'
        });
    } else if (e.target.id === 'phonenumber'){
      this.setState({
        perror: false,
        [e.target.id]: e.target.value,
        response: null
      });
    } else if (e.target.id === 'address'){
        this.setState({
          addressError: false,
          [e.target.id]: e.target.value,
          response: null
        });
    } else {
      this.setState({
        response: null,
        [e.target.id]: e.target.value
      });
    }
  }

  /**
 * @param {*} e
 * @returns {object} - update state
 */
handleSubmit = (e) => {
  e.preventDefault();
  const { state: {perror, addressError, phonenumber, address},
    props: {orders, orderFood}} = this;
  if (perror || addressError) {
    return false;
  }
  const order = combineOrders(orders, address, phonenumber);
  orderFood(order);
  return true;
}

/**
 * @function
 * @returns {JXS} -
 */
  render () {
    const { props: {removeModal, total},
      state: {address, response, phonenumber, perror, addressError}} = this;
    return (
      <div className="orderdetails">
        <div className="orderwidth">
          {perror || addressError?
            <Toast warning='Some fields are invalid' />:null }
          {/* eslint-disable-next-line */}
          <h1 className = 'close' onClick= {() => removeModal()}> x </h1>
          <h3>Order Details</h3>
          <h3>
            Total: &nbsp;
            {total}
          </h3>
          <form onSubmit={this.handleSubmit} className="orderDetailsContainer">
            <div className="input-field">
              <label htmlFor="address">Address</label>
              <br />
              <input
                type="text"
                id="address"
                value={address}
                onChange={this.handleChange}
                className={addressError?'inValid':''}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="phonenumber">Phone Number</label>
              <br />
              <input
                type="text"
                id="phonenumber"
                value={phonenumber}
                onChange={this.handleChange}
                className={perror?'inValid':''}
                required
              />
            </div>
            {response?<p className="errorMessage">{response}</p>:null}
            <button type='submit'> Order </button>
          </form>
          <p> Thanks for patronizing us</p>
        </div>
      </div>
    );
  }
}

OrderConfirmation.propTypes = {
  removeModal: PropTypes.func.isRequired,
  //eslint-disable-next-line
  orders: PropTypes.array,
  total: PropTypes.number.isRequired,
  orderFood: PropTypes.func,
  success: PropTypes.bool,
  toastManager: PropTypes.object
};

OrderConfirmation.defaultProps ={
  orderFood: () => {},
  success: false,
  toastManager: {}
};

export default withToastManager(OrderConfirmation);
