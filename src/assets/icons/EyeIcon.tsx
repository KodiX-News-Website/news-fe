import Box from "@mui/material/Box";
import type { WithSx } from "@/types";

type EyeIconProps = WithSx<{}>;

const EyeIcon = (props: EyeIconProps) => {
  return (
    <Box {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 6C7.90909 6 4.41545 8.488 3 12C4.41545 15.512 7.90909 18 12 18C16.0909 18 19.5845 15.512 21 12C19.5845 8.488 16.0909 6 12 6ZM12 16C9.74182 16 7.90909 14.208 7.90909 12C7.90909 9.792 9.74182 8 12 8C14.2582 8 16.0909 9.792 16.0909 12C16.0909 14.208 14.2582 16 12 16ZM12 9.6C10.6418 9.6 9.54545 10.672 9.54545 12C9.54545 13.328 10.6418 14.4 12 14.4C13.3582 14.4 14.4545 13.328 14.4545 12C14.4545 10.672 13.3582 9.6 12 9.6Z"
          fill="#84818A"
        />
      </svg>
    </Box>
  );
};

export default EyeIcon;