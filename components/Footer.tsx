import {
  Box,
  Container,
  Divider,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "../components/Image";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#00A859", padding: "5rem 0 2rem  0" }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={3}>
            <Image
              src="/img/logo.png"
              alt="Logo"
              width="120px"
              height="120px"
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <Grid container>
              <Grid item xs={12}>
                <TitleMenu>Menu</TitleMenu>
              </Grid>

              <Grid item xs={12}>
                <TextMenu>About</TextMenu>
              </Grid>
              <Grid item xs={12}>
                <TextMenu>News</TextMenu>
              </Grid>
              <Grid item xs={12}>
                <TextMenu>Gallery</TextMenu>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={3}>
            <Grid container>
              <Grid item xs={12}>
                <TitleMenu>Products</TitleMenu>
              </Grid>

              <Grid item xs={12}>
                <TextMenu>Chalkboard Chalk</TextMenu>
              </Grid>
              <Grid item xs={12}>
                <TextMenu>School Supplies and Student Tools</TextMenu>
              </Grid>
              <Grid item xs={12}>
                <TextMenu>Office Supplies</TextMenu>
              </Grid>
              <Grid item xs={12}>
                <TextMenu>Art Supplies</TextMenu>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={3}>
            <Grid container>
              <Grid item xs={12}>
                <TitleMenu>Address</TitleMenu>
              </Grid>

              <Grid item xs={12}>
                <TextMenu>Chalkboard Chalk</TextMenu>
              </Grid>
              <Grid item xs={12}>
                <TextMenu>School Supplies and Student Tools</TextMenu>
              </Grid>
              <Grid item xs={12}>
                <TextMenu>Office Supplies</TextMenu>
              </Grid>
              <Grid item xs={12}>
                <TextMenu>Art Supplies</TextMenu>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Line />

        <Typography
          variant="h6"
          sx={{
            fontSize: "12px",
            fontWeight: 400,
            color: "white",
            marginTop: "2rem",
          }}
        >
          Copyright © 2022 MINH DUC. All rights reserved
        </Typography>
      </Container>
    </Box>
  );
}

const TitleMenu = styled(Typography)(() => {
  return {
    color: "white",
    fontSize: "1rem",
    fontWeight: 800,
    paddingBottom: 4,
    marginBottom: "2.5rem",
  };
});
const TextMenu = styled(Typography)(() => {
  return {
    color: "white",
    fontSize: "0.8rem",
    fontWeight: 600,
    paddingBottom: 4,
    marginBottom: "1.5rem",
  };
});

const Line = styled(Divider)(() => {
  return { border: "0.5px solid white" };
});
