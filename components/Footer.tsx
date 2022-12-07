import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { ROUTES_HEADER } from "constant";
import { useSetting } from "hook/useContext";
import { useMedia } from "hook/useMedia";
import Link from "next/link";
import React, { useMemo } from "react";
import Image from "../components/Image";
import Location from "./Icon/Location";
import Mail from "./Icon/Mail";
import Phone from "./Icon/Phone";
import Map from "./Map";

export default function Footer() {
  const theme = useTheme();
  const { isSmDown } = useMedia();
  const setting = useSetting();

  const { logo, email, hotline, address, social_icons } = setting;

  const renderSocialIcon = useMemo(() => {
    if (social_icons == undefined) {
      return null;
    }

    return social_icons.map((el, idx) => {
      const { block_type, value } = el;

      return (
        <Grid item xs={4} key={idx}>
          <Image
            src={value.icon}
            alt="social_icons"
            width="100%"
            height="100px"
          />
        </Grid>
      );
    });
  }, [social_icons]);

  const renderMenu = useMemo(() => {
    return ROUTES_HEADER.map((el, idx) => {
      return (
        <Grid item xs={12} key={idx}>
          <Link href={`${el.path}`}>
            <TextMenu>{el.name}</TextMenu>
          </Link>
        </Grid>
      );
    });
  }, [ROUTES_HEADER]);

  return (
    <Box sx={{ backgroundColor: "#00A859", padding: "5rem 0 2rem  0" }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={3}>
            {logo && (
              <Image src={logo} alt="Logo" width="120px" height="120px" />
            )}
          </Grid>

          <Grid item xs={12} md={3}>
            <Grid container>
              <Grid item xs={12}>
                <TitleMenu>Menu</TitleMenu>
              </Grid>
              {renderMenu}
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: isSmDown ? "none" : "block" }}
          >
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
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  marginBottom={1}
                >
                  <Location />
                  {address && <TextMenu variant="caption2">{address}</TextMenu>}
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  marginBottom={1}
                >
                  <Mail />
                  {email && <TextMenu variant="caption2">{email}</TextMenu>}
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  marginBottom={1}
                >
                  <Phone />
                  {hotline && (
                    <TextMenu variant="caption2">{`+(84) ${hotline}`}</TextMenu>
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Line />

        {isSmDown && <Map />}
        <Line />

        {isSmDown && (
          <Grid item xs={12}>
            <Grid container width="40%" margin="0 auto" columnSpacing={2}>
              {renderSocialIcon}
            </Grid>
          </Grid>
        )}

        <Typography
          variant="h6"
          sx={{
            fontSize: "12px",
            fontWeight: 400,
            color: "white",
            marginTop: isSmDown ? 0 : "2rem",
            textAlign: isSmDown ? "center" : "left",
          }}
        >
          Copyright © 2022 MINH DUC. All rights reserved
        </Typography>
      </Container>
    </Box>
  );
}

const TitleMenu = styled(Typography)(() => {
  const { isSmDown } = useMedia();

  return {
    color: "white",
    fontSize: "1rem",
    fontWeight: 800,
    paddingBottom: 4,
    marginBottom: isSmDown ? "1rem" : "2.5rem",
  };
});
const TextMenu = styled(Typography)(() => {
  return {
    color: "white",
    fontSize: "0.8rem",
    fontWeight: 600,
    paddingBottom: 4,
    marginBottom: "0.5rem",
  };
});

const Line = styled(Divider)(() => {
  return { border: "0.5px solid white" };
});
