import React from 'react';
import Head from 'next/head';
import { GlobalStyles } from '../components/elements';

const Layout: React.FC = (props) => {
  const { children } = props;
  return (
    <>
      <Head>
        <title>Ruina</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyles />
      {children}
    </>
  );
};

export default Layout;
