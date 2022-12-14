import { useMemo } from "react";
import Link from "next/link";

import { Box } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { PRODUCT_DETAIL_ITEMS } from "../interface/responseSchema/product";
import CardProduct from "./Card/CardProduct";
import ROUTES from "../routes";

type Props<T> = {
  data: T[];
};

export default function RelatedProduct(props: Props<PRODUCT_DETAIL_ITEMS>) {
  const { data } = props;
  const lengthData = data.length;

  var settings = {
    dots: false,
    infinite: lengthData >= 4 ? true : false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <ChevronRightIcon />,
    prevArrow: <ChevronLeftIcon />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: lengthData >= 3 ? true : false,
        },
      },

      {
        breakpoint: 478,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: lengthData >= 2 ? true : false,
        },
      },
    ],
  };

  const renderItem = useMemo(() => {
    return data.map((el, idx) => {
      return (
        <Box key={idx}>
          <Link href={`/${ROUTES.product}/${el.id}`}>
            <CardProduct data={el} />
          </Link>
        </Box>
      );
    });
  }, [data]);

  return (
    <>
      <Slider {...settings}>{renderItem}</Slider>
    </>
  );
}
