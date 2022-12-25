"use client";
import { Box, Grow, styled, Typography, useTheme } from "@mui/material";
import { format, parseISO } from "date-fns";

import Image from "../Image";
import { MetaItem } from "../../interface/responseSchema";
import { RATIO } from "constant";
import { useMeasure } from "react-use";

import "react-loading-skeleton/dist/skeleton.css";
import { RenderHTML } from "components/Render/RenderHTML";

interface CardProps {
  id: number;
  content?: { block_type: string; value: string }[];
  last_published_at: string;
  meta: MetaItem;
  thumbnail?: string | null;
  is_on_homepage?: boolean;
  title: string;
}

type Props = {
  data: CardProps;
};

export default function CardItem(props: Props) {
  const { data } = props;

  const [ref, { width }] = useMeasure();
  const theme = useTheme();

  return (
    <Grow in={true} style={{ transformOrigin: "0 0 0" }}>
      <Box sx={{ cursor: "pointer" }} ref={ref}>
        <Box>
          {data.thumbnail && (
            <Image
              src={data.thumbnail}
              width="100%"
              height={width * RATIO.GALLERY_RATIO_IMAGE}
              alt="Logo"
              style={{ objectFit: "contain", borderRadius: "0.6rem" }}
            />
          )}
        </Box>
        <Title
          variant="h4"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            minHeight: 32 * 2,
          }}
        >
          {data.title}
        </Title>

        <Typography
          variant="h6"
          sx={{
            fontSize: "12px",
            display: "inline-block",
            color: "black",
            borderRadius: "0.4rem",
            padding: "0.4rem",
            border: `2px solid #E6E8EC`,
            fontWeight: "700",
          }}
        >
          {format(parseISO(data.last_published_at), "dd/MM/yyyy")}
        </Typography>

        {data.content &&
          data.content?.map((el, idx: number) => {
            if (el.block_type == "content") {
              return (
                <Box
                  key={idx}
                  sx={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    "& p": {
                      color: theme.palette.neutral.neutral4,
                      fontSize: "1rem",
                    },
                    "& img": {
                      display: "none",
                    },
                  }}
                >
                  {RenderHTML(el.value)}
                </Box>
              );
            }
          })}
      </Box>
    </Grow>
  );
}
const Title = styled(Typography)(({ theme }) => {
  return {
    fontSize: "24px",
    fontWeight: "600",
    color: "#00A859",
    display: "block",
    marginTop: "1rem",
    lineHeight: "32px",
  };
});
const Text = styled(Typography)(({ theme }) => {
  return {
    fontSize: "16px",
    textAlign: "justify",
    color: "#777E91",
    display: "block",
    marginTop: "1rem",
  };
});
