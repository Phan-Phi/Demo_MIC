import {
  Box,
  Container,
  Grid,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { IPage, responseSchema } from "interface";
import { ITEM_ABOUT } from "interface/responseSchema/about";
import TitleLine from "components/TitleLine/TitleLine";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Image } from "components";
import { useMeasure } from "react-use";
import { useMemo } from "react";

export type PropsAbout = IPage<[responseSchema<ITEM_ABOUT>]>;

export default function About(props: PropsAbout) {
  const { initData } = props;
  const {
    story_title,
    mission_title,
    value_title,
    story_content,
    value_content,
  } = initData[0].items[0];

  const theme = useTheme();
  const [ref, { width }] = useMeasure();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 478,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const renderValueContent = useMemo(() => {
    return value_content.map(
      (
        el: {
          block_type: string;
          value: { title: string; description: string };
        },
        idx: number
      ) => {
        return (
          <Box textAlign="center" key={idx}>
            <TitleValueContent variant="body2">
              {el.value.title}
            </TitleValueContent>
            <TextValueContent variant="body2">
              {el.value.description}
            </TextValueContent>
          </Box>
        );
      }
    );
  }, [value_content]);

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <TitleLine title={story_title} />
        </Grid>

        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>

        <Grid item xs={12} marginBottom={5}>
          <TitleLine title={value_title} />
          <Box ref={ref} sx={{ position: "relative" }}>
            <Image
              src="/img/Asset 1@4x 1.png"
              width="100%"
              height={width / (1120 / 560)}
              alt="sadasd"
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: "85%",
                "& .slick-arrow": { display: "none !important" },
              }}
            >
              <Slider {...settings}>{renderValueContent}</Slider>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
const TitleValueContent = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.common.white,
    fontWeight: 700,
  };
});
const TextValueContent = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.common.white,
  };
});
