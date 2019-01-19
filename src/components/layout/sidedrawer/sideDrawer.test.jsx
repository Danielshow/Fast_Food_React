import React from 'react';
import { shallow } from 'enzyme';
import '../../../__test__/setup/setupEnzyme';
import SideDrawerSignIn from './SideDrawerSignin';
import SideDrawerSignout from './SideDrawerSignout';

describe('SideDrawe Component', () => {
  it('should render SideDrawerSignIn', () => {
    shallow(<SideDrawerSignIn />);
  });

  it('should render sidedrawersignout', () => {
    shallow(<SideDrawerSignout />);
  });

  it('should call onClick function', () => {
    const wrapper =  shallow(<SideDrawerSignout />);
    localStorage.clear = jest.fn();
    const link = wrapper.find('li');
    link.at(3).simulate('click');
    expect(localStorage.clear()).toHaveBeenCalled;
  });
});
