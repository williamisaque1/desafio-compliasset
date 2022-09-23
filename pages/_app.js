import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import ResponsiveAppBar from "../components/header";
import ButtonAdd from "../components/add";
import styles from "../styles/Home.module.css";
import styleGlobal from "../styles/globals.css";
import Home from ".";
import useSWR, { SWRConfig } from "swr";
import axios from "axios";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <div className={[styleGlobal, styles.container]}>
          <CssBaseline />
          <SWRConfig
            value={{
              fetcher: (resource, init) =>
                axios("/api/teste").then((r) => r.data.result),
            }}
          >
            <ResponsiveAppBar />
            <main className={styles.main}>
              <Component {...pageProps} />
            </main>
            <ButtonAdd />
          </SWRConfig>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}
