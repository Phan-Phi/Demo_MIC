import { Button, Container, Grid, Stack } from "@mui/material";
import { CardItem } from "components";
import { NEW_DETAIL_ITEMS } from "interface";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ROUTES from "routes";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function NewsDemo() {
  const [nextPost, setNextPost] = useState(
    "https://mic.t-solution.vn/api/v2/pages/?fields=%2A&locale=vi&type=news.NewsDetailPage&limit=6"
  );
  console.log("🚀 ~ file: NewsDemo.tsx:15 ~ NewsDemo ~ nextPost", nextPost);
  const [data, setData] = useState([]);
  const [renderData, setRenderData] = useState([]);
  const [isFetch, setIsFetch] = useState(false);

  const { data: resData } = useSWR(nextPost, fetcher);
  console.log("🚀 ~ file: NewsDemo.tsx:21 ~ NewsDemo ~ resData", resData);

  useEffect(() => {
    if (resData == undefined) {
      return;
    }

    setRenderData(resData);
    setData(resData.items);
  }, [resData]);

  const handlePost = useCallback(() => {
    console.log("sdas");
    setIsFetch(true);
  }, []);

  const renderItemNews = useMemo(() => {
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
            {renderItemNews}
          </Grid>

          <Stack alignItems="center" marginTop="2rem">
            <Button variant="contained" onClick={handlePost}>
              Xem Thêm
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
