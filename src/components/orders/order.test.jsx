import React from 'react';
import { shallow } from 'enzyme';
import '../../__test__/setup/setupEnzyme';
import Orders from './Order';
import {mapStateToProps, mapDispatchToProps} from './OrderContainer';
import OrderDetails from './OrderDetails';
import OrderConfirmation from './orderConfirmation';
import combineOrders from '../../helpers/orderHelpers';

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
    expect(container.length).toEqual(1);
  });

  it('should call orderConfirmation function when it loads', () => {
    wrapper.setState({modal: true});
    const container = wrapper.find('OrderConfirmation');
    expect(container.length).toEqual(1);
  });

  it('should call function when it loads', () => {
    wrapper.setProps({'getFoods': ()=>{}});
    expect(wrapper.props().getFoods).toBeCalled;
  });

  it('should return button if food is supplied', () => {
    wrapper.setProps({foods: [{id: 1, }, {id: 2}]});
    const container = wrapper.find('button');
    expect(container.length).toEqual(2);
  });

  it('should simulate button click if food is supplied', () => {
    const handleClick = jest.fn();
    wrapper.setProps({foods: [{id: 1, }, {id: 2}]});
    const container = wrapper.find('button');
    container.at(0).simulate('click');
    expect(handleClick).toBeCalled;
  });

  it('should food css class', () => {
    wrapper.setProps({
      foods: [
        {id: 1},
        {id: 2}
      ]
    });

    const container = wrapper.find('.food');
    expect(container.length).toEqual(2);
  });

  it('should find foodItems css class', () => {
    wrapper.setProps({
      foods: [
        {id: 1},
        {id: 2}
      ]
    });

    const container = wrapper.find('.foodImage');
    expect(container.length).toEqual(2);
  });

  it('should find foodItems css class', () => {
    wrapper.setProps({
      foods: [
        {id: 1},
        {id: 2}
      ],
      onClick: jest.fn()
    });

    const container = wrapper.find('button');
    container.at(0).simulate('click');
    expect(wrapper.props().onClick).toBeCalled;
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
});

describe('### OrderDetails component', () => {
  let wrapper;
  const orders = [{id:1}, {id:2}];
  const total = 0;
  const handleRemove=() => {};
  const displayModal =() => {};
  beforeAll(() => {
    wrapper = shallow(<OrderDetails
      orders={orders}
      total={total}
      displayModal={displayModal}
      handleRemove={handleRemove}
    />);
  });

  it('should simulate click', () => {
    const button = wrapper.find('button');
    button.at(0).simulate('click');
    expect(wrapper.prop('displayModal')).toBeCalled;
  });

  it('should simulate span click', () => {
    const span = wrapper.find('span.remove');
    span.at(0).simulate('click');
    expect(wrapper.props().handleRemove).toBeCalled;
  });
});


describe('## Order comfirmation component', () => {
  let wrapper;
  const removeModal = ()=>{};
  const total = 40;
  const orderFood = jest.fn();
  beforeAll(() => {
    wrapper = shallow(
      <OrderConfirmation
        removeModal={removeModal}
        total={total}
        orderFood={orderFood}
      />);
  });

  it('should display Toast notification if some fields atre invalid', () =>{
    wrapper.setState({
      perror: true,
      addressError: true
    });

    const toast = wrapper.find('Toast');
    expect(toast.length).toEqual(1);
  });

  it('should render Header', () => {
    const header = wrapper.find('h3');
    expect(header.length).toEqual(2);
  });

  it('should render removeModal props when h1 is clicked', () => {
    const header = wrapper.find('h1');
    header.at(0).simulate('click');
    expect(wrapper.props('removeModal')).toBeCalled;
  });

  it('should change the state if invalid phonenumber field is supplied', () => {
    const input = wrapper.find('input');
    input.at(0).simulate(
      'change', {target: {id: 'phonenumber', value: '09888888888888'}});
    expect(wrapper.state().phonenumber).toEqual('09888888888888');
    expect(wrapper.state().perror).toEqual(true);
  });

  it('should change the state if phonenumber field is changed', () => {
    const input = wrapper.find('input');
    input.at(0).simulate(
      'change', {target: {id: 'phonenumber', value: '09888888888'}});
    expect(wrapper.state().phonenumber).toEqual('09888888888');
    expect(wrapper.state().perror).toEqual(false);
  });

  it('should change the state after address field is changed', () => {
    const input = wrapper.find('input');
    input.at(0).simulate(
      'change', {target: {id: 'address', value: 'hhhhh'}});
    expect(wrapper.state().address).toEqual('hhhhh');
    expect(wrapper.state().addressError).toEqual(false);
  });

  it('should change the state if address field is invalid', () => {
    const input = wrapper.find('input');
    input.at(0).simulate(
      'change', {target: {id: 'address', value: 'hhhh'}});
    expect(wrapper.state().address).toEqual('hhhh');
    expect(wrapper.state().addressError).toEqual(true);
  });

  it('should change the state after invalid address field', () => {
    const input = wrapper.find('input');
    input.at(0).simulate(
      'change', {target: {id: 'address', value: 'hhhh'}});
    expect(wrapper.state().addressError).toEqual(true);
  });

  it('should change the state after invalid id', () => {
    const input = wrapper.find('input');
    input.at(0).simulate(
      'change', {target: {id: 'addres', value: 'hhhh'}});
    expect(wrapper.state().addres).toEqual('hhhh');
  });

  it('should change the state after invalid phonenumber field', () => {
    const input = wrapper.find('input');
    input.at(0).simulate(
      'change', {target: {id: 'phonenumber', value: '900900'}});
    expect(wrapper.state().perror).toEqual(true);
  });

  it('should return error message if error response is not null', () => {
    wrapper.setState({
      response: 'yeah'
    });

    const paragraph = wrapper.find('p');
    expect(paragraph.length).toEqual(2);
  });


  it('should return error if submit button is clicked', () => {
    wrapper.setState({perror: true, addressError: true});
    const fakeEvent = { preventDefault: () => {}};
    const form = wrapper.find('form').simulate('submit', fakeEvent);
    expect(form).toBeCalled;
  });

  it('should submit if submit button is clicked', () => {
    wrapper.setState({address: 'ddj', phonenumber: 'dkdjdj'});
    const fakeEvent = { preventDefault: () => {}};
    wrapper.find('form').simulate('submit', fakeEvent);
    expect(combineOrders([],
      wrapper.state().address, wrapper.state().phonenumber)).toBeCalled;
    expect(wrapper.props().orderFood).toBeCalled;
  });
});

