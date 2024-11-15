import { Box } from "@mui/material";
import { Header } from "./components";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          overflow: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          padding: "10px 15px",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
