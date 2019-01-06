import React from 'react';
import PropTypes from 'prop-types';

const viewDetails = ({orders, removeModal}) => {
  const quantity = orders.quantity.split(',');
  const foods = orders.food.split(',');
  const foodList = foods.map((food) => {
    const index = foods.indexOf(food);
    return (
      <tbody key={food}>
        <tr>
          <td>{food}</td>
          <td>{quantity[index]}</td>
        </tr>
      </tbody>
    );
  });
  return (
    <div className="orderdetails">
      <div className="orderwidth">
        {/* eslint-disable-next-line */}
        <h1 className = 'close' onClick= {() => removeModal()}> x </h1>
        <h3>Order Details</h3>
        <table>
          <tbody>
            <tr>
              <th>Name of Food</th>
              <th>Quantity</th>
            </tr>
          </tbody>
          {foodList}
        </table>
        <h3>
          Total: &nbsp;
          {orders.price}
        </h3>
        <p> Thanks for patronizing us</p>
      </div>
    </div>
  );
};

viewDetails.propTypes = {
  //eslint-disable-next-line
  orders: PropTypes.object,
  removeModal: PropTypes.func.isRequired
};

export default viewDetails;
