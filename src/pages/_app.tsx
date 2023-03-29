import '../styles/globals.css'
import React, { useState, useEffect, useMemo } from "react";
import { AppProps } from 'next/app'
import useMediaQuery from '@mui/material/useMediaQuery';
import Layout, { siteTitle } from '../components/layout'
import { styled, alpha, ThemeProvider, createTheme, useTheme,responsiveFontSizes, } from '@mui/material/styles';
import GoTop from "../components/goTop";

import { DashboardLayout } from '../components/admin/dashboard-layout';

import axios from 'axios';
import { wrapper } from '../store/store';

const BREAKPOINTS = { mobile: 0, tablet: 900, desktop: 1280 }

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

// const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, 'desktop');



const [backendData , setBackendData] = React.useState([{}])

const loadPlayer = async () => {
  // fetch("/api/contacts").then(
  //   response => response.json()
  // ).then(
  //   data =>{
  //     alert('asdas')
  //   }
    
  // )
  //  .catch( data =>{
  //   alert(JSON.stringify(data))
  // })
   
 
  // .finally(function () {
  //   // always executed
  //   alert('Something went wrong.')
  // });

  axios.get('/api/test')
  .then(function (response) {
    
    // handle success
    console.log(response);
    alert(JSON.stringify(response))
  })
  .catch(function (error) {
   
    // handle error
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  })
  
}

useEffect(()=>{
  // loadPlayer()
  // alert( JSON.parse(localStorage.getItem('user')))
},[])

const getLayout =
        router.pathname.includes('/admin') ? ((page:any) => <DashboardLayout children={page} />)
        : ((page:any) => <Layout children={page} />);


  return (
    <>
   
    

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
 
  
  </>
  )
}

export default wrapper.withRedux(App);