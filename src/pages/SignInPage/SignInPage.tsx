import { ArrowIcon, LogoIcon } from "@/assets/icons";
import { Box, Button, Typography } from "@mui/material";
import theme from "@/styles/muiTheme";
import * as yup from "yup";
import { FormInputText } from "@/components/Form";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationScheme } from "./validationScheme";
import { Link } from "react-router-dom";
import { ROUTES } from "@/enums";
import { useAppDispatch } from "@/hooks";
import { toast } from "react-toastify";
import { loginRequest } from "@/redux/slices/userSlice/userSlice";

type FormData = yup.InferType<ReturnType<typeof validationScheme>>;

export default function SignInPage() {
  const dispatch = useAppDispatch();

  const defaultValues: FormData = {
    email: "",
    password: "",
  };

  const { handleSubmit, control } = useForm<FormData>({
    defaultValues,
    resolver: yupResolver(validationScheme()),
    mode: "onSubmit",
  });

  const handleFormSubmit: SubmitHandler<FormData> = (data) => {
    const toastId = toast.loading("Waiting...");

    dispatch(
      loginRequest({
        data,
        toastId,
      })
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
        width: "100%",
        height: "100vh",
      }}
    >
      <Link to={ROUTES.HOME}>
        <LogoIcon sx={{ mb: 5 }} />
      </Link>

      <Box
        sx={{
          position: "relative",
          border: "1px solid black",
          display: "flex",
          width: "751px",
          borderRadius: "8px",
          p: 4,
        }}
      >
        <Box component="form" sx={{ width: "458px" }}>
          <Typography variant="h5" sx={{ mb: "23px" }}>
            Sign in
          </Typography>

          <FormInputText
            name="email"
            control={control}
            label="Email address"
            placeholder="Your email address"
            required={true}
            type="email"
            sx={{ width: "394px" }}
          />

          <FormInputText
            name="password"
            control={control}
            label="Password"
            placeholder="Enter password"
            required={true}
            type="password"
            sx={{ width: "394px" }}
          />

          <Typography
            variant="body2"
            sx={{ mb: 4, color: theme.palette.custom.btnGreen }}
          >
            Forgot password?
          </Typography>

          <Button
            type="submit"
            onClick={handleSubmit(handleFormSubmit)}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "394px",
              px: 3,
              mb: 6,
              textTransform: "none",
              border: `1px solid ${theme.palette.custom.btnGreen}`,
              backgroundColor: theme.palette.custom.btnGreen,
              color: theme.palette.common.white,
              transition: "all 0.3s ease-in-out",

              "&:hover": {
                transition: "all 0.3s ease-in-out",
                boxShadow: `0px 4px 15px rgba(0, 0, 0, 0.2)`,
              },
            }}
          >
            Sign In
            <ArrowIcon />
          </Button>

          <Typography variant="body2" sx={{ color: "#202020" }}>
            Don’t have an account?{" "}
            <Box
              component={Link}
              to={ROUTES.SIGN_UP}
              sx={{ color: theme.palette.custom.btnGreen, fontWeight: 600 }}
            >
              Sign Up
            </Box>
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "293px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0 8px 8px 0",
            px: 5.1,
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
          }}
        >
          <Box sx={{ display: "flex", mb: 2 }}>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "28.13px",
                mr: 1,
              }}
            >
              Kodix
            </Typography>
            <Typography
              sx={{
                border: `1px solid ${theme.palette.custom.bgGreen}`,
                color: theme.palette.custom.bgGreen,
                borderRadius: "4px",
                padding: "5px 8px",
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "14.52px",
              }}
            >
              PRO
            </Typography>
          </Box>

          <Typography
            sx={{
              textAlign: "center",
              color: "#484848",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "24px",
              mb: 3,
            }}
          >
            Unlimited traffic, strategic support, and AI-driven upsells
          </Typography>

          <Typography
            sx={{
              color: theme.palette.custom.bgGreen,
              textDecoration: "underline",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "19.36px",
              textAlign: "center",
            }}
          >
            Learn More
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
