import "../styles/globals.css";
import type { AppProps } from "next/app";
import ErrorBoundaryUi from "../components/ErrorBoundary";
import UI from "../components/ErrorBoundary";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UI>
      <Component {...pageProps} />
    </UI>
  );
}
