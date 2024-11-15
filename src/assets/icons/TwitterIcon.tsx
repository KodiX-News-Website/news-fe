import Box from "@mui/material/Box";
import type { WithSx } from "@/types";

type TwitterIconProps = WithSx<{}>;

const TwitterIcon = (props: TwitterIconProps) => {
  return (
    <Box {...props}>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.2413 12.5003C24.2413 18.416 19.8576 23.3066 14.1627 24.1002C13.6302 24.1741 13.0854 24.2127 12.5324 24.2127C11.8941 24.2127 11.2672 24.1618 10.6568 24.0633C5.08172 23.1654 0.823486 18.3298 0.823486 12.5003C0.823486 6.03145 6.06628 0.787109 12.5332 0.787109C19.0002 0.787109 24.243 6.03145 24.243 12.5003H24.2413Z"
          fill="#1C1C1B"
        />
        <path
          d="M5.57246 5.95312L10.9728 13.1754L5.53882 19.0476H6.76214L11.52 13.9066L15.3639 19.0476H19.5262L13.8223 11.4191L18.8805 5.95312H17.6571L13.2758 10.6878L9.73552 5.95312H5.57327H5.57246ZM7.37092 6.85427H9.28262L17.7261 18.1464H15.8144L7.37092 6.85427Z"
          fill="white"
        />
      </svg>
    </Box>
  );
};

export default TwitterIcon;
