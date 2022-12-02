import { Container, Grid } from "@mui/material";
import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter;

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Grid container>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={6}></Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          sad
        </Grid>
      </Grid>
    </Container>
  );
}
