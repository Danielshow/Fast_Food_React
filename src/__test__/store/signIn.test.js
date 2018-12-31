import * as actionType from '../../store/actions/actionType';
import * as signInActions from '../../store/actions/signIn';

describe('SignIn Actions', () => {
  it('should return an action if postignin is called', () => {
    const response = 'some-text';
    expect(signInActions.postSignIn(response)).toHaveProperty('type');
    expect(signInActions.postSignIn(response)).toHaveProperty('payload');
    expect(signInActions.postSignIn(response).payload).toEqual(response);
    expect(signInActions.postSignIn(response).type).toEqual(
      actionType.AUTH_SUCCESS);
  });

  it('should return an action if loginFailed is called', () => {
    const error = 'some-text';
    expect(signInActions.loginFailed(error)).toHaveProperty('type');
    expect(signInActions.loginFailed(error)).toHaveProperty('payload');
    expect(signInActions.loginFailed(error).payload).toEqual(error);
    expect(signInActions.loginFailed(error).type).toEqual(
      actionType.AUTH_FAIL);
  });

  it('should return an action if authStart is called', () => {
    expect(signInActions.authStart()).toHaveProperty('type');
    expect(signInActions.authStart().type).toEqual(
      actionType.AUTH_START);
  });

  it('should return an action if authLogout is called', () => {
    expect(signInActions.authLogout()).toHaveProperty('type');
    expect(signInActions.authLogout().type).toEqual(
      actionType.AUTH_LOGOUT);
  });

  it('should return an action if logoutUser is called', () => {
    expect(signInActions.logoutUser()).toHaveBeenCalled;
  });

  it('should return an action if signInUser is called',() => {
    expect(signInActions.signInUser()).toHaveBeenCalled;
    expect(typeof signInActions.signInUser()).toBe('function');
  });

  it('should return an action if clearResponse is called', () => {
    expect(signInActions.clearResponse()).toHaveProperty('type');
    expect(signInActions.clearResponse().type).toEqual(
      actionType.AUTH_CLEAR_RESPONSE);
  });
});
