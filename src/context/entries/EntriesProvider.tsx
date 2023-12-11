import React from "react";
import { EntriesContext, Entry, entriesReducer } from ".";
import { v4 as uuid } from "uuid";

export interface EntriesState {
  entries: Entry[]
};

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuid(),
      createdAt: new Date(),
      description: "This is a description",
      status: "pending"
    },
    {
      _id: uuid(),
      createdAt: new Date(),
      description: "This is a description",
      status: "in-progress"
    },
    {
      _id: uuid(),
      createdAt: new Date(),
      description: "This is a description",
      status: "in-progress"
    },
    {
      _id: uuid(),
      createdAt: new Date(),
      description: "This is a description",
      status: "done"
    },
    {
      _id: uuid(),
      createdAt: new Date(),
      description: "This is a description",
      status: "done"
    },
  ]
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