import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withToastManager } from 'react-toast-notifications';
import Spinner from '../layout/Spinner';
/**
 * @class UpdateFood
 */
export class UpdateFood extends Component{
  /**
   *Creates an instance of UpdateFood.
   * @memberof UpdateFood
   */
  constructor() {
    super();
    this.state = {
      foodImage: '',
      id: '',
      food: '',
      price: '',
      response: null
    };
  }
/**
 * @memberof UpdateFood
 * @returns {object} - updated state
 */
componentDidMount() {
    const { food } = this.props;
    this.setState({
      id: food.id,
      food: food.food,
      price: food.price
    });
  }
      /**
   * @description - display toast notification when error is true
   * @param {*} nextProps
   * @param {*} nextState
   * @returns {bool} - true or false
   */
  shouldComponentUpdate(nextProps) {
    const { updateError, toastManager, updateSuccess } = this.props;
    if (updateError !== nextProps.updateError
      && nextProps.updateError === true) {
      toastManager.add(`${nextProps.updateResponse}`, {
        appearance: 'error',
        autoDismiss: true,
      });
      return false;
    } else if (updateSuccess !== nextProps.updateSuccess
        && nextProps.updateSuccess === true) {
      toastManager.add(`${nextProps.updateResponse}`, {
        appearance: 'success',
        autoDismiss: true,
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      this.setState({
        foodImage: '',
        food: '',
        price: '',
        response: null
      });
      return false;
    }
    return true;
  }

    /**
   * @param {object} e
   * @returns {object} - updated state
   */
  handleChange = (e) => {
    if (e.target.id === 'foodImage') {
      this.setState({
        foodImage : e.target.files[0]
      });
    } else if (e.target.id === 'food' && (e.target.value.length < 3
        || !isNaN(e.target.value))) {
        this.setState({
          response: 'Invalid food supplied',
          [e.target.id]: e.target.value
        });
    } else if(e.target.id === 'price') {
      this.setState({
        [e.target.id]: e.target.value
      });
    }
    else {
      this.setState({
        [e.target.id]: e.target.value,
        response: null
      });
    }
  }

    /**
   * @param {object} e
   * @returns {object} - return food
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const { props: {toastManager, updateMenu}, state:
      { response, id, food, foodImage, price } } = this;
    if (response !== null) {
      toastManager.add('Invalid food supplied', {
        appearance: 'warning',
        autoDismiss: true,
      });
      return false;
    }
    const formData = new FormData();
    formData.append('food', food);
    formData.append('price', price);
    formData.append('foodImage', foodImage);
    return updateMenu(formData, id);
  }
  /**
   * @returns {JSX} - html template
   * @memberof UpdateFood
   */
  render() {
    const { props: {handleModalState, loading},
      state: {food, price} } = this;
    return (
      <div className="orderdetails updateDetails">
        {loading? <Spinner />:''}
        <div className="orderwidth">
          {/* eslint-disable-next-line */}
          <h1 className = 'close' onClick= {() => handleModalState()}> x </h1>
          <h3 className='text-center'>Update Food</h3>
          <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
            <div className='admin-input'>
              <label htmlFor='food'>Food</label>
              <br />
              <input
                id='food'
                type='text'
                value={food}
                placeholder='Rice, Beans etc.'
                onChange={this.handleChange}
                required
              />
            </div>
            <div className='admin-input'>
              <label htmlFor='price'>Price</label>
              <br />
              <input
                type="number"
                id='price'
                value={price}
                onChange={this.handleChange}
                placeholder='1000, 2000 etc.'
                required
              />
            </div>
            <div className='admin-input'>
              <label htmlFor='food'>Food Image</label>
              <br />
              <input
                type="file"
                id='foodImage'
                className='fileInput'
                onChange={this.handleChange}
              />
            </div>
            <button className='btn' type='submit'> Update Food </button>
          </form>
        </div>
      </div>
    );
  }
}

UpdateFood.propTypes = {
  handleModalState: PropTypes.func.isRequired,
  toastManager: PropTypes.object.isRequired,
  updateError: PropTypes.bool,
  updateSuccess: PropTypes.bool,
  updateResponse: PropTypes.string,
  food: PropTypes.object,
  updateMenu: PropTypes.func.isRequired,
  loading: PropTypes.bool
};

UpdateFood.defaultProps = {
  updateResponse: 'oops',
  updateError: false,
  updateSuccess: false,
  food: {},
  loading: false

};

export default withToastManager(UpdateFood);
