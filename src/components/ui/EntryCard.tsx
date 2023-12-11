import { Entry } from "@/context/entries";
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type Props = {
  entry: Entry
};

export const EntryCard = ({ entry }: Props) => {
  return (
    <Card sx={{ marginBottom: 1 }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>{entry.description}</Typography>
        </CardContent>

        <CardActions sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}>
          <Typography variant="body2">{dayjs(entry.createdAt).fromNow()}</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};