describe('### OrderDetails component', () => {
  let wrapper;
  const orders = [{id:1}, {id:2}];
  const total = 0;
  const handleRemove=() => {};
  const displayModal =() => {};
  beforeAll(() => {
    wrapper = shallow(<OrderDetails
      orders={orders}
      total={total}
      displayModal={displayModal}
      handleRemove={handleRemove}
    />);
  });

  it('should simulate click', () => {
    const button = wrapper.find('button');
    button.at(0).simulate('click');
    expect(wrapper.prop('displayModal')).toBeCalled;
  });

  it('should simulate span click', () => {
    const span = wrapper.find('span.remove');
    span.at(0).simulate('click');
    expect(wrapper.props().handleRemove).toBeCalled;
  });
});


describe('## Order comfirmation component', () => {
  let wrapper;
  const removeModal = ()=>{};
  const total = 40;
  const orderFood = jest.fn();
  beforeAll(() => {
    wrapper = shallow(
      <OrderConfirmation
        removeModal={removeModal}
        total={total}
        orderFood={orderFood}
      />);
  });

  it('should display Toast notification if some fields atre invalid', () =>{
    wrapper.setState({
      perror: true,
      addressError: true
    });

    const toast = wrapper.find('Toast');
    expect(toast.length).toEqual(1);
  });

  it('should render Header', () => {
    const header = wrapper.find('h3');
    expect(header.length).toEqual(2);
  });

  it('should render removeModal props when h1 is clicked', () => {
    const header = wrapper.find('h1');
    header.at(0).simulate('click');
    expect(wrapper.props('removeModal')).toBeCalled;
  });

  it('should change the state if invalid phonenumber field is supplied', () => {
    const input = wrapper.find('input');
    input.at(0).simulate(
      'change', {target: {id: 'phonenumber', value: '09888888888888'}});
    expect(wrapper.state().phonenumber).toEqual('09888888888888');
    expect(wrapper.state().perror).toEqual(true);
  });

  it('should change the state if phonenumber field is changed', () => {
    const input = wrapper.find('input');
    input.at(0).simulate(
      'change', {target: {id: 'phonenumber', value: '09888888888'}});
    expect(wrapper.state().phonenumber).toEqual('09888888888');
    expect(wrapper.state().perror).toEqual(false);
  });

  it('should change the state after address field is changed', () => {
    const input = wrapper.find('input');
    input.at(0).simulate(
      'change', {target: {id: 'address', value: 'hhhhh'}});
    expect(wrapper.state().address).toEqual('hhhhh');
    expect(wrapper.state().addressError).toEqual(false);
  });

  it('should change the state if address field is invalid', () => {
    const input = wrapper.find('input');
    input.at(0).simulate(
      'change', {target: {id: 'address', value: 'hhhh'}});
    expect(wrapper.state().address).toEqual('hhhh');
    expect(wrapper.state().addressError).toEqual(true);
  });

  it('should change the state after invalid address field', () => {
    const input = wrapper.find('input');
    input.at(0).simulate(
      'change', {target: {id: 'address', value: 'hhhh'}});
    expect(wrapper.state().addressError).toEqual(true);
  });

  it('should change the state after invalid id', () => {
    const input = wrapper.find('input');
    input.at(0).simulate(
      'change', {target: {id: 'addres', value: 'hhhh'}});
    expect(wrapper.state().addres).toEqual('hhhh');
  });

  it('should change the state after invalid phonenumber field', () => {
    const input = wrapper.find('input');
    input.at(0).simulate(
      'change', {target: {id: 'phonenumber', value: '900900'}});
    expect(wrapper.state().perror).toEqual(true);
  });

  it('should return error message if error response is not null', () => {
    wrapper.setState({
      response: 'yeah'
    });

    const paragraph = wrapper.find('p');
    expect(paragraph.length).toEqual(2);
  });


  it('should return error if submit button is clicked', () => {
    wrapper.setState({perror: true, addressError: true});
    const fakeEvent = { preventDefault: () => {}};
    const form = wrapper.find('form').simulate('submit', fakeEvent);
    expect(form).toBeCalled;
  });

  it('should submit if submit button is clicked', () => {
    wrapper.setState({address: 'ddj', phonenumber: 'dkdjdj'});
    const fakeEvent = { preventDefault: () => {}};
    wrapper.find('form').simulate('submit', fakeEvent);
    expect(combineOrders([],
      wrapper.state().address, wrapper.state().phonenumber)).toBeCalled;
    expect(wrapper.props().orderFood).toBeCalled;
  });
});
