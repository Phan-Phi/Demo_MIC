import React, { useCallback, useMemo, useState } from "react";

import {
  Box,
  Container,
  Dialog,
  OutlinedInput,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Image } from "components";
import { useMedia } from "hook/useMedia";

import {
  usePopupState,
  bindMenu,
  bindHover,
} from "material-ui-popup-state/hooks";
import MenuItem from "@mui/material/MenuItem";
import useSWR from "swr";
import { transformUrl } from "libs/transformUrl";
import { useRouter } from "next/router";

import { PAGES_API, TYPE_PARAMS } from "apis";
import Link from "next/link";
import { PRODUCT_CATEGORIES_ITEMS } from "interface/responseSchema/product";
import HoverPopover from "material-ui-popup-state/HoverPopover";
import { responseSchema } from "interface";

const TitleMenu = [
  { id: 0, name: "Trang chủ", link: "/" },
  { id: 1, name: "Về chúng tôi", link: "/about" },
  { id: 2, name: "Sản phẩm", link: "/product" },
  { id: 3, name: "Tin tức", link: "/news" },
  { id: 4, name: "Thư viện", link: "/gallery" },
  { id: 5, name: "Liên hệ", link: "/contact" },
];

type PropsRenderMenu = responseSchema<PRODUCT_CATEGORIES_ITEMS>;

export default function Header() {
  const router = useRouter();
  const { isMdUp, isMdDown } = useMedia();

  const [open, setOpen] = useState(false);

  const popupState = usePopupState({
    variant: "popover",
    popupId: "demoPopover",
  });

  const { data } = useSWR<responseSchema<PRODUCT_CATEGORIES_ITEMS>>(
    transformUrl(PAGES_API, {
      locale: router.locale,
      type: TYPE_PARAMS["product.ProductCategoryPage"],
      fields: "*",
    })
  );

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const renderNav = useMemo(() => {
    if (data == undefined) {
      return null;
    }

    return (
      <Box marginBottom={3}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          margin="1.5rem 0"
        >
          <Box>
            <Image alt="logo" width={100} height={80} src="/img/logo.png" />
          </Box>
          {isMdUp && (
            <Stack direction="row" alignItems="center" spacing={3}>
              {/* {TitleMenu.map((el, idx) => {
                if (el.name == "Sản phẩm") {
                  return (
                    <Box key={idx}>
                      <Link href={el.link}>
                        <Stack
                          direction="row"
                          alignItems="center"
                          {...bindHover(popupState)}
                        >
                          <ItemMenu key={idx} variant="button2">
                            {el.name}
                          </ItemMenu>
                          <ItemMenu key={idx} variant="button2">
                            <ExpandMoreIcon />
                          </ItemMenu>
                        </Stack>
                      </Link>

                      <HoverPopover
                        {...bindMenu(popupState)}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                      >
                        {data &&
                          data.items.map(
                            (el: PRODUCT_CATEGORIES_ITEMS, idx: number) => {
                              return (
                                <MenuItem key={idx} onClick={popupState.close}>
                                  <Typography variant="caption2">
                                    {el.title}
                                  </Typography>
                                </MenuItem>
                              );
                            }
                          )}
                      </HoverPopover>
                    </Box>
                  );
                } else {
                  return (
                    <ItemMenu key={idx} variant="button2">
                      <Link href={el.link}>{el.name}</Link>
                    </ItemMenu>
                  );
                }
              })} */}
              <RenderMenu data={data} handleClose={handleClose} />
            </Stack>
          )}

          {isMdUp && (
            <Stack direction="row" alignItems="center" spacing={2}>
              <Search />

              <Image alt="logo" width={30} height={30} src="/img/vi 1.png" />
            </Stack>
          )}

          {isMdDown && (
            <Box onClick={handleClickOpen}>
              <MenuIcon />
            </Box>
          )}
        </Stack>

        {isMdDown && <Search />}
      </Box>
    );
  }, [isMdUp, isMdDown, popupState, data]);

  const AppBar = useMemo(() => {
    if (data == undefined) {
      return null;
    }

    return (
      <Dialog
        sx={{ display: open ? "block" : "none" }}
        fullScreen
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Stack direction="column" spacing={14} padding="3rem 1.8rem">
          <Stack direction="row" width="100%" justifyContent="space-between">
            <Image alt="logo" width={100} height={80} src="/img/logo.png" />
            <CloseIcon onClick={handleClose} />
          </Stack>

          <Stack direction="column" spacing={5}>
            {/* {TitleMenu.map((el, idx) => {
              if (el.name == "Sản phẩm") {
                return (
                  <Box key={idx}>
                    <Link href={el.link} {...bindHover(popupState)}>
                      <Stack direction="row" alignItems="center">
                        <ItemMenu key={idx} variant="button2">
                          {el.name}
                        </ItemMenu>
                        <ItemMenu key={idx} variant="button2">
                          <ExpandMoreIcon />
                        </ItemMenu>
                      </Stack>
                    </Link>

                    <HoverPopover
                      {...bindMenu(popupState)}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      {data &&
                        data.items.map(
                          (el: PRODUCT_CATEGORIES_ITEMS, idx: number) => {
                            return (
                              <MenuItem key={idx} onClick={popupState.close}>
                                <Typography variant="caption2">
                                  {el.title}
                                </Typography>
                              </MenuItem>
                            );
                          }
                        )}
                    </HoverPopover>
                  </Box>
                );
              } else {
                return (
                  <ItemMenu key={idx} variant="button2" onClick={handleClose}>
                    <Link href={el.link}>{el.name}</Link>
                  </ItemMenu>
                );
              }
            })} */}
            <RenderMenu data={data} handleClose={handleClose} />
            <Image alt="logo" width={30} height={30} src="/img/vi 1.png" />
          </Stack>
        </Stack>
      </Dialog>
    );
  }, [open, data, popupState]);

  return (
    <Container>
      {renderNav}
      {AppBar}
    </Container>
  );
}

