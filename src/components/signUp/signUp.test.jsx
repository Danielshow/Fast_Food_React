import React from 'react';
import { shallow } from 'enzyme';
import '../../__test__/setup/setupEnzyme';
import SignUp from './signUp';
import SignUpForm from './signUpForm';
import { mapDispatchToProps, mapStateToProps } from './signUpContainer';

describe('Renders SignUp', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<SignUp />);
  });

  it('renders signup page',() =>{
    wrapper;
  });

  it('renders signupContainer class', () => {
    const container = wrapper.find('.signUpContainer');
    expect(container.length).toBe(1);
  });

  it('renders SignUp form ', () => {
    shallow(<SignUpForm />);
  });

  it('renders SignUp class ', () => {
    const container = wrapper.find('.signupForm');
    expect(container.length).toBe(1);
  });

  it('renders Spinner component', () => {
    wrapper.setProps({'loading': true});
    const container = wrapper.find('Spinner');
    expect(container.length).toBe(1);
  });
});

describe('Signup Container', () => {
  const state={
    up: {}
  };

  it('should return an object', () => {
    expect(typeof mapStateToProps(state)).toEqual('object');
  });

  it('should return an object', () => {
    expect(typeof mapDispatchToProps(state)).toEqual('object');
  });
});

describe('Renders SignUpForm Form', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SignUpForm />);
  });

  it('should change the state after email field is changed', () => {
    const input = wrapper.find('input');
    input.at(0).simulate(
      'change', {target: {id: 'email', value: 'danielshotonwa@yahoo.com'}});
    expect(wrapper.state().email).toEqual('danielshotonwa@yahoo.com');
  });

  it('should change the state after name field is changed', () => {
    const input = wrapper.find('input');
    input.at(1).simulate(
      'change', {target: {id: 'name', value: 'daniel'}});
    expect(wrapper.state().name).toEqual('daniel');
  });

  it('should change the state after confirm password field is changed', () => {
    const input = wrapper.find('input');
    wrapper.setState({password: 'daniel'});
    input.at(1).simulate(
      'change', {target: {id: 'confirmpassword', value: 'daniel'}});
    expect(wrapper.state().confirmpassword).toEqual('daniel');
  });

  it('should change the state after address field is changed', () => {
    const input = wrapper.find('input');
    input.at(1).simulate(
      'change', {target: {id: 'address', value: 'ikorosu'}});
    expect(wrapper.state().address).toEqual('ikorosu');
  });

  it('should change the state after password field is changed', () => {
    const input = wrapper.find('input');
    input.at(1).simulate(
      'change', {target: {id: 'password', value: 'daniel'}});
    expect(wrapper.state().password).toEqual('daniel');
  });

  it('should submit if submit button is clicked', () => {
    wrapper.setProps({SignUpUser: () => {}});
    const fakeEvent = { preventDefault: () => {}};
    const form = wrapper.find('form').simulate('submit', fakeEvent);
    expect(form).toBeCalled;
    expect(wrapper.props().SignUpUser).toBeCalled;
  });

  it('check if errorMessage is called', () => {
    wrapper.setProps({'error': true});
    const error = wrapper.find('.errorMessage');
    expect(error.length).toBe(1);
  });
});
