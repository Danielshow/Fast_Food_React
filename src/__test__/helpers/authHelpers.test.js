import { isPasswordValid, isEmailValid } from '../../helpers/authHelpers';
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
    const email = isPasswordValid('danie.com');
    expect(email).toBe(false);
  });
});
