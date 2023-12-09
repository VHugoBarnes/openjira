import React from "react";
import { EntriesContext, Entry, entriesReducer } from ".";

export interface EntriesState {
  entries: Entry[]
};

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: []
};

type Props = {
  children: React.ReactNode,
};

export const EntriesProvider = ({ children }: Props) => {
  const [state, dispatch] = React.useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addEntry = (payload: Entry) => {
    dispatch({ type: "[add-entry]", payload });
  };

  const updateEntry = (payload: Entry) => {
    dispatch({ type: "[update-entry]", payload });
  };

  const deleteEntry = (id: string) => {
    dispatch({ type: "[delete-entry]", payload: id });
  };

  return (
    <EntriesContext.Provider value={{ ...state, addEntry, updateEntry, deleteEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};