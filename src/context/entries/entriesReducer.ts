import { EntriesState, Entry } from "./";

type EntriesActionType =
  { type: "[add-entry]", payload: Entry } |
  { type: "[update-entry]", payload: Entry } |
  { type: "[delete-entry]", payload: string };

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  switch (action.type) {
    case "[add-entry]":
      return {
        ...state,
        entries: [...state.entries, action.payload]
      };
    case "[update-entry]":
      const oldEntries = state.entries.filter((e) => e._id !== action.payload._id);
      return {
        ...state,
        entries: [...oldEntries, action.payload]
      };
    case "[delete-entry]":
      let entries = state.entries.filter((e) => e._id !== action.payload);
      return {
        ...state,
        entries: entries
      };
  }
};