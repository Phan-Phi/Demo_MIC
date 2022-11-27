import "../styles/globals.css";
import type { AppProps } from "next/app";
import ErrorBoundaryUi from "../components/ErrorBoundary";
import UI from "../components/ErrorBoundary";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UI>
      <Component {...pageProps} />
    </UI>
  );
}
