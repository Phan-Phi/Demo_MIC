import "../styles/globals.css";
import type { AppProps } from "next/app";
import UI from "../components/ErrorBoundary";
import { Footer } from "../components";
import { CssBaseline } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UI>
      <CssBaseline />
      <Component {...pageProps} />
      <Footer />
    </UI>
  );
}
