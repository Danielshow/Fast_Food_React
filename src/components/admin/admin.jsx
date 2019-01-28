import React, { Component } from 'react';
import { withToastManager } from 'react-toast-notifications';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import DisplayFoods from './displayFoods';
import UpdateFood from './UpdateFood';
/**
 * @class
 */
export class Admin extends Component {
  /**
   * @constructor
   */
  constructor() {
    super();
    this.state = {
      foodImage: '',
      food: '',
      price: '',
      modal: false,
      updateFood: ''
    };
  }
    /**
   * @description - display toast notification when error is true
   * @param {*} nextProps
   * @param {*} nextState
   * @returns {bool} - true or false
   */
  shouldComponentUpdate(nextProps) {
    const { error, toastManager, success, getFoodsFromAPI } = this.props;
    if (error !== nextProps.error && nextProps.error === true) {
      toastManager.add(`${nextProps.response}`, {
        appearance: 'warning',
        autoDismiss: true,
      });
      return false;
    } else if (success !== nextProps.success && nextProps.success === true) {
      toastManager.add(`${nextProps.response}`, {
        appearance: 'warning',
        autoDismiss: true,
      });
      this.setState({
        foodImage: '',
        food: '',
        price: '',
        response: null
      });
      getFoodsFromAPI();
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

  componentDidMount = async () => {
    const { getFoodsFromAPI, getUserFromToken } = this.props;
    await getUserFromToken(),
    await getFoodsFromAPI();
  }
  /**
   * @param {object} e
   * @returns {object} - return food
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const { props: {toastManager}, state: { response } } = this;
    if (response !== null) {
      toastManager.add('Invalid food supplied', {
        appearance: 'warning',
        autoDismiss: true,
      });
      return false;
    }
    const { postMenu } = this.props;
    const { food, foodImage, price} = this.state;
    const formData = new FormData();
    formData.append('food', food);
    formData.append('price', price);
    formData.append('foodImage', foodImage);
    return postMenu(formData);
  }

  handleModalState = () => {
    const {modal} = this.state;
    this.setState({
      modal: !modal,
    });
  }
  /**
   * @memberof Admin
   * @param {object} food
   * @returns {object} - updated state
   */
  handleUpdate = (food) => {
    this.setState({
      updateFood: food
    }, () => {
      this.handleModalState();
    });
  }
  /**
   * @returns {JSX} - Html template
   */
  render(){
    const { state: {food, price, response, modal, updateFood},
      props: { loading, foods, updateMenu, updateError, updateLoading,
        updateResponse, updateSuccess, deleteMenu, deleteLoading, isAdmin,
          deleteResponse, deleteError, deleteSuccess, getFoodsFromAPI }} = this;
    return isAdmin && (
      <div className='adminContainer'>
        <div className='admin--back' />
        {modal?(
          <UpdateFood
            handleModalState={this.handleModalState}
            food={updateFood}
            updateMenu={updateMenu}
            updateError={updateError}
            updateSuccess={updateSuccess}
            updateResponse={updateResponse}
            loading={updateLoading}
            getFoodsFromAPI={getFoodsFromAPI}
          />
          ):null}
        {loading || deleteLoading ?<Spinner />:''}
        <div className="adminHero">
          <h1>Admin Panel</h1>
        </div>
        <div className="admin-list">
          <div className="add-meal">
            <h3 className='add-meal-header'>Add Meal</h3>
            <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
              <div className="admin-input">
                <label htmlFor='food'>Food</label>
                <br />
                <input
                  type="text"
                  id='food'
                  value={food}
                  onChange={this.handleChange}
                  placeholder='Rice, Beans etc.'
                  required
                />
              </div>
              <p className='response'>{response}</p>
              <div className="admin-input">
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
              <div className="admin-input">
                <label htmlFor='foodImage'>Food Image</label>
                <br />
                <input
                  type="file"
                  id='foodImage'
                  className='fileInput'
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <button className='admin-btn' type='submit'> Add Food </button>
            </form>
          </div>
          <DisplayFoods
            foods={foods}
            handleUpdate={this.handleUpdate}
            deleteMenu={deleteMenu}
            deleteLoading={deleteLoading}
            deleteResponse={deleteResponse}
            deleteError={deleteError}
            deleteSuccess={deleteSuccess}
            getFoodsFromAPI={getFoodsFromAPI}
          />
        </div>
      </div>
    );
  }
}

Admin.propTypes = {
  toastManager: PropTypes.object.isRequired,
  postMenu: PropTypes.func,
  response: PropTypes.string,
  error: PropTypes.bool,
  loading: PropTypes.bool,
  success: PropTypes.bool,
  foods: PropTypes.array,
  getFoodsFromAPI: PropTypes.func.isRequired,
  updateMenu: PropTypes.func,
  updateError: PropTypes.bool,
  updateSuccess: PropTypes.bool,
  updateResponse: PropTypes.string,
  updateLoading: PropTypes.bool,
  deleteMenu: PropTypes.func.isRequired,
  deleteLoading: PropTypes.bool,
  deleteResponse: PropTypes.string,
  deleteError: PropTypes.bool,
  deleteSuccess: PropTypes.bool,
  getUserFromToken: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool
};

Admin.defaultProps = {
  postMenu: () => {},
  response: 'oops',
  error: false,
  loading: false,
  success: false,
  foods: [],
  updateMenu: () => {},
  updateError: false,
  updateSuccess: false,
  updateResponse: 'hut',
  updateLoading: false,
  deleteLoading: false,
  deleteResponse: 'ddj',
  deleteError: false,
  deleteSuccess: false,
  isAdmin: false
};

export default withToastManager(Admin);
