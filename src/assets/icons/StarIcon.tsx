import Box from "@mui/material/Box";
import type { WithSx } from "@/types";

type StarIconProps = WithSx<{}>;

const StarIcon = (props: StarIconProps) => {
  return (
    <Box {...props}>
      <svg
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 2.28711L11.3175 6.98211L16.5 7.73961L12.75 11.3921L13.635 16.5521L9 14.1146L4.365 16.5521L5.25 11.3921L1.5 7.73961L6.6825 6.98211L9 2.28711Z"
          stroke="#1FFF1A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};

export default StarIcon;
