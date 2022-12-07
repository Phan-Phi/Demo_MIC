import { Box } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Header />
      <Box>{children}</Box>

      <Footer />
    </Box>
  );
}
