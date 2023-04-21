import '../styles/globals.css'
import React, { useState, useEffect, useMemo } from "react";
import { AppProps } from 'next/app'
import useMediaQuery from '@mui/material/useMediaQuery';
import Layout from '../components/layout'
import {ThemeProvider, createTheme,responsiveFontSizes, } from '@mui/material/styles';
import GoTop from "../components/goTop";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { DashboardLayout } from '../components/admin/dashboard-layout';
import { wrapper } from '../store/store';

const client = new ApolloClient({
  uri: 'http://localhost:80/graphql',
  cache: new InMemoryCache(),
});

function App({ Component, pageProps: { session, ...pageProps }, router }: AppProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  let theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );


theme = responsiveFontSizes(theme);

const getLayout =
        router.pathname.includes('/admin') ? ((page:any) => <DashboardLayout children={page} />)
        : ((page:any) => <Layout children={page} />);


  return (
    <ApolloProvider client={client}>
   
    

    <ThemeProvider theme={theme}>
      
       {/* <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-JEYE1RNNJV"/>
<Script id="google-analytics" strategy="lazyOnload">
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JEYE1RNNJV', {
    page_path: window.location.pathname,
    });
  `}
</Script> */}

      <GoTop />
     
     
      {getLayout(<Component  {...pageProps} />)}
  </ThemeProvider>
 
  
  </ApolloProvider>
  )
}

export default wrapper.withRedux(App);