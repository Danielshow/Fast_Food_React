import React from 'react';
import PropTypes from 'prop-types';


/**
 * @class
 */
const OrderDetails = ({orders, total, displayModal, handleRemove }) => {
  const orderedFood = orders.map(order => {
    return (
      <div className="orderedFood" key={order.id}>
        <div className="foodQuantity">
          {order.quantity}
          &nbsp;
          {order.food}
        </div>
        <div className='totalPrice'>
          {order.tprice}
          &nbsp;
          {/* eslint-disable-next-line */}
          <span className="remove" onClick={() => {handleRemove(order.id)}}>X</span>
        </div>

        <hr className="orderHR" />
      </div>
    );
  });
  return (
    <div className="ordersPanel">
      <div className="innerPanel">
        <h3> Cart </h3>
        <div className="myOrder">
          <hr className="orderHRUpper" />
          {orderedFood}
          <div className="food">
            <br />
            <div className='foodQuantity'>Total: </div>
            <div className='totalPrice'>
              ₦ &nbsp;
              {total}
            </div>
            <hr className="orderHR" />
          </div>
          <button
            type="submit"
            className="foodButton"
            onClick={() => displayModal()}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};


OrderDetails.propTypes = {
  // eslint-disable-next-line
  orders: PropTypes.array,
  total: PropTypes.number.isRequired,
  displayModal: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};


export default OrderDetails;
