import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/layout/Header';
import '../setup/setupEnzyme';

describe('Header renders successfully', () => {
  it('renders', () => {
    shallow(<Header />);
  });

  it('Renders Navbar Page', () => {
    const wrapper = shallow(<Header />);
    const header = wrapper.find('Navbar');
    expect(header.length).toBe(1);
  });

  it('Renders signoutlink', () => {
    const wrapper = shallow(<Header />);
    const header = wrapper.find('SignInLink');
    expect(header.length).toBe(1);
  });
});
