import { Box } from "@mui/material";
import theme from "@/styles/muiTheme";
import { Link, NavLink } from "react-router-dom";
import { LogoIcon } from "@/assets/icons";
import { pagesList } from "@/constants";

export const Header = () => {
  return (
    <Box
      component={"header"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "80px",
        px: 6,
        backgroundColor: "transparent",
        borderBottom: `1px solid #0000001A`,
      }}
    >
      <Box
        component={"ul"}
        sx={{
          display: "flex",
          width: "fit-content",
        }}
      >
        {pagesList.map(({ id, name, href }) => (
          <Box key={id} component={"li"}>
            <NavLink
              to={href}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive
                  ? theme.palette.common.black
                  : theme.palette.custom.grey,
                fontWeight: isActive ? 600 : 400,
                lineHeight: "1.5rem",
                display: "inline-block",
                width: "80px",
                textAlign: "center",
              })}
            >
              {name}
            </NavLink>
          </Box>
        ))}
      </Box>

      <Link to="/">
        <LogoIcon />
      </Link>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          component={Link}
          to="/sign-in"
          sx={{
            border: `1px solid #0000001A`,
            backgroundColor: theme.palette.common.white,
            color: theme.palette.common.black,
            p: "12.5px 32.5px",
            borderRadius: "24px",
            mr: 2,
            transition: "box-shadow 0.3s ease",
            
            "&:hover": {
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
            },
          }}
        >
          Log in
        </Box>
        <Box
          component={Link}
          to="/sign-up"
          sx={{
            border: `1px solid ${theme.palette.custom.btnGreen}`,
            backgroundColor: theme.palette.custom.btnGreen,
            color: theme.palette.common.white,
            p: "12.5px 32.5px",
            borderRadius: "24px",
            transition: "all 0.3s ease-in-out",

            "&:hover": {
              transition: "all 0.3s ease-in-out",
              backgroundColor: theme.palette.common.white,
              color: theme.palette.custom.btnGreen,
            },
          }}
        >
          Sign Up
        </Box>
      </Box>
    </Box>
  );
};
