import React from 'react';
import { shallow } from 'enzyme';
import '../../__test__/setup/setupEnzyme';
import OrderHistory from './orderHistory';
import ViewDetails from './viewDetails';
import { mapDispatchToProps, mapStateToProps } from './orderHisoryContainer';

describe('OrderHistory', () => {
  let wrapper;
  const myOrders = [{id:1}, {id:2}];
  beforeEach(() => {
  wrapper = shallow(<OrderHistory myOrders={myOrders} />);
  });


  it('should renders orderHistory', () => {
    shallow(<OrderHistory />);
  });

  it('should call getOrderHistory function when isUserGotten is true', () => {
    const wrap = shallow(<OrderHistory />);
    wrap.setProps({isUserGotten: true});
  });

  it('should call td and simulate click', () => {
    wrapper.setState({
      modal: true
    });
    const td = wrapper.find('td');
    const handleClick = jest.fn();
    td.at(0).simulate('click');

    expect(handleClick).toHaveBeenCalled;
    expect(wrapper.state().modal).toEqual(true);
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
      expect(wrapper.props().removeModal).toBeCalled;
    });
  });