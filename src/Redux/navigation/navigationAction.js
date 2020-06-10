import Type from "../actionType";

export const menuToggle = (isOpen) => ({
  type: Type.MENU_TOGGLE,
  payload: {
    isOpen,
  },
});
