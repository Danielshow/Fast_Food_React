import React from 'react';
import { shallow } from 'enzyme';
import '../setup/setupEnzyme';
import Toast from '../../components/layout/Toast';

describe('Toast Component', () => {
  it('should render Toast', () => {
    shallow(<Toast warning='oye' />);
  });

  it('should find class toastContainer', () => {
    const wrapper = shallow(<Toast warning='jjdjd' />);
    expect(wrapper.find('.toastContainer').length).toBe(1);
  });
});
