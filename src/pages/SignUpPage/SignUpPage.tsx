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
import { toast } from "react-toastify";
import { useAppDispatch } from "@/hooks";
import { createUserRequest } from "@/redux/slices/userSlice/userSlice";

type FormData = yup.InferType<ReturnType<typeof validationScheme>>;

export default function SignUpPage() {
  const dispatch = useAppDispatch();

  const defaultValues: FormData = {
    email: "",
    firstName: "",
    lastName: "",
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
      createUserRequest({
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
            Sign up
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

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "394px",
            }}
          >
            <FormInputText
              name="firstName"
              control={control}
              label="First name"
              placeholder="Your first name"
              required={true}
              sx={{ width: "185px" }}
            />

            <FormInputText
              name="lastName"
              control={control}
              label="Last name"
              placeholder="Your last name"
              required={true}
              sx={{ width: "185px" }}
            />
          </Box>

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
            Sign Up
            <ArrowIcon />
          </Button>

          <Typography variant="body2" sx={{ color: "#202020" }}>
            Already have an account?{" "}
            <Box
              component={Link}
              to={ROUTES.SIGN_IN}
              sx={{ color: theme.palette.custom.btnGreen, fontWeight: 600 }}
            >
              Sign In
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
            alignItems: "center",
            px: 4,
            py: 2,
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: "34px",
              mb: 2,
            }}
          >
            Get Your FREE 30-Days Trial Now!
          </Typography>

          <Box
            component="ul"
            sx={{ display: "flex", flexDirection: "column", mb: 4 }}
          >
            <Box
              component="li"
              sx={{
                display: "flex",
                flexDirection: "column",
                pl: 3,
                "&::before": {
                  content: '""',
                  display: "block",
                  width: "24px",
                  height: "24px",
                  position: "relative",
                  left: "-30px",
                  top: "20px",
                  backgroundImage: "url(/first.svg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: "16.94px",
                  mb: 1,
                }}
              >
                Absolutely FREE
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "#484848",
                }}
              >
                No hidden charges, No credit card required
              </Typography>
            </Box>
            <Box
              component="li"
              sx={{
                display: "flex",
                flexDirection: "column",
                pl: 3,
                "&::before": {
                  content: '""',
                  display: "block",
                  width: "24px",
                  height: "24px",
                  position: "relative",
                  left: "-30px",
                  top: "20px",
                  backgroundImage: "url(/second.svg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: "16.94px",
                  mb: 1,
                }}
              >
                Fast & Easy
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "#484848",
                }}
              >
                Get access instantly, no downloads required
              </Typography>
            </Box>
            <Box
              component="li"
              sx={{
                display: "flex",
                flexDirection: "column",
                pl: 3,
                "&::before": {
                  content: '""',
                  display: "block",
                  width: "24px",
                  height: "24px",
                  position: "relative",
                  left: "-30px",
                  top: "20px",
                  backgroundImage: "url(/third.svg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: "16.94px",
                  mb: 1,
                }}
              >
                Your Own Data
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "#484848",
                }}
              >
                Enjoy the Free Trial with your company data
              </Typography>
            </Box>
            <Box
              component="li"
              sx={{
                display: "flex",
                flexDirection: "column",
                pl: 3,
                "&::before": {
                  content: '""',
                  display: "block",
                  width: "24px",
                  height: "24px",
                  position: "relative",
                  left: "-30px",
                  top: "20px",
                  backgroundImage: "url(/fourth.svg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: "16.94px",
                }}
              >
                Unlimited Features
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "#484848",
                }}
              >
                Access all features of the world's #1 business software!
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                color: theme.palette.common.white,
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "16.94px",
              }}
            >
              Call us at{" "}
              <Box
                component="a"
                href="tel:8001301448"
                sx={{ fontWeight: 700, color: theme.palette.custom.bgGreen }}
              >
                800 1301 448
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
