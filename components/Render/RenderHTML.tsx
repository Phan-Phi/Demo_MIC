import { Box } from "@mui/material";
import DOMPurify from "isomorphic-dompurify";
import { useMeasure } from "react-use";

export function RenderHTML(props: string | Node) {
  return (
    <Box
      sx={{
        "& img": {
          width: "100%",
          height: "auto",
        },
      }}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(props),
      }}
    ></Box>
  );
}
