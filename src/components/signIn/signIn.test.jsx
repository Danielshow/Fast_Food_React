import React from 'react';
import { shallow } from 'enzyme';
import '../../__test__/setup/setupEnzyme';
import SignIn from './signIn';
import SignInForm from './signInForm';
import {mapDispatchToProps, mapStateToProps } from './signInContainer';

describe('Renders SignIn Container', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignIn />);
  });

  it ('renders', () => {
    shallow(<SignIn />);
  });

  it('renders spinner if loading is true', () => {
    wrapper.setProps({'loading': true});
    const spinner = wrapper.find('Spinner');
    expect(spinner.length).toBe(1);
  });

  it('renders no spinner if loading is false', () => {
    wrapper.setProps({'loading': false});
    const spinner = wrapper.find('Spinner');
    expect(spinner.length).toBe(0);
  });
});

describe('Renders Signin Form', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SignInForm />);
  });

  it('should change the state after email field is changed', () => {
    const input = wrapper.find('input');
    input.at(0).simulate(
      'change', {target: {id: 'email', value: 'danielshotonwa@yahoo.com'}});
    expect(wrapper.state().email).toEqual('danielshotonwa@yahoo.com');
  });

  it('should change the emailError state if email invalid', () => {
    const input = wrapper.find('input');
    input.at(0).simulate(
      'change', {target: {id: 'email', value: 'danielshotonwayahoo.com'}});
    expect(wrapper.state().email).toEqual('danielshotonwayahoo.com');
    expect(wrapper.state().emailError).toEqual(true);
  });

  it('should change the state after password field is changed', () => {
    const input = wrapper.find('input');
    input.at(1).simulate(
      'change', {target: {id: 'password', value: 'daniel'}});
    expect(wrapper.state().password).toEqual('daniel');
    expect(wrapper.state().emailError).toEqual(false);
  });

  it('should submit if submit button is clicked', () => {
    const fakeEvent = { preventDefault: () => {}};
    const form = wrapper.find('form').simulate('submit', fakeEvent);
    expect(form).toBeCalled;
  });

  it('check if errorMessage is called', () => {
    wrapper.setProps({'error': true});
    const error = wrapper.find('.errorMessage');
    expect(error.length).toBe(1);
  });
});

describe('SignIn Container', () => {
  const state={
    in: {}
  };

  it('should return an object', () => {
    expect(typeof mapStateToProps(state)).toEqual('object');
  });

  it('should return an object', () => {
    expect(typeof mapDispatchToProps(state)).toEqual('object');
  });
});
