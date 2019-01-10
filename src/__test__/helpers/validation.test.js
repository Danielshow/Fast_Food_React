import validation from '../../helpers/validation';

describe('##SignupValidations', () => {
  it('should return error object if an invalid email is supplied', () => {
    expect(validation({ type: 'email', content: 'daniels@gmail' }, {})).toEqual(
      { email: true },
    );
  });

  it('should return empty error object if a valid email is supplied', () => {
    expect(validation({ type: 'email', content: 'daniels@gmail.com' }, {}))
      .toEqual({ });
  });

  it('should return error object if an invalid password is supplied', () => {
    expect(validation({ type: 'password', content: 'danie' }, {})).toEqual(
      { password: true },
    );
  });

  it('should return empty error object if a valid password is supplied', () => {
    expect(validation({ type: 'password', content: 'daniel123*' }, {})).toEqual(
      { },
    );
  });

  it('should return error object if an invalid name is supplied', () => {
    expect(validation({ type: 'name', content: 'dn' }, {})).toEqual(
      { name: true },
    );
  });

  it('should return empty error object if a valid name is supplied', () => {
    expect(validation({ type: 'name', content: 'dan' }, {})).toEqual(
      { },
    );
  });

  it('should return empty object if an invalid case is supplied', () => {
    expect(validation({ type: 'lastname', content: 'dan' }, {})).toEqual(
      { },
    );
  });
});
