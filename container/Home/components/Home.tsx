import { Container, Grid } from "@mui/material";
import ButtonBase from "../../../components/Button/Button";
import OurCategories from "../Client/OurCategories";
import HomeNews from "../Client/HomeNews";
import Carousel from "../Client/Carousel";
import {
  HOME_PAGE,
  IPage,
  responseSchema,
  HOME_PAGE_OUR_CATEGORIES,
  HOME_PAGE_NEW,
} from "../../../interface/responseSchema";

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
            <ButtonBase />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}