import useSWR from "swr";
import { useMeasure } from "react-use";
import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  styled,
  Typography,
  useTheme,
} from "@mui/material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { transformUrl } from "libs/transformUrl";
import { PAGES_API, TYPE_PARAMS } from "apis";
import { IPage, PRODUCT_DETAIL_ITEMS } from "interface";

import RelatedProduct from "components/RelatedProduct";
import { Image } from "components";

export type PropsProductDetail = IPage<[PRODUCT_DETAIL_ITEMS]>;

export default function ProductDetail(props: PropsProductDetail) {
  const theme = useTheme();
  const [ref, { width }] = useMeasure();

  const { initData } = props;
  const { description, id, images, meta, specification, title } = initData[0];

  const [relate, setRelate] = useState<PRODUCT_DETAIL_ITEMS[]>([]);
  const [nav1, setNav1] = useState<Slider | undefined>(undefined);
  const [nav2, setNav2] = useState<Slider | undefined>(undefined);

  const { data: dataRelate } = useSWR(
    transformUrl(PAGES_API, {
      fields: "*",
      type: TYPE_PARAMS["product.ProductDetailPage"],
      child_of: meta.parent.id,
      locale: meta.locale,
    })
  );

  useEffect(() => {
    if (dataRelate == undefined) {
      return;
    }

    const relatedList: PRODUCT_DETAIL_ITEMS[] = [];

    dataRelate.items.forEach((el: PRODUCT_DETAIL_ITEMS) => {
      if (el.id !== id) {
        relatedList.push(el);
      }
    });

    setRelate(relatedList);
  }, [dataRelate]);

  const renderSliderImage = () => {
    const lengthImages = images.length;

    return (
      <>
        <Box>
          <Slider
            asNavFor={nav2}
            // ref={(slider1) => setNav1(slider1)}

            ref={(slider) => {
              if (slider == null) return;
              setNav1(slider);
            }}
          >
            {images &&
              images.map((el, idx: number) => {
                return (
                  <Box key={idx} ref={ref}>
                    <Image
                      key={idx}
                      src={el.value}
                      width="100%"
                      height={width}
                      alt="Logo"
                      style={{ objectFit: "cover", borderRadius: "0.6rem" }}
                    />
                  </Box>
                );
              })}
          </Slider>
        </Box>

        <Box
          sx={{ marginTop: "1rem", "& .slick-slide": { padding: "0 0.5rem" } }}
        >
          <Slider
            asNavFor={nav1}
            ref={(slider) => {
              if (slider == null) return;
              setNav2(slider);
            }}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            infinite={lengthImages >= 3 ? true : false}
          >
            {images &&
              images.map((el, idx: number) => {
                return (
                  <Box key={idx}>
                    <Image
                      src={el.value}
                      width="100%"
                      height={110}
                      alt="Logo"
                      style={{ objectFit: "cover", borderRadius: "0.6rem" }}
                    />
                  </Box>
                );
              })}
          </Slider>
        </Box>
      </>
    );
  };

  return (
    <Container>
      <Grid container marginTop="2rem" marginBottom="6rem">
        <Grid item xs={12} md={12} marginBottom="5rem">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              {renderSliderImage()}
            </Grid>

            <Grid item xs={12} md={6}>
              <TitleBold variant="h3">{title}</TitleBold>
              <TextBold variant="body1Bold">{description}</TextBold>
              <Typography variant="body2" marginBottom="1rem">
                {specification}
              </Typography>
              <Button variant="contained">Mua Ngay</Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            "& .slick-slide": {
              padding: "0 1rem",
            },
            "& .MuiSvgIcon-root": {
              color: theme.palette.primary.main,
              width: "2rem",
              height: "2rem",
              "&.slick-prev:hover,&.slick-next:hover": {
                color: `${theme.palette.primary.main} !important`,
              },

              "&.slick-prev": {
                position: "absolute",
                left: -15,
              },
              "&.slick-next": {
                position: "absolute",
                right: -15,
              },
            },
          }}
        >
          <RelatedProduct data={relate} />
        </Grid>
      </Grid>
    </Container>
  );
}

const TitleBold = styled(Typography)(({ theme }) => {
  return {
    marginBottom: "1rem",
  };
});
const TextBold = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.primary.main,
    marginBottom: "1rem",
    display: "block",
  };
});
