import "../styles/globals.css";
import type { AppProps } from "next/app";
import UI from "../components/ErrorBoundary";
import ConponentThemeProvider from "../hocs/ThemeProvider";
import Layout from "../components/Layout";
import SWR from "contexts/SWR";
import Setting from "contexts/Settings";
import { SnackbarProvider } from "notistack";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UI>
      <SnackbarProvider>
        <SWR>
          <ConponentThemeProvider>
            <Setting>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Setting>
          </ConponentThemeProvider>
        </SWR>
      </SnackbarProvider>
    </UI>
  );
}
