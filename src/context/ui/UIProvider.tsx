import React, { FC, useReducer } from "react";
import { UIContext, uiReducer } from ".";

export interface UIState {
  sidemenuOpen: boolean
};

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
};

type Props = {
  children: React.ReactNode
};

export const UIProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: "[ui-open-sidebar]" });
  };

  const closeSideMenu = () => {
    dispatch({ type: "[ui-close-sidebar]" });
  };

  return (
    <UIContext.Provider value={{ ...state, openSideMenu, closeSideMenu }}>
      {children}
    </UIContext.Provider>
  );
};