import React from 'react';
import { shallow } from 'enzyme';
import '../setup/setupEnzyme';
import DrawerToggleButton from '../../components/layout/DrawerToggleButton';

describe('DrawerToggleButton Component', () => {
  const props = {
    sideDrawerEventClick: jest.fn()
  };
  it('should render DrawerToggleButton', () => {
    shallow(<DrawerToggleButton {...props} />);
  });

  it('should find class spinner', () => {
    const wrapper = shallow(<DrawerToggleButton {...props} />);
    expect(wrapper.find('button').length).toBe(1);
  });
});
