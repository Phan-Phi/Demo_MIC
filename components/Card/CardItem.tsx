"use client";
import DOMPurify from "isomorphic-dompurify";
import { Box, styled, Typography, useTheme } from "@mui/material";
import { usePathname } from "next/navigation";
import { format, parseISO } from "date-fns";

import Image from "../Image";
import SkeletonItem from "../Skeleton";
import { MetaItem } from "../../interface/responseSchema";
import { RATIO } from "constant";
import { useMeasure } from "react-use";

interface CardProps {
  id: number;
  content?: object[];
  last_published_at: string;
  meta: MetaItem;
  thumbnail?: string | null;
  is_on_homepage?: boolean;
  title: string;
}

type Props = {
  // widthSize?: number;
  // heightSize?: number;
  data: CardProps;
};

export default function CardItem(props: Props) {
  const { data } = props;

  const [ref, { width }] = useMeasure();
  const theme = useTheme();
  const pathname: string | null = usePathname();

  const text =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde quisquam, quam aliquam soluta accusamus dignissimos temporibus ut saepe inventore, facere sed possimus dolorum natus voluptatem esse. Alias inventore rerum velit!";

  // const text2 = data.content[0].value;
  return (
    <Box sx={{ cursor: "pointer" }} ref={ref}>
      <Box>
        {data.thumbnail && (
          <Image
            src={data.thumbnail}
            width="100%"
            // height={250}
            height={width * RATIO.GALLERY_RATIO_IMAGE}
            alt="Logo"
            style={{ objectFit: "cover", borderRadius: "0.6rem" }}
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
      {/* <Box
        sx={{
          display: "-webkit-box",
          WebkitLineClamp: 3,
          overflow: "hidden",
          WebkitBoxOrient: "vertical",
        }}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(text2, {
            USE_PROFILES: { svg: false, jpg: false },
          }),
        }}
      ></Box> */}

      {/* {data.content?.map((el, idx) => {
        if (el.block_type === "content") {
          return (
            <Box
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
              }}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(el.value),
              }}
            >
              sad
            </Box>
          );
        }
      })} */}
    </Box>
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
// {pathname == "/news" &&
// // <Text
// //   variant="h6"
// //   sx={{
// //     display: "-webkit-box",
// //     WebkitLineClamp: 3,
// //     overflow: "hidden",
// //     WebkitBoxOrient: "vertical",
// //   }}
// // >
// //   {text}
// // </Text>
// {
//   /* <Typography
//   variant="h6"
//   sx={{
//     display: "-webkit-box",
//     WebkitLineClamp: 3,
//     overflow: "hidden",
//     WebkitBoxOrient: "vertical",
//   }}
// ></Typography> */
// }}
