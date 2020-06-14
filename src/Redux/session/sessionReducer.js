import { combineReducers } from "redux";
import Type from "../actionType";

const user = (state = null, { type, payload }) => {
  switch (type) {
    case Type.LOGIN_SUCCESS:
      console.log(payload);
      return payload.user;

    case Type.LOGOUT:
      return null;

    default:
      return state;
  }
};

const authenticated = (state = false, { type }) => {
  switch (type) {
    case Type.LOGIN_SUCCESS:
      return true;

    case Type.LOGOUT:
      return false;

    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case Type.LOGIN_SUCCESS:
      return payload.token;

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case Type.LOGIN_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  user,
  authenticated,
  token,
  error,
});
