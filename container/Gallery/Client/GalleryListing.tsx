import { Button, Container, Grid, Stack, useTheme } from "@mui/material";
import { CardItem, Title } from "components";
import { IPage, responseSchema } from "interface";
import { GALLERY_DETAIL_ITEMS } from "interface/responseSchema/gallery";
import Link from "next/link";
import { useMemo } from "react";

import ROUTES from "../../../routes";

export type GalleryProps = IPage<
  [responseSchema<GALLERY_DETAIL_ITEMS>, responseSchema<GALLERY_DETAIL_ITEMS>]
>;

export default function GalleryListing(props: GalleryProps) {
  const { initData } = props;
  const dataListing = initData[0].items;
  const dataCatergories = initData[1].items;

  const theme = useTheme();

  const renderGalleryCategories = useMemo(() => {
    return dataCatergories.map((el, idx) => {
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
  }, [dataCatergories]);

  return (
    <Container>
      <Grid container marginBottom="4rem">
        <Grid item xs={12}>
          <Title title={dataListing[0].title} />
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={4}>
            {renderGalleryCategories}
          </Grid>

          <Stack alignItems="center" marginTop="2rem">
            <Button variant="contained">Xem Thêm</Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
