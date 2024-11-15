import React, { forwardRef, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Tooltip,
  InputAdornment,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { WithSx } from "@/types";
import FormHelperText from "@mui/material/FormHelperText";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface InputTextProps extends WithSx {
  name: string;
  label: string;
  error?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  helperText?: string;
  type?: string;
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      name,
      label,
      error,
      onBlur,
      onChange,
      placeholder,
      required,
      value,
      sx = {},
      inputRef,
      helperText,
      type = "text",
      ...rest
    },
    _ref
  ) => {
    const theme = useTheme();
    const [_focused, setFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleFocus = () => setFocused(true);
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      if (onBlur) onBlur(event);
    };

    const handleClickShowPassword = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <Box sx={{ mb: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "4px",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ display: "flex", color: "#202020" }}
          >
            {label}
          </Typography>

          {helperText && (
            <Tooltip title={helperText}>
              <InfoOutlinedIcon sx={{ width: "17px", height: "17px" }} />
            </Tooltip>
          )}
        </Box>
        <TextField
          inputRef={inputRef}
          name={name}
          error={!!error}
          value={value}
          type={type === "password" && !showPassword ? "password" : "text"}
          onChange={onChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder={placeholder}
          required={required}
          fullWidth
          slotProps={{
            input: {
              endAdornment: type === "password" && (
                <InputAdornment
                  position="end"
                  sx={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? (
                    <VisibilityOffIcon
                      fontSize="small"
                      sx={{ color: "#84818A" }}
                    />
                  ) : (
                    <VisibilityIcon
                      fontSize="small"
                      sx={{ color: "#84818A" }}
                    />
                  )}
                </InputAdornment>
              ),
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              padding: "0px",
              "& fieldset": {
                borderColor: error ? theme.palette.error.main : "#E8E8E8",
                borderWidth: "1px",
                borderRadius: "8px",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
              },
              "& .MuiInputBase-input": {
                padding: "11px 12px",
                fontSize: "16px",
                lineHeight: "normal",
                color: "#484848",
                "&::placeholder": {
                  color: "#484848",
                },
              },
              "&:hover fieldset": {
                borderColor: error
                  ? theme.palette.error.main
                  : theme.palette.custom.grey,
                boxShadow: "0px 4px 10px 0px rgba(3, 9, 80, .15)",
              },
              "&.Mui-focused fieldset": {
                border: `1px solid ${theme.palette.custom.grey}`,
                boxShadow: "none",
              },
              "&.Mui-focused .MuiInputBase-input::placeholder": {
                opacity: 0,
              },
            },
            margin: 0,
            ...sx,
          }}
          {...rest}
        />
        {error && (
          <FormHelperText component={Box}>
            <Typography
              variant="subtitle2"
              sx={{
                color: theme.palette.error.main,
                marginTop: "4px",
                fontWeight: theme.typography.fontWeightRegular,
                width: "320px",
              }}
            >
              {error}
            </Typography>
          </FormHelperText>
        )}

        {type === "password" && (
          <Box
            sx={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
            onClick={handleClickShowPassword}
          >
            {showPassword ? (
              <VisibilityOffIcon fontSize="small" />
            ) : (
              <VisibilityIcon fontSize="small" />
            )}
          </Box>
        )}
      </Box>
    );
  }
);
