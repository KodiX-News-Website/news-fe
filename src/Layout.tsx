import { Box } from "@mui/material";
import { Circle, Header } from "./components";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <Header />
      <Circle width={545} height={573} top="112px" left="1200px" />
      <Circle width={735} height={772} top="238px" left="-404px" />
      <Box
        component="main"
        sx={{
          overflow: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          padding: "0 45px",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
