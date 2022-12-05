import { Container, Grid } from "@mui/material";
import { Title } from "components";
import { IPage, responseSchema } from "interface";
import {
  PRODUCT_CATEGORIES_ITEMS,
  PRODUCT_DETAIL_ITEMS,
  PRODUCT_LISTING_ITEMS,
} from "interface/responseSchema/product";
import Link from "next/link";
import React, { useCallback } from "react";
import ROUTES from "routes";

export type ProductProps = IPage<
  [
    responseSchema<PRODUCT_LISTING_ITEMS>,
    responseSchema<PRODUCT_CATEGORIES_ITEMS>,
    responseSchema<PRODUCT_DETAIL_ITEMS>
  ]
>;

export default function Product(props: ProductProps) {
  const { initData } = props;
  const dataListing = initData[0].items;
  const dataCategories = initData[1].items;
  const dataDetail = initData[2].items;

  const renderProductDetail = useCallback(() => {
    return dataDetail.map((el, idx) => {
      return (
        <Grid item xs={12} md={3} key={idx}>
          <Link
            href={`/${ROUTES.product}/${el.id}`}
            style={{ textDecoration: "none" }}
          ></Link>
        </Grid>
      );
    });
  }, [dataDetail]);

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Title title={dataListing[0].title} />
        </Grid>

        <Grid item xs={12}></Grid>

        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} md={3}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
