export * from "./EntriesContext";
export * from "./EntriesProvider";
export * from "./entriesReducer";

export type Entry = {
  _id: string,
  description: string,
  createdAt: number,
  status: EntryStatus
};

export type EntryStatus = "pending" | "in-progress" | "done";