import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Map, Title } from "components";
import Location from "components/Icon/Location";
import Mail from "components/Icon/Mail";
import Phone from "components/Icon/Phone";
import FormControl from "components/Input/FormControl";
import PhoneNumber from "components/Input/PhoneNumber.";
import { IPage, responseSchema } from "interface";
import { ITEM_CONTACT, ITEM_SUBMIT } from "interface/responseSchema/contact";
import { useCallback } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { transformUrl } from "libs/transformUrl";
import { SUBMISSIONS_API } from "apis";
import axios from "../../../axios.config";

import { defaultContact, schemaContact } from "yups/Contact";

export type ContactProps = IPage<[responseSchema<ITEM_CONTACT>]>;

export default function Contact(props: ContactProps) {
  const { initData } = props;
  const data = initData[0].items[0];

  const { handleSubmit, control, reset } = useForm({
    resolver: schemaContact(),
    defaultValues: defaultContact(),
  });

  const onSubmit = useCallback(async (data: ITEM_SUBMIT) => {
    try {
      const url = transformUrl(SUBMISSIONS_API);

      const aa = await axios.post(SUBMISSIONS_API, data, {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_API_KEY,
        },
      });

      console.log("🚀 ~ file: Contact.tsx:52 ~ onSubmit ~ aa", aa);
      reset(defaultContact);
    } catch (err) {
      console.log("🚀 ~ file: Contact.tsx:40 ~ onSubmit ~ err", err);
    }
  }, []);

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
                <PhoneNumber
                  control={control}
                  name="phone_number"
                  label="Phone"
                  placeholder="Nhập SDT"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl
                  control={control}
                  name="email"
                  label="Name"
                  placeholder="Nhập tên"
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <FormControl
                  control={control}
                  name="message"
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
