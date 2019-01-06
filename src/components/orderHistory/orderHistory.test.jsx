import React from 'react';
import { shallow } from 'enzyme';
import '../../__test__/setup/setupEnzyme';
import OrderHistory from './orderHistory';
import ViewDetails from './viewDetails';
import { mapDispatchToProps, mapStateToProps } from './orderHisoryContainer';

describe('OrderHistory', () => {
  let wrapper;
  beforeEach(() => {
  wrapper = shallow(<OrderHistory />);
  });


  it('should renders orderHistory', () => {
    shallow(<OrderHistory />);
  });

  it('should render orderContainer class', () => {
    const container = wrapper.find('.orderContainer');
    expect(container.length).toEqual(1);
  });

  it('should call getOrderHistory function when isUserGotten is true', () => {
    const wrap = shallow(<OrderHistory />);
    wrap.setProps({isUserGotten: true});
  });
});

describe('Order History container', () => {
  const state = {
    ordHistory: {}
  };
  it('mapStateToProps and mapDipatchToProps', () => {
    expect(typeof mapStateToProps(state)).toEqual('object');
    expect(typeof mapDispatchToProps(state)).toEqual('object');
  });
});

describe('#View Details', () => {
  let wrapper, orders;
  beforeEach(() => {
    orders = {
      quantity: '1,8,9',
      food: 'llll,kkk,kkk'
    };
    wrapper = shallow(<ViewDetails orders={orders} removeModal={() => {}} />);
  });

  it('should render View Details', () => {
    shallow(<ViewDetails orders={orders} removeModal={() => {}} />);
  });

  it('should call on onClick function if h1 is clicked', () => {
    const input = wrapper.find('h1');
    input.simulate('click');
    expect(wrapper.prop('removeModal')).toBeCalled;
  });

});
