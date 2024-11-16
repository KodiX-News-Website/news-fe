import { Box, Button, Tooltip, Typography } from "@mui/material";
import theme from "@/styles/muiTheme";
import {
  DocumentIcon,
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/assets/icons";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Card, Loader } from "@/components";
import { useEffect } from "react";
import { getPostsRequest } from "@/redux/slices/postSlice/postSlice";
import { useParams } from "react-router-dom";
import {
  getPostByIdRequest,
  removeCurrentPost,
} from "@/redux/slices/currentPostSlice/currentPostSlice";
import {
  getCommentsByPostIdRequest,
  removeComments,
} from "@/redux/slices/commentSlice/commentSlice";
import { truncate } from "@/utils";

export default function PostDetailsPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const currentPost = useAppSelector((state) => state.currentPostSlice.post);
  const isLoading = useAppSelector((state) => state.currentPostSlice.isLoading);
  const posts = useAppSelector((state) => state.postSlice.posts);
  const comments = useAppSelector((state) => state.commentSlice.comments);

  useEffect(() => {
    dispatch(getPostsRequest());

    if (id) {
      dispatch(getPostByIdRequest(id));
      dispatch(getCommentsByPostIdRequest(id));
    }

    return () => {
      dispatch(removeCurrentPost());
      dispatch(removeComments());
    };
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(getPostByIdRequest(id));
      dispatch(getCommentsByPostIdRequest(id));
    }
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  const handleMoreClick = () => {};

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexGrow: 1,
        py: "27px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "553px",
          mr: 15,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "32px",
            fontWeight: 600,
            lineHeight: "38.73px",
            letterSpacing: "-0.05em",
            mb: 1,
          }}
        >
          {currentPost?.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            opacity: 0.5,
            fontSize: "14px",
            fonrWeight: 400,
            lineHeight: "16.94px",
            letterSpacing: "-0.05em",
            mb: 2.5,
          }}
        >
          {currentPost?.body}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2.5,
          }}
        >
          <Typography
            typography="body1"
            sx={{
              opacity: 0.6,
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
            mb: 2.5,
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
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography variant="body1" sx={{ mr: 0.5 }}>
            Share to
          </Typography>
          <FacebookIcon sx={{ mr: 0.5 }} />
          <TwitterIcon sx={{ mr: 0.5 }} />
          <YoutubeIcon />
        </Box>

        <Box sx={{ maxHeight: "553px" }}>
          <Typography variant="h5" sx={{ mb: 2.5 }}>
            Comments
          </Typography>

          <Box sx={{ overflowY: "scroll" }}>
            {comments.map(({ id, name, email, body }) => (
              <Box
                key={id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  border: `1px solid ${theme.palette.common.black}`,
                  borderRadius: "8px",
                  p: 1,
                  "&:not(:last-child)": {
                    mb: 1,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Tooltip title={name}>
                    <Typography variant="body1">
                      <Box
                        component="span"
                        sx={{
                          fontWeight: 600,
                          mr: 0.5,
                        }}
                      >
                        Name:
                      </Box>
                      {truncate(name, 20)}
                    </Typography>
                  </Tooltip>
                  <Tooltip title={email}>
                    <Box component="a" href={`mailto:${email}`}>
                      <Box
                        component="span"
                        sx={{
                          fontWeight: 600,
                          mr: 0.5,
                        }}
                      >
                        Email:
                      </Box>{" "}
                      {truncate(email, 15)}
                    </Box>
                  </Tooltip>
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    maxWidth: "300px",
                    opacity: 0.5,
                    fontSize: "14px",
                    fonrWeight: 400,
                    lineHeight: "16.94px",
                    letterSpacing: "-0.05em",
                  }}
                >
                  {body}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "471px",
          maxHeight: "1084px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            mb: 5,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <DocumentIcon sx={{ mr: 1 }} />
            <Typography
              variant="body1"
              sx={{
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "24.2px",
                letterSpacing: "-0.05em",
              }}
            >
              Related Articles
            </Typography>
          </Box>

          <Button
            onClick={handleMoreClick}
            sx={{
              border: `1px solid #0000001A`,
              backgroundColor: theme.palette.common.white,
              color: theme.palette.common.black,
              p: "12.5px 32.5px",
              borderRadius: "24px",
              mr: 2,
              textTransform: "none",
              transition: "box-shadow 0.3s ease",

              "&:hover": {
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            Read more
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            overflowX: "hidden",
            p: 1,
          }}
        >
          {posts.map((post) => (
            <Card
              key={post.id}
              post={post}
              direction="row"
              sx={{ mb: 5, maxHeight: "136px" }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
