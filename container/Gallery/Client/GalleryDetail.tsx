import { Box, Container, Grid, Typography } from "@mui/material";
import { RenderHTML } from "components/Render/RenderHTML";
import { GALLERY_DETAIL_ITEMS, IPage } from "interface";

export type PropsGalleryDetail = IPage<GALLERY_DETAIL_ITEMS[]>;

export default function GalleryDetail(props: PropsGalleryDetail) {
  const { initData } = props;
  const { title, content } = initData[0];

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3">{title}</Typography>
        </Grid>

        <Grid item xs={12}>
          {content.map((el, idx) => {
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
