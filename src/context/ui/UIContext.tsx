import { createContext } from "react";

export interface ContextProps {
  sidemenuOpen: boolean,
  openSideMenu: Function,
  closeSideMenu: Function,
};

export const UIContext = createContext<ContextProps>({
  sidemenuOpen: false,
  openSideMenu: () => { },
  closeSideMenu: () => { },
});