import { Box, useTheme } from "@mui/material";
import { customFont } from "../libs/customFont";

export default function Header() {
  const theme = useTheme();

  return <Box sx={{ backgroundColor: theme.palette.primary.main }}>Header</Box>;
}
