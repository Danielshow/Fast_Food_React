import {
  connect
} from 'react-redux';
import SignUp from './signUp';
import {
  signUpUser
} from '../../store/actions/signup';

export const mapStateToProps = state => {
  return {
    response: state.up.response,
    error: state.up.error,
    loading: state.up.loading,
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    signUpUser: (user) => dispatch(signUpUser(user))
  };
};

const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export default SignUpContainer;
