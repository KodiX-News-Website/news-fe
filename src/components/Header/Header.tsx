import { Box } from "@mui/material";
import theme from "../../styles/muiTheme";

export const Header = () => {
  return (
    <Box
      component={"header"}
      sx={{
        height: "80px",
        backgroundColor: "transparent",
        borderBottom: `1px solid ${theme.palette.custom.grey}`,
      }}
    >
      Header
    </Box>
  );
};
