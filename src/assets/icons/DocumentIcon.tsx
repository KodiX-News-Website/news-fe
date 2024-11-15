import Box from "@mui/material/Box";
import type { WithSx } from "@/types";

type DocumentIconProps = WithSx<{}>;

const DocumentIcon = (props: DocumentIconProps) => {
  return (
    <Box sx={{ width: "24px", height: "24px" }} {...props}>
      <svg
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 2L4.5 2C4.10218 2 3.72064 2.15804 3.43934 2.43934C3.15804 2.72064 3 3.10218 3 3.5L3 15.5C3 15.8978 3.15804 16.2794 3.43934 16.5607C3.72064 16.842 4.10218 17 4.5 17H13.5C13.8978 17 14.2794 16.842 14.5607 16.5607C14.842 16.2794 15 15.8978 15 15.5L15 6.5M10.5 2L15 6.5M10.5 2V6.5L15 6.5M12 10.25L6 10.25M12 13.25L6 13.25M7.5 7.25H6"
          stroke="#FF4405"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};

export default DocumentIcon;
