import { List, Paper } from "@mui/material";
import React from "react";
import { EntryCard } from "./EntryCard";
import { EntriesContext, EntryStatus } from "@/context/entries";

interface Props {
  status: EntryStatus
};

export const EntryList = ({ status }: Props) => {
  const { entries } = React.useContext(EntriesContext);

  const entriesByStatus = React.useMemo(() => (entries.filter(entry => entry.status === status)), [entries, status]);

  return (
    <div>
      <Paper sx={{ height: "calc(100vh - 250px)", overflow: "scroll", backgroundColor: "transparent", padding: "1px 5px" }}>
        <List sx={{ opacity: 1 }}>
          {
            entriesByStatus.map((entry) => (
              <EntryCard
                key={entry._id}
                entry={entry}
              />
            ))
          }
        </List>
      </Paper>
    </div>
  );
};