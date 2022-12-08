import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Fragment } from 'react';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
// import { AuthConsumer, AuthProvider } from './contexts/auth-context';
import { createEmotionCache } from '../../utils/create-emotion-cache';
import { registerChartJs } from '../../utils/register-chart-js';
// import { theme } from './theme';
import { useRouter } from 'next/router'
// import { getGoals, reset } from '../../features/blog/blogSlice'
import { Box, Container, Grid } from '@mui/material';
import { Budget } from '../../components/components/dashboard/budget';
import { LatestOrders } from '../../components/components/dashboard/latest-orders';
import { LatestProducts } from '../../components/components/dashboard/latest-products';
import { Sales } from '../../components/components/dashboard/sales';
import { TasksProgress } from '../../components/components/dashboard/tasks-progress';
import { TotalCustomers } from '../../components/components/dashboard/total-customers';
import { TotalProfit } from '../../components/components/dashboard/total-profit';
import { TrafficByDevice } from '../../components/components/dashboard/traffic-by-device';
import { DashboardLayout } from '../../components/components/dashboard-layout';


registerChartJs();

const clientSideEmotionCache = createEmotionCache();

const index = (props) => {



  // const getLayout = Component.getLayout ?? ((page) => page);

  const Page = () => (
    <>
     
      <Box
        // component="main"
        sx={{
          flexGrow: 1,
          // py: 8
        }}
      >
        <Container maxWidth={false}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Budget />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <TotalCustomers />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <TasksProgress />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <TotalProfit sx={{ height: '100%' }} />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <Sales />
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <TrafficByDevice sx={{ height: '100%' }} />
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <LatestProducts sx={{ height: '100%' }} />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <LatestOrders />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );

  return (
    // <CacheProvider value={emotionCache}>
   
    //   <LocalizationProvider dateAdapter={AdapterDateFns}>
    //     <ThemeProvider theme={theme}>
    //       <CssBaseline />

    //     </ThemeProvider>
    //   </LocalizationProvider>
    // </CacheProvider>

    

<Page/>

  );
};

export default index;
