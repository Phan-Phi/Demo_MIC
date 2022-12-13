import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Container, Grid, Link, Stack } from "@mui/material";

import { CardItem } from "components";
import TitleLine from "components/TitleLine/TitleLine";
import {
  IPage,
  NEW_DETAIL_ITEMS,
  NEW_LISTING_ITEMS,
  responseSchema,
} from "interface";
import ROUTES from "routes";
import useSWR from "swr";

export type NewsProps = IPage<
  [responseSchema<NEW_LISTING_ITEMS>, responseSchema<NEW_DETAIL_ITEMS>]
>;

export default function NewsListing(props: NewsProps) {
  const { initData } = props;
  const dataListing = initData[0].items;
  const dataCategories = initData[1].items;
  const nextCatergories = initData[1].next;

  const [data, setData] = useState(dataCategories);
  const [isFetch, setIsFetch] = useState(false);
  const [nextPost, setNextPost] = useState(nextCatergories);

  const { data: resData } = useSWR(nextPost);

  useEffect(() => {
    if (isFetch) {
      if (!resData) {
        return;
      }
      const next = resData.next;
      const items = resData.items;

      const mergeDataFetch: NEW_DETAIL_ITEMS[] = [];
      items.forEach((el: NEW_DETAIL_ITEMS) => {
        mergeDataFetch.push(el);
      });

      setNextPost(next);
      setData(data.concat(mergeDataFetch));
      setIsFetch(false);
    }
  }, [resData, isFetch]);

  const handlePost = useCallback(() => {
    setIsFetch(true);
  }, [isFetch]);

  const renderNewsCategories = useMemo(() => {
    return data.map((el: NEW_DETAIL_ITEMS, idx) => {
      return (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <Link
            href={`/${ROUTES.news}/${el.id}`}
            style={{ textDecoration: "none" }}
          >
            <CardItem data={el} />
          </Link>
        </Grid>
      );
    });
  }, [data]);

  return (
    <Container>
      <Grid container marginBottom="5rem">
        <Grid item xs={12} marginBottom="2rem">
          {/* <TitleLine title={dataListing[0].title} /> */}
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={4}>
            {renderNewsCategories}
          </Grid>

          <Stack alignItems="center" marginTop="2rem">
            <Button
              variant="contained"
              onClick={handlePost}
              sx={{ display: nextPost ? "block" : "none" }}
            >
              Xem Thêm
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
