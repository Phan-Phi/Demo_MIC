import { Box } from "@mui/material";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Header />
      <BackToTop />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
}
