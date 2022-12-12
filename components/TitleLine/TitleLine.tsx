import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useMeasure } from "react-use";

export default function TitleLine({ title }: { title: string }) {
  const [ref, { width, height }] = useMeasure();
  const theme = useTheme();
  const sizeWidth = width + 110;
  const sizeHeight = height + 20;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        margin: "2rem auto",
        textAlign: "center",
      }}
    >
      <Image
        src="/img/Frame (1).png"
        width={sizeWidth}
        height={sizeHeight}
        alt="sdsad"
        // style={{position: "relative"}}
      />
      <Box ref={ref}>
        <Typography
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
        </Typography>
      </Box>
    </Box>
  );
}
