import "../styles/globals.css";
import type { AppProps } from "next/app";
import UI from "../components/ErrorBoundary";
import ConponentThemeProvider from "../hocs/ThemeProvider";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UI>
      <ConponentThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ConponentThemeProvider>
    </UI>
  );
}
