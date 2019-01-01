import { connect } from 'react-redux';
import SignIn from './signIn';
import { signInUser, clearResponse } from '../../store/actions/signIn';

export const mapStateToProps = state => {
  return {
    response: state.in.response,
    error: state.in.error,
    loading: state.in.loading,
    token: state.in.token
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    authSignInUser: (user) => dispatch(signInUser(user)),
    authClearResponse: () => dispatch(clearResponse()),
  };
};

const signInContainer = connect(
  mapStateToProps, mapDispatchToProps
)(SignIn);

export default signInContainer;
