import { useWindowScroll } from "react-use";
import { useEffect, useState } from "react";

import Link from "next/link";

import Slide from "@mui/material/Slide";
import { Box, useTheme } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function BackToTop() {
  const theme = useTheme();
  const { y } = useWindowScroll();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (y > 200) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [y]);

  return (
    <Link href="#home">
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        <Box
          sx={{
            boxShadow: 3,
            borderRadius: "1rem",
            cursor: "pointer",
            backgroundColor: theme.palette.primary.main,
            position: "fixed",
            zIndex: 99,
            bottom: 40,
            right: 40,
            padding: "0.7rem",
            color: theme.palette.common.white,
          }}
        >
          <ExpandLessIcon sx={{ height: "100%", display: "block" }} />
        </Box>
      </Slide>
    </Link>
  );
}
