import { createContext } from "react";

export interface ContextProps {
  sidemenuOpen: boolean
};

export const UIContext = createContext<ContextProps>({
  sidemenuOpen: false
});