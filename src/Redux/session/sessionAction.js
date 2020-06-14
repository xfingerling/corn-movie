import Type from "../actionType";

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

export const logOut = () => ({
  type: Type.LOGOUT,
});
