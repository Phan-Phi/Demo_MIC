import React from "react";
import { Box, Skeleton } from "@mui/material";
interface Props {
  widthSize: number;
  heightSize: number;
}

export default function SkeletonItem(props: Props) {
  const { heightSize, widthSize } = props;

  return (
    <Box>
      <Skeleton variant="rectangular" width={widthSize} height={200} />
      <Box marginBottom="0.5rem"></Box>
      <Skeleton variant="rectangular" width={widthSize} height={30} />
      <Box marginBottom="0.3rem"></Box>
      <Skeleton variant="rectangular" width={widthSize} height={10} />
      <Box marginBottom="0.3rem"></Box>
      <Skeleton variant="rectangular" width={20} height={10} />
    </Box>
  );
}
