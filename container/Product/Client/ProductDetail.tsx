import {
  Button,
  Container,
  Grid,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import useSWR from "swr";
import { Image } from "../../../components";
import RelatedProduct from "../../../components/RelatedProduct";
import { IPage } from "../../../interface";
import { PRODUCT_DETAIL_ITEMS } from "../../../interface/responseSchema/product";
import { useEffect, useState } from "react";

export type PropsProductDetail = IPage<[PRODUCT_DETAIL_ITEMS]>;
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductDetail(props: PropsProductDetail) {
  const theme = useTheme();

  const { initData } = props;

  const {
    description,
    id,
    images,
    last_published_at,
    meta,
    purchase_icons,
    specification,
    thumbnail,
    title,
  } = initData[0];

  const [relate, setRelate] = useState<PRODUCT_DETAIL_ITEMS[]>([]);

  const { data: dataRelate } = useSWR(
    `https://mic.t-solution.vn/api/v2/pages/?child_of=${meta.parent.id}&fields=%2A&locale=${meta.locale}&type=product.ProductDetailPage`,
    fetcher
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

  return (
    <Container>
      <Grid container marginTop="2rem" marginBottom="6rem">
        <Grid item xs={12} md={12}>
          <Grid container>
            <Grid item xs={12} md={6}>
              {thumbnail && (
                <Image
                  src={thumbnail}
                  // src={"/img/Rectangle 3.png"}
                  width="100%"
                  height={250}
                  alt="Logo"
                  style={{ objectFit: "cover", borderRadius: "0.6rem" }}
                />
              )}
            </Grid>

            <Grid item xs={12} md={6}>
              <Title variant="h3">{title}</Title>
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
          }}
        >
          <Title title={"Related Product"} />
          <RelatedProduct data={relate} />
        </Grid>
      </Grid>
    </Container>
  );
}

const Title = styled(Typography)(({ theme }) => {
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
