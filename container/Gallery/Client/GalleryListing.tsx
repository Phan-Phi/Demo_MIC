import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button, Container, Grid, Stack } from "@mui/material";

import { CardItem } from "components";
import TitleLine from "components/TitleLine/TitleLine";
import { IPage, responseSchema } from "interface";
import { GALLERY_DETAIL_ITEMS } from "interface/responseSchema/gallery";

import ROUTES from "../../../routes";
import useSWR from "swr";
import { useRouter } from "next/router";

export type GalleryProps = IPage<
  [responseSchema<GALLERY_DETAIL_ITEMS>, responseSchema<GALLERY_DETAIL_ITEMS>]
>;

export default function GalleryListing(props: GalleryProps) {
  const router = useRouter();
  const { initData } = props;
  const dataListing = initData[0].items;
  const dataCatergories = initData[1].items;
  const nextCatergories = initData[1].next;

  const [data, setData] = useState(dataCatergories);
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

      const mergeDataFetch: GALLERY_DETAIL_ITEMS[] = [];
      items.forEach((el: GALLERY_DETAIL_ITEMS) => {
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

  const renderGalleryCategories = useMemo(() => {
    return data.map((el, idx) => {
      return (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <Link
            href={`/${ROUTES.gallery}/${el.id}`}
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
      <Grid container marginBottom="4rem">
        <Grid item xs={12}>
          {/* <TitleLine title={dataListing[0].title} /> */}
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={4}>
            {renderGalleryCategories}
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