const ItemMenu = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.common.black,
    cursor: "pointer",

    "&:hover": {
      color: theme.palette.primary.main,
    },
  };
});

const Search = () => {
  const { isMdDown } = useMedia();
  return (
    <OutlinedInput
      fullWidth={isMdDown ? true : false}
      id="outlined-adornment-weight"
      placeholder="tìm kiếm..."
      endAdornment={<SearchIcon />}
      aria-describedby="outlined-weight-helper-text"
      inputProps={{
        "aria-label": "weight",
      }}
    />
  );
};

const RenderMenu = ({
  data,
  handleClose,
}: {
  data: PropsRenderMenu;
  handleClose: () => void;
}) => {
  const popupState = usePopupState({
    variant: "popover",
    popupId: "demoPopover",
  });

  return TitleMenu.map((el, idx) => {
    if (el.name == "Sản phẩm") {
      return (
        <Box>
          <Link href={el.link} {...bindHover(popupState)}>
            <Stack direction="row" alignItems="center">
              <ItemMenu key={idx} variant="button2">
                {el.name}
              </ItemMenu>
              <ItemMenu key={idx} variant="button2">
                <ExpandMoreIcon />
              </ItemMenu>
            </Stack>
          </Link>

          <HoverPopover
            {...bindMenu(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            {data &&
              data.items.map((el: PRODUCT_CATEGORIES_ITEMS, idx: number) => {
                return (
                  <MenuItem key={idx} onClick={popupState.close}>
                    <Typography variant="caption2">{el.title}</Typography>
                  </MenuItem>
                );
              })}
          </HoverPopover>
        </Box>
      );
    } else {
      return (
        <ItemMenu key={idx} variant="button2" onClick={handleClose}>
          <Link href={el.link}>{el.name}</Link>
        </ItemMenu>
      );
    }
  });
};
