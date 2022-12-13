import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { PAGES_API, TYPE_PARAMS } from "apis";
import { ROUTES_HEADER } from "constant";
import { useSetting } from "hook/useContext";
import { useMedia } from "hook/useMedia";
import { PRODUCT_CATEGORIES_ITEMS } from "interface/responseSchema/product";
import { transformUrl } from "libs/transformUrl";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import useSWR from "swr";
import Image from "../components/Image";
import Location from "./Icon/Location";
import Mail from "./Icon/Mail";
import Phone from "./Icon/Phone";
import Map from "./Map";

export default function Footer() {
  const router = useRouter();
  const { isSmDown, isMdUp } = useMedia();
  const setting = useSetting();

  const { data: productCategori } = useSWR(
    transformUrl(PAGES_API, {
      locale: router.locale,
      type: TYPE_PARAMS["product.ProductCategoryPage"],
      fields: "*",
    })
  );

  const { logo, email, hotline, address, social_icons } = setting;

  const renderSocialIcon = useMemo(() => {
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
              <Link href="/">
                <Image src={logo} alt="Logo" width="120px" height="120px" />
              </Link>
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
              {productCategori &&
                productCategori.items.map(
                  (el: PRODUCT_CATEGORIES_ITEMS, idx: number) => {
                    return (
                      <Link
                        href={`/product?child_of=${el.id}`}
                        style={{ width: "100%" }}
                      >
                        <Grid key={idx} item xs={12}>
                          <TextMenu>{el.title}</TextMenu>
                        </Grid>
                      </Link>
                    );
                  }
                )}
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
              {isMdUp && (
                <Grid item xs={12}>
                  <Stack direction="row" spacing={2}>
                    {renderSocialIcon}
                  </Stack>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>

        <Line />

        {isSmDown && <Map />}
        <Line />

        {isSmDown && (
          <Grid item xs={12}>
            <Stack
              direction="row"
              justifyContent="center"
              spacing={2}
              margin="0.5rem 0"
            >
              {renderSocialIcon}
            </Stack>
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
