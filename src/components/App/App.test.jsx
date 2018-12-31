import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import '../../__test__/setup/setupEnzyme';

describe('App renders successfully', () => {
  it('renders', () => {
    shallow(<App />);
  });

  it('Renders Landing Page', () => {
    const wrapper = shallow(<App />);
    const header = wrapper.find('Header');
    expect(header.length).toBe(1);
  });
});
