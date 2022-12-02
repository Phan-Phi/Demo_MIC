import "../styles/globals.css";
import type { AppProps } from "next/app";
import UI from "../components/ErrorBoundary";
import ConponentThemeProvider from "../hocs/ThemeProvider";
import Layout from "../components/Layout";
import { SWRConfig } from "swr";
import SWR from "contexts/SWR";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UI>
      <SWR>
        <ConponentThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ConponentThemeProvider>
      </SWR>
    </UI>
  );
}
