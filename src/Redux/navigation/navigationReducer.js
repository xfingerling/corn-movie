import Type from "../actionType";
import { combineReducers } from "redux";

const navigationReducer = (state = false, { type, payload }) => {
  switch (type) {
    case Type.MENU_TOGGLE:
      return payload.isOpen;

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  menuIsOpen: navigationReducer,
});

export default rootReducer;
