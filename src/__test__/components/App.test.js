import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';
import '../setup/setupEnzyme';

describe('App renders successfully', () => {
  it('renders', () => {
    shallow(<App />);
  });

  it('Finds h1', () => {
    const wrapper = shallow(<App />);
    const header = wrapper.find('h1');
    expect(header.length).toBe(1);
  });
});
