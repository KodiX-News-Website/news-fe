import Box from "@mui/material/Box";
import type { WithSx } from "@/types";

type ArrowIconProps = WithSx<{}>;

const ArrowIcon = (props: ArrowIconProps) => {
  return (
    <Box sx={{ width: "24px", height: "24px" }} {...props}>
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
          d="M4 11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13H4V11Z"
          fill="white"
        />
      </svg>
    </Box>
  );
};

export default ArrowIcon;
