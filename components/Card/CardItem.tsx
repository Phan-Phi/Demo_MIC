"use client";

import { Box, styled, Typography, useTheme } from "@mui/material";
import Image from "../Image";
import { usePathname } from "next/navigation";
import SkeletonItem from "../Skeleton";
import { MetaItem } from "../../interface/responseSchema";
import { format, parseISO } from "date-fns";

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

  const theme = useTheme();
  const pathname: string | null = usePathname();

  const text =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde quisquam, quam aliquam soluta accusamus dignissimos temporibus ut saepe inventore, facere sed possimus dolorum natus voluptatem esse. Alias inventore rerum velit!";

  // if (data == undefined) {
  //   return <SkeletonItem widthSize={widthSize} heightSize={heightSize} />;
  // }
  return (
    <Box sx={{ cursor: "pointer" }}>
      <Box>
        {data.thumbnail && (
          <Image
            src={data.thumbnail}
            // src={"/img/Rectangle 3.png"}
            width="100%"
            height={250}
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
      {pathname == "/news" ||
        ("/" && (
          <Text
            variant="h6"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
            }}
          >
            {text}
          </Text>
        ))}
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
