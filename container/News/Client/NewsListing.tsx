import { Box, Container, Grid, Link, Stack } from "@mui/material";
import React, { useMemo } from "react";

import { CardItem, Title } from "../../../components";
import ButtonBase from "../../../components/Button/Button";

import { IPage, responseSchema } from "../../../interface";
import {
  NEW_DETAIL_ITEMS,
  NEW_LISTING_ITEMS,
} from "../../../interface/responseSchema/news";
import ROUTES from "../../../routes";

export type NewsProps = IPage<
  [responseSchema<NEW_LISTING_ITEMS>, responseSchema<NEW_DETAIL_ITEMS>]
>;

export default function NewsListing(props: NewsProps) {
  const { initData } = props;
  const dataListing = initData[0].items;

  const dataCategories = initData[1].items;

  const renderNewsCategories = useMemo(() => {
    return dataCategories.map((el: NEW_DETAIL_ITEMS, idx) => {
      return (
        <Grid item xs={12} md={4} key={idx}>
          <Link
            href={`/${ROUTES.news}/${el.id}`}
            style={{ textDecoration: "none" }}
          >
            <CardItem data={el} />
          </Link>
        </Grid>
      );
    });
  }, [dataCategories]);

  return (
    <Container>
      <Grid container marginBottom="5rem">
        <Grid item xs={12} marginBottom="2rem">
          <Title title={dataListing[0].title} />
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={4}>
            {renderNewsCategories}
          </Grid>

          <Stack alignItems="center">
            <ButtonBase />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
