import { Box } from "@mui/material";
import React from "react";

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
  return (
    <Box index={index} value={value}>
      {children}
    </Box>
  );
}
