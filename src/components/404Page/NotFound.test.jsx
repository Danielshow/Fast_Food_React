import React from 'react';
import { shallow } from 'enzyme';
import '../../__test__/setup/setupEnzyme';
import NotFound from './NotFound';


describe('### NotFound Component', () => {

  it('should display ordercontainer class', () => {
    const wrapper = shallow(<NotFound />);
    const container = wrapper.find('div');
    expect(container.length).toEqual(2);
  });
});
