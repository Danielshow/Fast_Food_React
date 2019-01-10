import {
  isPasswordValid, isEmailValid,
  isValidPhoneNumber, isAddressValid } from '../../helpers/authHelpers';
import '../setup/setupEnzyme';

describe('isPasswordValid Validation', () => {
  it ('should return true when valid password is supplied', () => {
    const password = isPasswordValid('dhdhhdhdhdh');
    expect(password).toBe(true);
  });

  it ('should return false when password is invalid', () => {
    const password = isPasswordValid('   ');
    expect(password).toBe(false);
  });
});

describe('isEmailValid Validation', () => {
  it ('should return true when valid email is supplied', () => {
    const email = isEmailValid('danielshoton@yahoo.com');
    expect(email).toBe(true);
  });

  it ('should return false when email is invalid', () => {
    const email = isEmailValid('danie.com');
    expect(email).toBe(false);
  });
});

describe('isValidPhoneNumber Validation', () => {
  it ('should return true when valid phonenumber is supplied', () => {
    const number = isValidPhoneNumber('08097666555');
    expect(number).toBe(true);
  });

  it ('should return false when valid phonenumber is supplied', () => {
    const number = isValidPhoneNumber('0897666555');
    expect(number).toBe(false);
  });
});

describe('Address Validation', () => {
  it ('should return true when valid address is supplied', () => {
    const address = isAddressValid('ikorodu');
    expect(address).toBe(true);
  });

  it ('should return true when valid address is supplied', () => {
    const address = isAddressValid('rodu');
    expect(address).toBe(false);
  });
});
