import { UIState } from ".";

type UIActionType =
  {
    type: "[ui-open-sidebar]"
  } |
  {
    type: "[ui-close-sidebar]"
  };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "[ui-close-sidebar]":
      return {
        ...state,
        sidemenuOpen: false
      };
    case "[ui-open-sidebar]":
      return {
        ...state,
        sidemenuOpen: true
      };
    default:
      return state;
  }
};