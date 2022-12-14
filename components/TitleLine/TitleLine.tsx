import { Box, Typography, useTheme } from "@mui/material";
import { useMedia } from "hook/useMedia";
import Image from "next/image";
import { useMeasure } from "react-use";

export default function TitleLine({ title }: { title: string }) {
  const [ref, { width, height }] = useMeasure();
  const theme = useTheme();
  const { isSmDown } = useMedia();

  const sizeWidth = width + 110;
  const sizeHeight = height + 20;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        margin: isSmDown ? "1rem auto" : "2rem auto",
        textAlign: "center",
      }}
    >
      <Image
        src="/img/Frame (1).png"
        width={sizeWidth}
        height={sizeHeight}
        alt="frame"
      />

      {/* <Typography
        ref={ref}
        variant="h5"
        textAlign="center"
        sx={{
          color: theme.palette.primary.main,
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        component="p"
      >
        {title}
      </Typography> */}
    </Box>
  );
}
