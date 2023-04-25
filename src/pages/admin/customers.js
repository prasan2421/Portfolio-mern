import Head from 'next/head';
import React, { useEffect, useState, useRef } from "react";
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../../components/admin/customer/customer-list-results';
import { CustomerListToolbar } from '../../components/admin/customer/customer-list-toolbar';
import { DashboardLayout } from '../../components/components/dashboard-layout';
// import { customers } from './__mocks__/customers';

import axios from 'axios';

const Page =  (props) => {
 
  const[data, setData] = React.useState([])
  
  
  const getData = async() => {

    try{
    
    const response = await axios.get(process.env.HOST+'/contacts',
      {
        headers: {

          'Content-Type': 'application/json',
        },
      }
    )
      .then(function (response) {
      
        setData(response.data)
          // alert(JSON.stringify(data));return;
      })
    }
      catch (error) {
       
        console.log('Error is :' + error);
      };


  }
  useEffect(()=>{
    getData()

  },[])

  return (
    <>
      <Head>
        <title>
          Contacts | Prasanna Tuladhar
        </title>
       
      </Head>
      <Box
      component="main"
      sx={{
        flexGrow: 1,
        // py: 8
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{ mt: 3 }}>
          
          {data!==null?(
            <CustomerListResults customers={data} />
          ):null}
          
        </Box>
      </Container>
    </Box>
      

    </>

  )
}
  



export default Page;
