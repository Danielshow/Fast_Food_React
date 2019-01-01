import * as actionType from '../../../store/actions/actionType';
import * as signUpActions from '../../../store/actions/signup';

describe('SignUp Actions', () => {
  it('Should return an action if SignUpSuccess is called', () => {
    const wrapper= signUpActions.signUpSuccess('me');
    expect(wrapper).toHaveProperty('type');
    expect(wrapper.payload).toEqual('me');
    expect(wrapper.type).toEqual(actionType.SIGNUP_SUCCESS);
  });

  it('Should return an action if SignUpFail is called', () => {
    const wrapper= signUpActions.signUpFail('error');
    expect(wrapper).toHaveProperty('type');
    expect(wrapper.payload).toEqual('error');
    expect(wrapper.type).toEqual(actionType.SIGNUP_FAIL);
  });

  it('Should return an action if SignUpStart is called', () => {
    const wrapper= signUpActions.signUpStart('error');
    expect(wrapper).toHaveProperty('type');
    expect(wrapper.type).toEqual(actionType.SIGNUP_START);
  });

  it('Should return an action if SignUpUser is called', () => {
    const wrapper= signUpActions.signUpUser({});
    expect(typeof wrapper).toBe('function');
  });
});


