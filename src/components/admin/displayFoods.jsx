import React, {Component} from 'react';
import Pager from 'react-pager';
import PropTypes from 'prop-types';
import { withToastManager } from 'react-toast-notifications';
import ConfirmDialog from '../layout/ConfirmDialog';

/**
 * @class
 */
export class DisplayFoods extends Component{
  /**
   * @constructor
   */
  constructor(){
    super();
    this.state = {
      id: '',
      total:       4,
      current:     0,
      visiblePage: 3,
      confirmDialog: false,
    };
  }

  /**
   * @param {*} nextProps
   * @returns {object} -
   */
  componentWillReceiveProps(nextProps) {
    const { foods } = this.props;
    if (foods !== nextProps.foods) {
      this.setState({
        total: nextProps.foods.length/7,
      });
    }
  }

      /**
   * @description - display toast notification when error is true
   * @param {*} nextProps
   * @param {*} nextState
   * @returns {bool} - true or false
   */
  shouldComponentUpdate(nextProps) {
    const { props: {
      deleteError, toastManager, deleteSuccess, getFoodsFromAPI },
      state: confirmDialog } = this;
    if (deleteError !== nextProps.deleteError
      && nextProps.deleteError === true) {
      toastManager.add(`${nextProps.deleteResponse}`, {
        appearance: 'error',
        autoDismiss: true,
      });
      return false;
    } else if (deleteSuccess !== nextProps.deleteSuccess
        && nextProps.deleteSuccess === true) {
      toastManager.add(`${nextProps.deleteResponse}`, {
        appearance: 'success',
        autoDismiss: true,
      });
      getFoodsFromAPI();
      this.setState({
        confirmDialog: !confirmDialog,
      });
      return false;
    }
    return true;
  }

  /**
   * @param {*} newPage
   * @returns {object} - updated state
   */
  handlePageChanged = (newPage) => {
    this.setState({ current : newPage });
  }

    /**
   * @param {*} id
   * @returns {object} - updated state
   */
  handleDelete = (id) => {
    const {confirmDialog} = this.state;
    this.setState({
      confirmDialog: !confirmDialog,
      id
    });
  }

      /**
   * @param {*} id
   * @returns {void} -
   */
  confirmDelete = async (id) => {
    const { deleteMenu } = this.props;
    await deleteMenu(id);
  }
    /**
   * @param {*} food
   * @returns {JSX} - Html template for table
   */
  renderFoodList = () => {
    const { props: {foods, handleUpdate}, state: {current}} = this;
    let i = current * 7;
    return (foods || []).slice(current*7, (current + 1) * 7).map((food) => {
      i += 1;
      return (
        <tbody key={food.id}>
          <tr>
            <td>
              {i}
            </td>
            <td>{food.food}</td>
            <td>{food.price}</td>
            {/* eslint-disable-next-line */}
            <td className='delete' onClick={() => {this.handleDelete(food.id)}}>X</td>
            {/* eslint-disable-next-line */}
            <td className='update' onClick={() => {handleUpdate(food)}}>🛠</td>
          </tr>
        </tbody>
      );
    });
  }

/**
 * @returns {JSX} - Html Template
 * @memberof DisplayFoods
 */
render() {
    const { props: { foods }, state:
      {total, current, visiblePage, confirmDialog, id} } = this;
    return (
      <div className='displayFoods'>
        {foods ? (
          <table>
            <tbody>
              <tr>
                <th> ID</th>
                <th>food</th>
                <th>Price</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </tbody>
            {this.renderFoodList()}
          </table>
          ): null}
        {confirmDialog?(
          <ConfirmDialog>
            <h3>Are you sure you want to delete? </h3>
            {/* eslint-disable-next-line */}
            <div className='btn' onClick={() => {this.confirmDelete(id)}}> Go on</div>
            {/* eslint-disable-next-line */}
            <div className='btn del' onClick={() => {this.handleDelete(id)}} >Never</div>
          </ConfirmDialog>
          ):null}
        <div className='pager'>
          <Pager
            total={total}
            current={current}
            visiblePages={visiblePage}
            titles={{ first: '👈', last: '👉' }}
            onPageChanged={this.handlePageChanged}
          />
        </div>
      </div>
    );
  }
}

DisplayFoods.propTypes = {
  foods: PropTypes.array,
  handleUpdate: PropTypes.func.isRequired,
  deleteMenu: PropTypes.func.isRequired,
  deleteError: PropTypes.bool,
  deleteSuccess: PropTypes.bool,
  deleteResponse: PropTypes.string,
  toastManager: PropTypes.object.isRequired,
  getFoodsFromAPI: PropTypes.func
};

DisplayFoods.defaultProps = {
  deleteError: false,
  deleteSuccess: false,
  deleteResponse: 'djdj',
  foods: [],
  getFoodsFromAPI:() => {}
};

export default withToastManager(DisplayFoods);
