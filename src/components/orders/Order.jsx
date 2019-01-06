import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';


/**
 * @class
 */
class Order extends Component {
    /**
   * @description - Get menu from API
   * @returns {list} menu of foods
   */
  componentDidMount() {
    const { getFoods } = this.props;
    getFoods();
  }
  /**
   * @returns {JSX} returns JSX
   */
  render() {
    const {loading, foods} = this.props;
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
          <button type="button" className="foodButton">Add to Cart</button>
        </div>
      );
    });
    return (
      <div className="orderContainer">
        {loading?<Spinner />:null}
        <div className="foodContainer">
          {foods.length < 1? <h3>No Foood Available</h3>:null}
          {foodList}
        </div>
        <div className="ordersPanel">
          <div className="innerPanel">
            <h3> Cart </h3>
          </div>
        </div>
      </div>
    );
  }
}

Order.propTypes = {
  getFoods: PropTypes.func,
  loading: PropTypes.bool,
  // eslint-disable-next-line
  foods: PropTypes.array
};

Order.defaultProps = {
  foods: [],
  getFoods: () => {},
  loading: false
};

export default Order;
