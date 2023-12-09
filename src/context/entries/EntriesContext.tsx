import { createContext } from "react";
import { Entry } from ".";

export interface ContextProps {
  entries: Entry[],
  addEntry: (payload: Entry) => void,
  updateEntry: (payload: Entry) => void,
  deleteEntry: (id: string) => void
};

export const EntriesContext = createContext<ContextProps>({
  entries: [],
  addEntry: () => { },
  updateEntry: () => { },
  deleteEntry: () => { }
});