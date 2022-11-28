import { Box, Grid, Typography } from "@mui/material";
import { Image, Title } from "../../../components";
import { HOME_PAGE_OUR_CATEGORIES, responseSchema } from "../../../interface";
import { useMeasure } from "react-use";
import Link from "next/link";
import ROUTES from "../../../routes";

type Props = {
  data: responseSchema<HOME_PAGE_OUR_CATEGORIES>;
};
type PropsCategories = {
  data: HOME_PAGE_OUR_CATEGORIES;
};

export default function OurCategories(props: Props) {
  const { data } = props;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Title title="Our Categories" />
      </Grid>
      <Grid container spacing={4}>
        {data &&
          data.items.map((el, idx) => {
            return (
              <Grid item xs={12} md={6} key={idx}>
                <Link href={`/${ROUTES.product}/${el.id}`}>
                  <CardCategories data={el} />
                </Link>
              </Grid>
            );
          })}
      </Grid>
    </Grid>
  );
}

const CardCategories = (props: PropsCategories) => {
  const { data } = props;
  const [ref, { width }] = useMeasure();

  return (
    <Box
      ref={ref}
      sx={{
        textAlign: "center",
        borderRadius: "1rem",
        padding: "1rem",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      }}
    >
      <Image
        src={data.image}
        width="100%"
        height={`${(width * 9) / 13}px`}
        alt="Logo"
        style={{ objectFit: "cover", borderRadius: "0.6rem" }}
      />
      <Typography variant="h6" marginTop="0.8rem">
        {data.title}
      </Typography>
    </Box>
  );
};
