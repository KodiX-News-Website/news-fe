import { Box } from "@mui/material";
import theme from "@/styles/muiTheme";

interface CircleProps {
  width: number;
  height: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

export const Circle = ({ width, height, ...props }: CircleProps) => (
  <Box
    sx={{
      position: "absolute",
      display: "block",
      width: `${width}px`,
      height: `${height}px`,
      borderRadius: "50%",
      backgroundColor: theme.palette.custom.bgGreen,
      filter: "blur(100px)",
      ...props,
    }}
  />
);
