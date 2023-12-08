import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import React from "react";

const menuItems: string[] = ["Inbox", "Starred", "Send email", "Drafts"];

export const Sidebar = () => {
  return (
    <Drawer
      anchor="left"
      open
      onClose={() => console.log("Cerrando")}
    >
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menu</Typography>
        </Box>

        <List>
          {
            menuItems.map((text, index) => (
              <ListItemButton key={text}>
                <ListItemIcon>
                  {
                    index % 2 ? (<InboxOutlinedIcon />) : (<MailOutlineOutlinedIcon />)
                  }
                </ListItemIcon>
                <ListItemText>
                  {text}
                </ListItemText>
              </ListItemButton>
            ))
          }
        </List>

        <Divider />

        <List>
          {
            menuItems.map((text, index) => (
              <ListItemButton key={text}>
                <ListItemIcon>
                  {
                    index % 2 ? (<InboxOutlinedIcon />) : (<MailOutlineOutlinedIcon />)
                  }
                </ListItemIcon>
                <ListItemText>
                  {text}
                </ListItemText>
              </ListItemButton>
            ))
          }
        </List>
      </Box>
    </Drawer>
  );
};