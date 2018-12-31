import React from 'react';
import { shallow } from 'enzyme';
import '../setup/setupEnzyme';
import Spinner from '../../components/layout/Spinner';

describe('Spinner Component', () => {
  it('should render Spinner', () => {
    shallow(<Spinner />);
  });

  it('should find class spinner', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper.find('.spinner').length).toBe(1);
  });
});
