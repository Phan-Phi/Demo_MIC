import { Box } from "@mui/material";
import DOMPurify from "isomorphic-dompurify";

export function RenderHTML(props: string | Node) {
  return (
    <Box
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(props),
      }}
    ></Box>
  );
}
