import { FC } from 'react';
import Head from 'next/head';
import { Container } from '@mui/material';

import { Footer, Navbar } from '..';
import icon from '/public/btg.ico';

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Crypto news</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container maxWidth="lg">{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
