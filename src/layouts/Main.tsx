import { Navbar, Sidebar } from "@/components/ui";
import { Box } from "@mui/material";
import Head from "next/head";
import React from "react";

type Props = {
  title?: string,
  children?: React.ReactNode
};

export const MainLayout = ({ title, children }: Props) => {
  return (
    <Box
      sx={{
        flexFlow: 1
      }}
    >
      <Head>
        <title>{title ? `${title} | OpenJira` : "OpenJira"}</title>
      </Head>

      <Navbar />
      <Sidebar />

      <Box sx={{ paddingTop: "10px 20px" }}>
        {children}
      </Box>
    </Box>
  );
};