import { Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Title } from "../../../components";
import CardItem from "../../../components/Card/CardItem";
import { HOME_PAGE_NEW, responseSchema } from "../../../interface";
import ROUTES from "../../../styles/routes";

type Props = {
  data: responseSchema<HOME_PAGE_NEW>;
};

export default function HomeNews(props: Props) {
  console.log("🚀 ~ file: HomeNews.tsx ~ line 6 ~ HomeNews ~ props", props);
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
