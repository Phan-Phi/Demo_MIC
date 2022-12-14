import { Button, Container, Grid, Stack } from "@mui/material";

import OurCategories from "../Client/OurCategories";
import HomeNews from "../Client/HomeNews";
import Carousel from "../Client/Carousel";

import {
  HOME_PAGE,
  HOME_PAGE_NEW,
  HOME_PAGE_OUR_CATEGORIES,
  IPage,
  responseSchema,
} from "interface";
import Link from "next/link";

export type HomeProps = IPage<
  [
    responseSchema<HOME_PAGE>,
    responseSchema<HOME_PAGE_OUR_CATEGORIES>,
    responseSchema<HOME_PAGE_NEW>
  ]
>;

export default function Home(props: HomeProps) {
  const { initData } = props;

  return (
    <>
      <Carousel data={initData[0]} />

      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} marginBottom="3rem">
            <OurCategories data={initData[1]} />
          </Grid>

          <Grid item xs={12} marginBottom="3rem">
            <HomeNews data={initData[2]} />
            <Stack alignItems="center" marginTop="2rem">
              <Link href="/news">
                <Button variant="contained">xem thêm</Button>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
