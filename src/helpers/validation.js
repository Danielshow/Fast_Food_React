import * as helpers from './authHelpers';
/* eslint no-unused-expressions: 0 */
const validation = (data, state) => {
  const error = { ...state };
  // console.log(error);
  switch (data.type) {
    case 'email':
      !helpers.isEmailValid(data.content)
        ? error.email = true : delete (error.email);
      break;
    case 'password':
      !helpers.isPasswordValid(data.content)
        ? error.password = true : delete error.password;
      break;
    case 'name':
      !helpers.isNameValid(data.content)
        ? error.name = true : delete error.name;
      break;
    default:
      return error;
  }
  return error;
};

export default validation;
