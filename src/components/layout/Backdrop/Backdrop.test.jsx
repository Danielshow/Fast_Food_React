import React from 'react';
import { shallow } from 'enzyme';
import '../../../__test__/setup/setupEnzyme';
import BackDrop from './Backdrop';

describe('Backdrop Component', () => {
  const props = {
    click: jest.fn()
  };
  it('should render Backdrop', () => {
    shallow(<BackDrop {...props} />);
  });

  it('should find class backdrop', () => {
    const wrapper = shallow(<BackDrop {...props} />);
    expect(wrapper.find('.backdrop').length).toBe(1);
  });
});
