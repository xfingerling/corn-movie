import Type from "../actionType";

const navigationReducer = (state = false, { type, payload }) => {
  switch (type) {
    case Type.MENU_TOGGLE:
      return !payload.isOpen;

    default:
      return state;
  }
};

export { navigationReducer };
