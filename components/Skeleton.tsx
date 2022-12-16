import { Box, Skeleton } from "@mui/material";
interface Props {
  widthSize: number;
  heightSize: number;
}

export default function SkeletonItem() {
  // const { heightSize, widthSize } = props;

  return (
    <Box>
      <Skeleton variant="rectangular" width="100%" height={200} />
      <Box marginBottom="0.5rem"></Box>
      <Skeleton variant="rectangular" width="100%" height={30} />
      <Box marginBottom="0.3rem"></Box>
      <Skeleton variant="rectangular" width="100%" height={10} />
      <Box marginBottom="0.3rem"></Box>
      <Skeleton variant="rectangular" width={20} height={10} />
    </Box>
  );
}
