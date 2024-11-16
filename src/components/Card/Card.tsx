import { truncate } from "@/utils";
import { Box, Typography } from "@mui/material";
import theme from "@/styles/muiTheme";
import { Post } from "@/types";
import { Link } from "react-router-dom";

interface CardProps {
  post: Post;
}

export const Card = ({ post }: CardProps) => (
  <Box
    component={Link}
    to={`/blog/post/${post.id}`}
    sx={{
      display: "flex",
      flexDirection: "column",
      maxWidth: "244px",
      transition: "all 0.3s ease",

      "&:hover": {
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        transform: "scale(1.05)",
      },
    }}
  >
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
          {post.title}
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
          {truncate(post.body, 38)}
        </Typography>
      </Box>
    </Box>
  </Box>
);
