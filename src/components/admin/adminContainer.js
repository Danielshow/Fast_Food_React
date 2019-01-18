import { connect } from 'react-redux';
import { bindActionCreators }  from 'redux';
import Admin from './admin';
import * as actionCreators from '../../store/actions/admin';

export const mapStateToProps = state => {
  return {
    ...state.admin,
    ...state.adminDelete,
    ...state.adminUpdate
  };
};

export const
  mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);

export default AdminContainer;
