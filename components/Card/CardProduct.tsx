import { useMeasure } from "react-use";
import { Box, Typography, useTheme, styled, Grow } from "@mui/material";

import { Fragment } from "react";
import { PRODUCT_DETAIL_ITEMS } from "../../interface/responseSchema/product";
import Image from "next/image";
// import Image from "../Image";

type Props = {
  data: PRODUCT_DETAIL_ITEMS;
};

export default function CardProduct(props: Props) {
  const { data } = props;
  const [ref, { width }] = useMeasure();

  const theme = useTheme();

  const { thumbnail, title, description } = data;

  return (
    <Grow in={true} style={{ transformOrigin: "0 0 0" }}>
      <Box>
        <Box ref={ref} height={width}>
          {thumbnail && (
            // <Image
            //   src={thumbnail}
            //   width="100%"
            //   height={width}
            //   alt={title}
            //   style={{ objectFit: "cover", borderRadius: "0.5rem" }}
            // />

            <Image
              alt="image"
              src={thumbnail}
              width={width}
              height={width}
              style={{ objectFit: "cover", borderRadius: "0.5rem" }}
            />
          )}
        </Box>
        <Title
          variant="body2"
          sx={{
            color: theme.palette.common.black,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            minHeight: 48,
          }}
        >
          {title}
        </Title>
        {description && (
          <Typography
            variant="hairline2"
            sx={{
              display: "inline-block",
              color: theme.palette.primary.main,
              borderRadius: "0.5rem",
              padding: "0.5rem",
              border: `2px solid ${theme.palette.primary.main}`,
            }}
          >
            {description}
          </Typography>
        )}
      </Box>
    </Grow>
  );
}

const Title = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.primary.main,
    display: "block",
    marginTop: "1rem",
  };
});
