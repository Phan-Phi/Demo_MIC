import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Image, Map } from "components";
import Location from "components/Icon/Location";
import Mail from "components/Icon/Mail";
import Phone from "components/Icon/Phone";
import FormControl from "components/Input/FormControl";
import PhoneNumber from "components/Input/PhoneNumber.";
import { IPage, responseSchema } from "interface";
import { ITEM_CONTACT } from "interface/responseSchema/contact";
import { useCallback, useMemo } from "react";

import { useForm } from "react-hook-form";
import { SUBMISSIONS_API } from "apis";
import axios from "../../../axios.config";

import { defaultContact, schemaContact } from "yups/Contact";
import FormNumber from "components/Input/FormNumber";
import { useMedia } from "hook/useMedia";
import TitleLine from "components/TitleLine/TitleLine";
import { NotiStack } from "hook/notiStack";
import { useSetting } from "hook/useContext";

export type ContactProps = IPage<[responseSchema<ITEM_CONTACT>]>;

export default function Contact(props: ContactProps) {
  const { initData } = props;
  const data = initData[0].items[0];

  const theme = useTheme();
  const { isSmDown } = useMedia();
  const setting = useSetting();
  const { social_icons } = setting;

  const { handleSubmit, control, reset } = useForm({
    resolver: schemaContact(),
    defaultValues: defaultContact(),
  });

  const { snackbarSuccess, snackbarError } = NotiStack();

  const onSubmit = useCallback(async (data: any) => {
    try {
      await axios.post(SUBMISSIONS_API, data, {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_API_KEY,
        },
      });

      reset(defaultContact);
      snackbarSuccess("Đăng ký thành công");
    } catch (err: any) {
      snackbarError(err);
    }
  }, []);

  const renderSocial = useMemo(() => {
    if (social_icons == undefined) {
      return null;
    }

    return social_icons.map((el, idx) => {
      const { block_type, value } = el;
      return (
        <Image
          src={value.icon}
          alt="social_icons"
          width={isSmDown ? "30px" : "30px"}
          height={isSmDown ? "60px" : "30px"}
        />
      );
    });
  }, [social_icons]);

  return (
    <Container>
      <Grid container spacing={isSmDown ? 0 : 3} margin="3rem 0" width="100%">
        <Grid item xs={12}>
          {/* <TitleLine title={data.title} /> */}
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid
            container
            sx={{
              [theme.breakpoints.down("sm")]: {
                display: "none",
              },
            }}
          >
            <Grid item xs={12}>
              <Box
                sx={{
                  backgroundColor: "#F4F5F6",
                  padding: "0.7rem",
                  borderRadius: "1rem",
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

            <Grid item xs={12}>
              <Stack direction="row">{renderSocial}</Stack>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box component="form">
            <Grid container rowSpacing={3}>
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

              <Grid item xs={12}>
                <Grid container spacing={2}>
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
                      label="Email"
                      placeholder="Nhập email"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={12}>
                <FormControl
                  control={control}
                  name="message"
                  label="Name"
                  placeholder="Nhập tên"
                  InputProps={{
                    multiline: true,
                    rows: 8,
                    sx: {
                      padding: 1,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <FormNumber
                  control={control}
                  name="bank"
                  label="Bank Number"
                  placeholder="Nhập Bank"
                />
              </Grid>
            </Grid>

            <Stack
              alignItems={isSmDown ? "center" : "flex-end"}
              marginTop="2rem"
            >
              <Button
                disableRipple={true}
                variant="outlined"
                type="submit"
                onClick={handleSubmit(onSubmit)}
              >
                Submit
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
