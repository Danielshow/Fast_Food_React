import React from 'react';
import { shallow } from 'enzyme';
import { UpdateFood } from '../UpdateFood';
import '../../../__test__/setup/setupEnzyme';

describe('###Admin Component', () => {
  let wrapper;
  const props = {
    handleModalState: jest.fn(),
    updateMenu: jest.fn(),
    getFoodsFromAPI: jest.fn(),
    toastManager: {
      add: jest.fn()
    },
  };
  beforeAll(() => {
    wrapper = shallow(<UpdateFood {...props} />);
  });

  it('should render UpdateFoodComppnent component', () => {
    expect(shallow(<UpdateFood {...props} />));
  });

  it('should render orderDetails css class', () => {
    const container = wrapper.find('.updateDetails');
    expect(container.length).toEqual(1);
  });

  it('should render Spinner Component if loading is true', () => {
    wrapper.setProps({
      loading: true,
    });
    const container = wrapper.find('Spinner');
    expect(container.length).toEqual(1);
  });

  it('should change state if food input field is changed', () => {
    const input = wrapper.find('input');
    input.at(1).simulate(
      'change', {target: {id: 'food', value: 'beans'}});
    expect(wrapper.state().food).toEqual('beans');
  });

  it('should change state if food input field is changed', () => {
    const input = wrapper.find('input');
    input.at(1).simulate(
      'change', {target: {files: ['files'], id: 'foodImage', value: 'beans'}});
    expect(wrapper.state().foodImage).toEqual('files');
  });

  it('should change state if food input field is invalid', () => {
    const input = wrapper.find('input');
    input.at(1).simulate(
      'change', {target: {id: 'food', value: '777'}});
    expect(wrapper.state().food).toEqual('777');
  });

  it('should change state if price input field is changed', () => {
    const input = wrapper.find('input');
    input.at(1).simulate(
      'change', {target: {id: 'price', value: '345'}});
    expect(wrapper.state().price).toEqual('345');
  });

  it('should return true when error occurs', () => {
    const nextProps = { updateError: true };
    wrapper.setProps({
      toastManager: {
        add: () => {},
      },
    });
    expect(wrapper.instance()
      .shouldComponentUpdate(nextProps.updateError)).toEqual(true);
  });

  it('should return false if there is no error', () => {
    const nextProps = { updateError: true };
    wrapper.setProps({
      toastManager: {
        add: () => {},
      },
    });
    expect(wrapper.instance().shouldComponentUpdate(nextProps)).toEqual(false);
  });

  it('should return true when success props is called', () => {
    const nextProps = { updateSuccess: true };
    wrapper.setProps({
      toastManager: {
        add: () => {},
      },
    });
    expect(wrapper.instance()
      .shouldComponentUpdate(nextProps.updateSuccess)).toEqual(true);
  });

  it('should return false when success props is called again', () => {
    const nextProps = { updateSuccess: true, updateError: false };
    wrapper.setProps({
      toastManager: {
        add: () => {},
      },
      error: false,
    });
    expect(wrapper.instance().shouldComponentUpdate(nextProps)).toEqual(false);
  });

  it('should submit if form is submitted', () => {
    wrapper.setProps({
      toastManager: {
        add: jest.fn(),
      },
    });
    const preventDefault = jest.fn();
    const form = wrapper.find('form');
    form.at(0).simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
  });

  it('should submit if form is submitted', () => {
    wrapper.setState({
      response: 'jjd'
    });
    wrapper.setProps({
      toastManager: {
        add: jest.fn(),
      }
    });
    const preventDefault = jest.fn();
    const form = wrapper.find('form');
    form.at(0).simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
  });

  it('should call onClick function when h1 is clicked', () => {
    const h1 = wrapper.find('h1');
    h1.at(0).simulate('click');
    expect(wrapper.props().handleModalState).toHaveBeenCalled;
  });
});
