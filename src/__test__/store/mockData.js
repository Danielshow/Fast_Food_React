const mockData = {
  authResponse: {
    data: {
      data: {
        token: 'dfhgjhkjluiytrewrdtfghj',
      },
      message: 'Successfully created'
    }
  },
  signinData: {
    email: 'danie@yahoo.com',
    password: 'opeyemi'
  },
  tokenResponse: {
    data: {
      data: [
        {id: 1}
      ]
    }
  },
  mockError400: new Error('Request failed with status code 400'),
  mockError: {
    response: {
      data: {
        message: 'Request failed with status code 400'
      }
    }
  }
};
export default mockData;
