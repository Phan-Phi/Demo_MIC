import { Grid } from "@mui/material";
import React from "react";
import CardItem from "../../../components/Card/CardItem";

export default function HomeNews() {
  return (
    <Grid container>
      <Grid item xs={12}>
        Title
      </Grid>
      <Grid item xs={12}>
        Title
        <CardItem />
      </Grid>
    </Grid>
  );
}
