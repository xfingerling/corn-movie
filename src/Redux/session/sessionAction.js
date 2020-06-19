import Type from "../actionType";

/*
 * LOGIN
 */

export const loginRequest = () => ({
  type: Type.LOGIN_REQUEST,
});

export const loginSuccess = (response) => ({
  type: Type.LOGIN_SUCCESS,
  payload: response,
});

export const loginError = (error) => ({
  type: Type.LOGIN_ERROR,
  payload: { error },
});

/*
 * SIGNUP
 */

export const signupRequest = () => ({
  type: Type.SIGNUP_REQUEST,
});

export const signupSuccess = (response) => ({
  type: Type.SIGNUP_SUCCESS,
  payload: response,
});

export const signupError = (error) => ({
  type: Type.SIGNUP_ERROR,
  payload: { error },
});

/*
 * LOGOUT
 */

export const logOut = () => ({
  type: Type.LOGOUT,
});
