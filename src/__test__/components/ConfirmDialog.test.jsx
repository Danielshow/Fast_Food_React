import React from 'react';
import { shallow } from 'enzyme';
import '../setup/setupEnzyme';
import ConfirmDialog from '../../components/layout/ConfirmDialog';

describe('ConfirmDialog Component', () => {
  const props = {
    children: jest.fn()
  };
  it('should render DrawerToggleButton', () => {
    shallow(<ConfirmDialog {...props} />);
  });

  it('should find class orderwidth', () => {
    const wrapper = shallow(<ConfirmDialog {...props} />);
    expect(wrapper.find('.orderwidth').length).toBe(1);
  });
});
