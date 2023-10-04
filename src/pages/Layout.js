import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ToggleTheme from "../components/ToggleTheme";

const styles = {
  display: "flex",
  justifyContent: "center",
  mt: "7px",
};

function Layout() {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
      }}
    >
      <Navigation />
      <Box sx={styles}>
        <ToggleTheme />
      </Box>
      <Outlet />
      <Box sx={{ flexGrow: 1 }} />
    </Stack>
  );
}

export default Layout;
