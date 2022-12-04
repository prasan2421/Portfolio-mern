import Head from 'next/head';
import React, { useEffect, useState, useRef } from "react";
import { Box, Container } from '@mui/material';
import { BlogListResults } from '../components/blog/blog-list-results';
import { BlogListToolbar } from '../components/blog/blog-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';
import { useSelector, useDispatch } from 'react-redux'

import axios from 'axios';

const Page =  (props) => {
 
  const { user, isSuccess, spinnerAuth } = useSelector((state:any) => state.auth)
  const[data, setData] = React.useState([])
  
  const getData = async() => {
    await axios.get(process.env.NEXT_PUBLIC_HOST+'/blogs',
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
      })
   
      .then(function (response) {
      //  alert(JSON.stringify(response))
        setData(response.data)
    
      })
    
      .catch(function (error) {
        
        console.log(error);
        alert(JSON.stringify(error))
      })


  }
  useEffect(()=>{
    getData()

  },[])

  return (
    <>
      <Head>
        <title>
          Blog | Prasanna Tuladhar
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
        <BlogListToolbar />
        <Box sx={{ mt: 3 }}>
          {data!==null?(
            <BlogListResults customers={data} />
          ):null}
          
        </Box>
      </Container>
    </Box>
      

    </>

  )
}
  



export default Page;
