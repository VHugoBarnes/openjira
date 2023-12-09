import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { UIContext } from "@/context/ui";

export const Navbar = () => {
  const { openSideMenu } = React.useContext(UIContext);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton onClick={() => { openSideMenu(); }}>
          <MenuOutlinedIcon />
        </IconButton>

        <Typography variant="h6">
          OpenJira
        </Typography>
      </Toolbar>
    </AppBar>
  );
};