import { Box, Container, Grid, Typography } from "@mui/material";
import { RenderHTML } from "components/Render/RenderHTML";
import { IPage, NEW_DETAIL_ITEMS } from "interface";

export type PropsNewsDetail = IPage<NEW_DETAIL_ITEMS[]>;

export default function NewsDetail(props: PropsNewsDetail) {
  const { initData } = props;
  const { title, content } = initData[0];

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3">{title}</Typography>
        </Grid>

        <Grid item xs={12}>
          {content.map((el, idx: number) => {
            const { block_type, value } = el;

            if (block_type == "content") {
              return <Box key={idx as number}>{RenderHTML(value)}</Box>;
            } else {
              return null;
            }
          })}
        </Grid>
      </Grid>
    </Container>
  );
}
