import { Box } from "@mui/material";

interface TabPanelProps {
  index: number;
  value: number;
}

export default function TabPanel({
  children,
  index,
  value,
}: {
  children: React.ReactNode;
  index: number;
  value: number;
}) {
  return value == index ? <Box hidden={value !== index}>{children}</Box> : null;
}
