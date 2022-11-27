import { useTheme, useMediaQuery } from "@mui/material";

export const useMedia = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const isLgDown = useMediaQuery(theme.breakpoints.down("lg"));

  return {
    isMdUp,
    isSmUp,
    isSmDown,
    isMdDown,
    isLgDown,
  };
};
