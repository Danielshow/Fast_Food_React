import React from 'react';
import { shallow } from 'enzyme';
import { Admin } from '../admin';
import { mapStateToProps, mapDispatchToProps} from '../adminContainer';
import '../../../__test__/setup/setupEnzyme';

describe('###Admin Component', () => {
  let wrapper;
  const props = {
    getUserFromToken: jest.fn(),
    deleteMenu: jest.fn(),
    getFoodsFromAPI: jest.fn(),
    toastManager: {
      add: jest.fn()
    },
  };
  beforeAll(() => {
    wrapper = shallow(<Admin {...props} />);
  });

  it('should render admin component', () => {
    expect(shallow(<Admin {...props} />));
  });

  it('should render adminContainer css class', () => {
    wrapper.setProps({
      isAdmin: true,
    });
    const container = wrapper.find('.adminContainer');
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
    const nextProps = { error: true };
    wrapper.setProps({
      toastManager: {
        add: () => {},
      },
    });
    expect(wrapper.instance()
      .shouldComponentUpdate(nextProps.error)).toEqual(true);
  });

  it('should return false if there is no error', () => {
    const nextProps = { error: true };
    wrapper.setProps({
      toastManager: {
        add: () => {},
      },
    });
    expect(wrapper.instance().shouldComponentUpdate(nextProps)).toEqual(false);
  });

  it('should return true when success props is called', () => {
    const nextProps = { success: true };
    wrapper.setProps({
      toastManager: {
        add: () => {},
      },
    });
    expect(wrapper.instance()
      .shouldComponentUpdate(nextProps.success)).toEqual(true);
  });

  it('should return false when success props is called again', () => {
    const nextProps = { success: true, error: false };
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

  it('should mock handle update class properties', () => {
    expect( typeof wrapper.instance().handleUpdate('ooo'));
  });
});

describe('##Admin Container', () => {
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
