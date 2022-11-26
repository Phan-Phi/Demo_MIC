"use client";

import { Box, styled, Typography, useTheme } from "@mui/material";
import Image from "../Image";
import { usePathname } from "next/navigation";
import SkeletonItem from "../Skeleton";
import { MetaItem } from "../../interface/responseSchema";

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
  widthSize: number;
  heightSize: number;
  data: CardProps;
  handleNextPage: () => void;
};

export default function CardItem(props: Props) {
  const { handleNextPage, data, widthSize, heightSize } = props;

  const theme = useTheme();
  const pathname: string | null = usePathname();

  const text =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde quisquam, quam aliquam soluta accusamus dignissimos temporibus ut saepe inventore, facere sed possimus dolorum natus voluptatem esse. Alias inventore rerum velit!";

  if (data == undefined) {
    return <SkeletonItem widthSize={widthSize} heightSize={heightSize} />;
  }
  return (
    <Box sx={{ cursor: "pointer" }} onClick={() => handleNextPage()}>
      <Box>
        {data.thumbnail && (
          <Image
            // src={data.thumbnail}
            src={"/img/Rectangle 3.png"}
            width="100%"
            height={250}
            alt="Logo"
            style={{ objectFit: "cover", borderRadius: "0.6rem" }}
          />
        )}
      </Box>
      <Title
        variant="h1"
        sx={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          overflow: "hidden",
          WebkitBoxOrient: "vertical",
          minHeight: 32 * 2,
        }}
      >
        {/* {data.title} */}
        01-01-01
      </Title>

      <Typography
        variant="h2"
        sx={{
          display: "inline-block",
          color: theme.palette.common.black,
          borderRadius: "0.4rem",
          padding: "0.4rem",
          border: `2px solid red`,
        }}
      >
        {/* {data.last_published_at &&
          formatDate(data.last_published_at, "dd/MM/yyyy")} */}
        01-01-01
      </Typography>
      {pathname == "/news" && (
        <Text
          variant="h3"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
          }}
        >
          {text}
          {/* 01-01-01 */}
        </Text>
      )}
    </Box>
  );
}
const Title = styled(Typography)(({ theme }) => {
  return {
    color: "red",
    display: "block",
    marginTop: "1rem",
  };
});
const Text = styled(Typography)(({ theme }) => {
  return {
    textAlign: "justify",
    color: "red",
    display: "block",
    marginTop: "1rem",
  };
});
