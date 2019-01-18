import React from 'react';
import { shallow } from 'enzyme';
import { DisplayFoods } from '../displayFoods';
import '../../../__test__/setup/setupEnzyme';

describe('Display Food component', () => {
  let wrapper;
  const props = {
    foods: [],
    handleUpdate: jest.fn(),
    deleteMenu: jest.fn(),
    toastManager: {
      add: jest.fn()
    },
  };
  beforeAll(() => {
    wrapper = shallow(<DisplayFoods {...props} />);
  });

  it('should render DisplayFood component', () => {
    expect(shallow(<DisplayFoods {...props} />));
  });

  it('should call displayFoods css class', () => {
    const display = wrapper.find('.displayFoods');
    expect(display.length).toEqual(1);
  });

  it('should call confirmDialog component', () => {
    wrapper.setState({
      confirmDialog: true
    });
    const dialog = wrapper.find('ConfirmDialog');
    expect(dialog.length).toEqual(1);
  });

  it('should return true when deleteError is true', () => {
    const nextProps = { deleteError: true };
    expect(wrapper.instance()
      .shouldComponentUpdate(nextProps.deleteError)).toEqual(true);
  });

  it('should return false if deleteError is called again', () => {
    const nextProps = { deleteError: true };
    expect(wrapper.instance().shouldComponentUpdate(nextProps)).toEqual(false);
  });

  it('should return true when success props is called', () => {
    const nextProps = { deleteSuccess: true };
    expect(wrapper.instance()
      .shouldComponentUpdate(nextProps.deleteSuccess)).toEqual(true);
  });

  it('should return false when success props is called again', () => {
    const nextProps = { deleteSuccess: true, deleteError: false };
    wrapper.setProps({
      toastManager: {
        add: () => {},
      },
      error: false,
    });
    expect(wrapper.instance().shouldComponentUpdate(nextProps)).toEqual(false);
  });

  it('should create a table if foods is passed to props', () => {
    wrapper.setProps({
      foods: [
        {id: 1},
        {id: 2}
      ]
    });
    const tbody = wrapper.find('tbody');
    expect(tbody.length).toEqual(3);
  });

  it('should call handleDelete instance if td is clicked', () => {
    const td = wrapper.find('td');
    td.at(0).simulate('click');
    expect(wrapper.instance().handleDelete(1)).toHaveBeenCalled;
  });

  it('should mock handle state changed', () => {
    expect(wrapper.instance().handlePageChanged(1));
  });

  it('should mock confirmDelete instance', () => {
    expect(wrapper.instance().confirmDelete(1));
  });
});
