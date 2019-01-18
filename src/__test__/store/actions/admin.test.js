import moxios from 'moxios';
import * as actionType from '../../../store/actions/actionType';
import * as adminActions from '../../../store/actions/admin';

const dispatchFn = jest.fn();
const url = 'https://fast-foodd.herokuapp.com/api/v1';
describe('### Admin Actions', () => {
  beforeAll(() => {
    moxios.install();
  });

  afterAll(() => {
    moxios.uninstall();
  });

  it('Should perform an action if postMenustart is called', () => {
    const res = {
      data: {
        data: {}
      }
    };
    expect(adminActions.postMenuSuccess(res).type).toEqual(
      actionType.POST_MENU_SUCCESS);
    expect(adminActions.postMenuSuccess(res)).toHaveProperty('type');
    expect(adminActions.postMenuSuccess(res).payload).toEqual(res);
    expect(adminActions.postMenuSuccess(res)).toHaveProperty('payload');
  });

  it('should perform an action if postMenuStart is called', () => {
    expect(adminActions.postMenuStart().type).toEqual(
      actionType.POST_MENU_START);
    expect(adminActions.postMenuStart()).toHaveProperty('type');
  });

  it('should perform an action if postMenuFailure is called', () => {
    expect(adminActions.postMenuFailure('jjj').type).toEqual(
      actionType.POST_MENU_ERROR);
    expect(adminActions.postMenuFailure('kkk')).toHaveProperty('type');
  });

  it('Should perform an action if adminMenuSuccess is called', () => {
    const res = {
      data: {
        data: {}
      }
    };
    expect(adminActions.adminMenuSuccess(res).type).toEqual(
      actionType.ADMIN_MENU_SUCCESS);
    expect(adminActions.adminMenuSuccess(res)).toHaveProperty('type');
    expect(adminActions.adminMenuSuccess(res).payload).toEqual({});
    expect(adminActions.adminMenuSuccess(res)).toHaveProperty('payload');
  });

  it('should perform an action if adminMenuStart is called', () => {
    expect(adminActions.adminMenuStart().type).toEqual(
      actionType.ADMIN_MENU_START);
    expect(adminActions.adminMenuStart()).toHaveProperty('type');
  });

  it('should perform an action if orderFoodFailure is called', () => {
    expect(adminActions.adminMenuFailure('err').type).toEqual(
      actionType.ADMIN_MENU_FAIL);
    expect(adminActions.adminMenuFailure('err')).toHaveProperty('type');
  });

  it('Should perform an action if updateMenuSucess is called', () => {
    const res = {
      data: {
        data: {}
      }
    };
    expect(adminActions.updateMenuSuccess(res).type).toEqual(
      actionType.UPDATE_MENU_SUCCESS);
    expect(adminActions.updateMenuSuccess(res)).toHaveProperty('type');
    expect(adminActions.updateMenuSuccess(res).payload).toEqual(res)
    expect(adminActions.updateMenuSuccess(res)).toHaveProperty('payload');
  });

  it('should perform an action if updateMenuStart is called', () => {
    expect(adminActions.updateMenuStart().type).toEqual(
      actionType.UPDATE_MENU_START);
    expect(adminActions.updateMenuStart()).toHaveProperty('type');
  });

  it('should perform an action if updateFoodFailure is called', () => {
    expect(adminActions.updateMenuFailure('err').type).toEqual(
      actionType.UPDATE_MENU_FAILURE);
    expect(adminActions.updateMenuFailure('err')).toHaveProperty('type');
  });

  it('Should perform an action if deleteMenuSuccess is called', () => {
    const res = {
      data: {
        data: {}
      }
    };
    expect(adminActions.deleteMenuSuccess(res).type).toEqual(
      actionType.DELETE_MENU_SUCCESS);
    expect(adminActions.deleteMenuSuccess(res)).toHaveProperty('type');
    expect(adminActions.deleteMenuSuccess(res).payload).toEqual(res)
    expect(adminActions.deleteMenuSuccess(res)).toHaveProperty('payload');
  });

  it('should perform an action if deleteMenustart is called', () => {
    expect(adminActions.deleteMenuStart().type).toEqual(
      actionType.DELETE_MENU_START);
    expect(adminActions.deleteMenuStart()).toHaveProperty('type');
  });

  it('should perform an action if deleteMenuFailure is called', () => {
    expect(adminActions.deleteMenuFailure('err').type).toEqual(
      actionType.DELETE_MENU_FAILURE);
    expect(adminActions.deleteMenuFailure('err')).toHaveProperty('type');
  });

  it('should perform an action if getAdmin is called', () => {
    expect(adminActions.getAdmin().type).toEqual(
      actionType.GET_ADMIN);
    expect(adminActions.getAdmin('err')).toHaveProperty('type');
  });

  it('should call the postMenu start dispatch function', async () => {
    const food = {};
    const mockResponse = {
      response: {
        data: {
          message: 'Ops',
        },
      },
    };
    window.location.reload = jest.fn();

    moxios.stubRequest(`${url}/menu`, mockResponse);
    await adminActions.postMenu(food)(dispatchFn);
    expect(dispatchFn).toBeCalled();
    expect(dispatchFn).toBeCalledWith({
      type: actionType.POST_MENU_START
    });
  });

  it('should call the postMenusuccess dispatch function', async () => {
    const food = {};
    const mockResponse = {
      response: {
        data: {
          message: 'Ops',
        },
      },
    };

    moxios.stubRequest(`${url}/menu`, {
      status: 200,
      response: mockResponse
    });
    await adminActions.postMenu(food)(dispatchFn);
    expect(dispatchFn).toBeCalledWith({
      type: actionType.POST_MENU_SUCCESS,
      payload: mockResponse.me
    }, );
  });

  it('should call the postMenuFailure dispatch function', async () => {
    const food = {};

    moxios.stubRequest(`${url}/menu`, {
      status: 400
    });
    await adminActions.postMenu(food)(dispatchFn);
    expect(dispatchFn).toBeCalled();
  });



  it('should call the getFoodsFromAPI start dispatch function', async () => {
    const mockResponse = {
      response: {
        data: {
          message: 'Ops',
        },
      },
    };

    moxios.stubRequest(`${url}/menu`, mockResponse);
    await adminActions.getFoodsFromAPI()(dispatchFn);
    expect(dispatchFn).toBeCalled();
    expect(dispatchFn).toBeCalledWith({
      type: actionType.ADMIN_MENU_START
    });
  });

  it('should call the getFoodsFromAPI success dispatch function', async () => {
    const mockResponse = {
      response: {
        data: {
          message: 'Ops',
        },
      },
    };

    moxios.stubRequest(`${url}/menu`, {
      status: 200,
      response: mockResponse
    });
    await adminActions.getFoodsFromAPI()(dispatchFn);
    expect(dispatchFn).toBeCalledWith({
      type: actionType.ADMIN_MENU_SUCCESS,
      payload: mockResponse.response.data
    }, );
  });

  it('should call the postMenuFailure dispatch function', async () => {
    const food = {};

    moxios.stubRequest(`${url}/menu`, {
      status: 400
    });
    await adminActions.postMenu(food)(dispatchFn);
    expect(dispatchFn).toBeCalled();
  });



  it('should call the updateMenu start dispatch function', async () => {
    const mockResponse = {
      response: {
        data: {
          message: 'Ops',
        },
      },
    };

    const menu = {};

    moxios.stubRequest(`${url}/menu/${1}`, mockResponse);
    await adminActions.updateMenu(menu, 1)(dispatchFn);
    expect(dispatchFn).toBeCalled();
    expect(dispatchFn).toBeCalledWith({
      type: actionType.UPDATE_MENU_START
    });
  });

  it('should call the updateMenu success dispatch function', async () => {
    const mockResponse = {
      response: {
        data: {
          message: 'Ops',
        },
      },
    };
    const menu = {};
    moxios.stubRequest(`${url}/menu/${1}`, {
      status: 200,
      response: mockResponse
    });
    await adminActions.updateMenu(menu, 1)(dispatchFn);
    expect(dispatchFn).toBeCalledWith({
      type: actionType.UPDATE_MENU_SUCCESS,
      payload: mockResponse.response.data.me
    }, );
  });

  it('should call the updateMenuFailure dispatch function', async () => {
    const food = {};

    moxios.stubRequest(`${url}/menu/${1}`, {
      status: 400
    });
    await adminActions.updateMenu(food, 1)(dispatchFn);
    expect(dispatchFn).toBeCalled();
  });


  it('should call the deleteMenuStart dispatch function', async () => {
    const mockResponse = {
      response: {
        data: {
          message: 'Ops',
        },
      },
    };

    moxios.stubRequest(`${url}/menu/${1}`, mockResponse);
    await adminActions.deleteMenu(1)(dispatchFn);
    expect(dispatchFn).toBeCalled();
    expect(dispatchFn).toBeCalledWith({
      type: actionType.DELETE_MENU_START
    });
  });

  it('should call the deleteMenu success dispatch function', async () => {
    const mockResponse = {
      response: {
        data: {
          message: 'Ops',
        },
      },
    };
    moxios.stubRequest(`${url}/menu/${1}`, {
      status: 200,
      response: mockResponse
    });
    await adminActions.deleteMenu(1)(dispatchFn);
    expect(dispatchFn).toBeCalledWith({
      type: actionType.DELETE_MENU_SUCCESS,
      payload: mockResponse.response.data.me
    }, );
  });

  it('should call the updateMenuFailure dispatch function', async () => {

    moxios.stubRequest(`${url}/menu/${1}`, {
      status: 400
    });
    await adminActions.deleteMenu(1)(dispatchFn);
    expect(dispatchFn).toBeCalled();
  });
});
