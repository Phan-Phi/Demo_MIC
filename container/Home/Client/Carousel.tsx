import { Box } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import { useMeasure } from "react-use";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HOME_PAGE, responseSchema } from "interface";
import { Image } from "components";

type Props = {
  data: responseSchema<HOME_PAGE>;
};

export default function Carousel({ data }: Props) {
  const [ref, { width }] = useMeasure();

  const { items } = data;
  const { banners } = items[0];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box
      marginBottom="3rem"
      ref={ref}
      sx={{ ".slick-arrow": { display: "none !important" } }}
    >
      <Slider {...settings}>
        {banners &&
          banners.map((el, idx) => {
            return (
              <Box height={(width * 9) / 16} key={idx}>
                <Image
                  src={el.value.icon}
                  // src={"/img/Rectangle 3.png"}
                  width="100%"
                  height="100%"
                  alt="Banner"
                  style={{ objectFit: "fill" }}
                />
              </Box>
            );
          })}
      </Slider>
    </Box>
  );
}
