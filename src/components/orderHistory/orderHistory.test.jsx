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

  it('should call handleClick', () => {
    const wrap = wrapper.find('td.view');
    wrap.at(0).simulate('click');
    expect(wrapper.instance().handleClick()).toHaveBeenCalled;
  });

  it('should call Spinner', () => {
    wrapper.setProps({loading: true});
    const spinner = wrapper.find('Spinner');
    expect(spinner.length).toEqual(1);
  });

  it('should call h3', () => {
    wrapper.setProps({orderFailure: true});
    const spinner = wrapper.find('h3');
    expect(spinner.length).toEqual(1);
  });


  it('should call removeModal', () => {
    wrapper.instance().removeModal();
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
    let wrapper;
    const props = {
      orders: {
        quantity: '1,8,9',
        food: 'llll,kkk,kkk'
      },
      removeModal: jest.fn()
    };
    beforeEach(() => {
      wrapper = shallow(<ViewDetails {...props} />);
    });

    it('should render View Details', () => {
      shallow(<ViewDetails {...props} />);
    });

    it('should call on onClick function if h1 is clicked', () => {
      const input = wrapper.find('h1');
      input.simulate('click');
      expect(wrapper.props().removeModal).toBeCalled;
    });
  });
