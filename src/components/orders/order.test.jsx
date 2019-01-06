import React from 'react';
import { shallow } from 'enzyme';
import '../../__test__/setup/setupEnzyme';
import Orders from './Order';
import {mapStateToProps, mapDispatchToProps} from './OrderContainer';

describe('### Order Component', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Orders />);
  });

  it('should display ordercontainer class', () => {
    const container = wrapper.find('.orderContainer');
    expect(container.length).toEqual(1);
  });

  it('should return spinner if loading is true', () => {
    wrapper.setProps({'loading': true});
    const container = wrapper.find('Spinner');
    expect(container.length).toEqual(1);
  });

  it('return H3 if foods props is empty', () => {
    wrapper.setProps({foods: []});
    const container = wrapper.find('h3');
    expect(container.length).toEqual(2);
  });

  it('should call getProps function when it loads', () => {
    wrapper.setProps({'getFoods': ()=>{}});
    expect(wrapper.prop.getFoods).toBeCalledOnce;
  });
});

describe('##Order Container', () => {
  const state = {
    ord: {
      foods: [],
      loading: false
    }
  };

  it('should return mapStateToProps', () => {
    expect(typeof mapStateToProps(state)).toEqual('object');
  });

  it('should return mapDispatchToProps', () => {
    expect(typeof mapDispatchToProps(state)).toEqual('object');
  });

  it('should return mapDispatchToProps', () => {
    expect(mapDispatchToProps(state)).toHaveProperty('getFoods');
  });
});
