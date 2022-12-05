import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { Map, Title } from "components";
import Location from "components/Icon/Location";
import Mail from "components/Icon/Mail";
import Phone from "components/Icon/Phone";
import FormControl from "components/Input/FormControl";
import { IPage, responseSchema } from "interface";
import { ITEM_CONTACT, ITEM_SUBMIT } from "interface/responseSchema/contact";
import { useForm } from "react-hook-form";

export type ContactProps = IPage<[responseSchema<ITEM_CONTACT>]>;

export default function Contact(props: ContactProps) {
  const { initData } = props;
  const data = initData[0].items[0];

  const theme = useTheme();
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: ITEM_SUBMIT) => {
    console.log("🚀 ~ file: Contact.tsx:10 ~ onSubmit ~ data", data);
  };

  return (
    <Container>
      <Grid container spacing={4} margin="3rem 0">
        <Grid item xs={12}>
          <Title title={data.title} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container>
            <Grid item xs={12}>
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

            <Grid item xs={12}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                marginBottom={1}
              >
                <Location />
                <Typography variant="caption2">
                  373A Tran Phu St, Ward 8, District 5, HCM City
                </Typography>
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                marginBottom={1}
              >
                <Mail />
                <Typography variant="caption2">
                  vanphong@tbgdphanmic.vn
                </Typography>
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                marginBottom={1}
              >
                <Phone />
                <Typography variant="caption2">+(84) 28 3924 1814</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box component="form">
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography variant="body2Bold">{data.sub_title}</Typography>
              </Grid>

              <Grid item xs={12} md={12}>
                <FormControl
                  control={control}
                  name="name"
                  label="Name"
                  placeholder="Nhập tên"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl
                  control={control}
                  name="name"
                  label="Name"
                  placeholder="Nhập tên"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl
                  control={control}
                  name="name"
                  label="Name"
                  placeholder="Nhập tên"
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <FormControl
                  control={control}
                  name="name"
                  label="Name"
                  placeholder="Nhập tên"
                />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
