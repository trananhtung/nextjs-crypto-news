import type { AppProps } from 'next/app';
import { GlobalStyles, ThemeProvider } from '@mui/material';
import { SessionProvider } from 'next-auth/react';

import { themeDesktop, themeMobile } from '../styles/theme';
import Layout from '../containers/Layout/Layout';
import { useMedia } from '../hooks';

function MyApp({ Component, pageProps }: AppProps) {
  const { smDown } = useMedia();
  return (
    <ThemeProvider theme={smDown ? themeMobile : themeDesktop}>
      <GlobalStyles
        styles={{
          body: { backgroundColor: '#e7ebf0' },
        }}
      />
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
