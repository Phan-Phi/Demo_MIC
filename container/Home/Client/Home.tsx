import { Container, Grid } from "@mui/material";
import ButtonBase from "../../../components/Button/Button";
import HomeNews from "./HomeNews";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12}>
          heero
        </Grid>
        <Grid item xs={12}>
          <HomeNews />
        </Grid>
        <Grid item xs={12}>
          heero
          <ButtonBase />
        </Grid>
      </Grid>
    </Container>
  );
}
