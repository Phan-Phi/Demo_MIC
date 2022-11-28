import { Box, Container, Grid } from "@mui/material";
import { Title } from "../../../components";
import Map from "../../../components/Map";

export default function Contact() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Title title="Contact" />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#F4F5F6",
              padding: "0.7rem",
              borderRadius: "1rem",
              "& iframe": { borderRadius: "1rem" },
            }}
          >
            <Map />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Container>
  );
}
