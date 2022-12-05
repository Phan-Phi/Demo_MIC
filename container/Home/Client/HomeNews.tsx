import { Grid } from "@mui/material";
import { HOME_PAGE_NEW, responseSchema } from "interface";
import Link from "next/link";
import React from "react";
import ROUTES from "routes";
import { CardItem, Title } from "../../../components";

type Props = {
  data: responseSchema<HOME_PAGE_NEW>;
};

export default function HomeNews(props: Props) {
  const { data } = props;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Title title="News" />
      </Grid>

      <Grid container spacing={4}>
        {data &&
          data.items.map((el, idx) => {
            return (
              <Grid item xs={12} md={4} key={idx}>
                <Link href={`/${ROUTES.news}/${el.id}`}>
                  <CardItem data={el} />
                </Link>
              </Grid>
            );
          })}
      </Grid>
    </Grid>
  );
}
