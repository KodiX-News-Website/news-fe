import {
  FacebookIcon,
  StarIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/assets/icons";
import { Box, Typography } from "@mui/material";
import theme from "@/styles/muiTheme";
import { Card } from "@/components";

export default function BlogPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexGrow: 1,
        mb: 16,
      }}
    >
      <Box
        sx={{
          py: "34px",
          mb: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 2.5,
          }}
        >
          <StarIcon sx={{ mr: 0.5 }} />
          <Typography variant="h5">Featured</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 2.5,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              maxWidth: "339px",
              fontWeight: 600,
              mb: 1,
            }}
          >
            Global Climate Summit Urges Immediate Action
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.custom.grey }}>
            Leaders from around the world gathered for a global climate summit,
            emphasizing the urgent need for coordinated action to address
            climate change.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 2.5,
          }}
        >
          <Typography
            typography="body1"
            sx={{
              color: "#00000033",
              textTransform: "uppercase",
              mr: 2.5,
            }}
          >
            wednesday 12, march 2024
          </Typography>

          <Box
            sx={{
              display: "flex",
              maxWidth: "fit-content",
              border: "1px solid #00000033",
              borderRadius: "99px",
              p: "5px",
            }}
          >
            <Box
              sx={{
                display: "block",
                width: "24px",
                heigth: "24px",
                borderRadius: "50%",
                mr: 1,
                backgroundColor: "#00000033",
              }}
            />
            <Typography>John Doe</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "894px",
              height: "339px",
              backgroundColor: "#F5F5F5",
              borderRadius: "24px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                position: "absolute",
                left: "16px",
                bottom: "22px",
                borderRadius: "2px",
                color: theme.palette.common.white,
                backgroundColor: "#00000066",
                py: 0.5,
                px: 1,
              }}
            >
              Photo by Antara
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 2.5,
          }}
        >
          <Typography variant="body1" sx={{ mr: 0.5 }}>
            Share to
          </Typography>
          <FacebookIcon sx={{ mr: 0.5 }} />
          <TwitterIcon sx={{ mr: 0.5 }} />
          <YoutubeIcon />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          backgroundColor: theme.palette.common.white,
          borderRadius: "24px",
          gap: 2.5,
          p: 2.5,
          border: "1px solid #D6D6D6",
          overflowX: "auto",
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Box>
    </Box>
  );
}
