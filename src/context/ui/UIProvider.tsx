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
  return (
    <UIContext.Provider value={{ sidemenuOpen: false }}>
      {children}
    </UIContext.Provider>
  );
};