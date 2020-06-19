import sessionAPI from "../../services/session-api";

import {
  loginRequest,
  loginSuccess,
  loginError,
  signupRequest,
  signupSuccess,
  signupError,
} from "../session/sessionAction";

export const login = (credentials) => (dispatch) => {
  dispatch(loginRequest());

  sessionAPI
    .login(credentials)
    .then((response) => {
      console.log(response);

      dispatch(loginSuccess(response));
    })
    .catch((error) => {
      console.log(error);
      dispatch(loginError(error));
    });
};

export const signup = (credentials) => (dispatch) => {
  dispatch(signupRequest());

  sessionAPI
    .login(credentials)
    .then((response) => {
      console.log(response);

      dispatch(signupSuccess(response));
    })
    .catch((error) => {
      console.log(error);
      dispatch(signupError(error));
    });
};
