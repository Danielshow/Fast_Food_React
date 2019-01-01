export const isPasswordValid = (password) => {
  const passwordRegex = /\s/;
  return !passwordRegex.test(password) && password.length >= 6;
};

export const isEmailValid = (email) => {
  // eslint-disable-next-line
  const emailRegex = /^([a-z_.!@#$%^&*0-9]{3,25})@([a-z]{3,20})\.([a-z]){3,7}(\.[a-z]{2,5})?$/i;
  return emailRegex.test(email);
};

export const isPasswordAndConfirmPasswordEqual = (
  password, confirmpassword) => {
  return password === confirmpassword;
};
