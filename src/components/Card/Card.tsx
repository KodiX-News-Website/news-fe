import { truncate } from "@/utils";
import { Box, Typography } from "@mui/material";
import theme from "@/styles/muiTheme";

export const Card = () => (
  <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "244px" }}>
    <Box
      sx={{
        width: "244px",
        height: "136px",
        backgroundColor: "#F5F5F5",
        borderRadius: "16px",
        mb: 2.5,
      }}
    />

    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        sx={{
          mb: 2.5,
          textTransform: "uppercase",
          color: theme.palette.common.black,
          opacity: 0.3,
          fontSize: "12px",
          fontWeight: 500,
          lineHeight: "14.52px",
          letterSpacing: "-0.05em",
        }}
      >
        wednesday 12, march 2024
      </Typography>

      <Box>
        <Typography
          variant="h6"
          sx={{
            mb: 1,
            fontSize: "17px",
            fontWeight: 600,
            lineHeight: "20.57px",
            letterSpacing: "-0.05em",
          }}
        >
          A Journey into the Beauty and Majesty of Our Planet
        </Typography>
        <Typography
          variant="body1"
          sx={{
            opacity: 0.5,
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "16.94px",
            letterSpacing: "-0.05em",
          }}
        >
          {truncate(
            "Exploring breakthrough innovations, emerging technologies, and the impact of digital transformation on society",
            38
          )}
        </Typography>
      </Box>
    </Box>
  </Box>
);
