import React from "react";
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import Date from '../../components/date'
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TagSphere from "../../components/wordSphere";
import { CardActionArea, CardActions } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import TextField from '@mui/material/TextField';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MyMaps from "../../components/maps";
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import qs from 'qs';
import axios from 'axios';
import LoadingButton from '@mui/lab/LoadingButton';
import Send from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import BackgroundText from "../../components/BackgroundText";

import { GetStaticProps } from 'next'
// import {Link as Link2} from '@mui/material/Link';

import {Grid, Box, Slide, Grow, Typography, Button, IconButton , Collapse} from '@mui/material';
import { styled, alpha, ThemeProvider, createTheme, useTheme,responsiveFontSizes, } from '@mui/material/styles';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import DownloadIcon from '@mui/icons-material/Download';

const myLatLng = { lat: 59.9239669, lng: 10.7466753 };



  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return (<p style={{color:'green'}}>Loading..</p>);
      case Status.FAILURE:
        return (<p style={{color:'green'}}>error</p>);
      case Status.SUCCESS:
        return <MyMaps center={myLatLng} zoom={13}/>;
    }
  };

  interface IFormInputs {
    name: string;
    email: string;
    subject: string;
    message: string;
    // iceCreamType: { label: string; value: string };
    // password: yup.string().min(4).max(20).required(),
  }

  const schema = yup.object({
    name: yup.string().required(),
    // age: yup.number().positive().integer().required(),
    email: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required()
  }).required();
 

export default function HomeSectionFifth({  }: {  }) {
    const [checked, setChecked] = React.useState(true);
    const [sendTrigger, setSendTrigger] = React.useState(false);
    const [success, setSuccess] = React.useState(true);
    const [alertOpen, setAlertOpen] = React.useState(false);
   
    
    const containerRef = React.useRef(null);

    const submitMessage= async(data:any) =>{

      setSendTrigger(true);
    
  
      axios.post('/api/contacts'
      ,qs.stringify(data)
      )
      .then(function (response) {
        setSendTrigger(false)
        setSuccess(true)
        setAlertOpen(true)
       
        
        // handle success
        // console.log(response);
        // alert(JSON.stringify(response.data))
      })
      .catch(function (error) {
        setSendTrigger(false)
        setSuccess(false)
        setAlertOpen(true)
        // handle error
        console.log(error);
        alert(JSON.stringify(error))
      })
     
    }
    
    const { control, handleSubmit, formState: { errors }  } = useForm<IFormInputs>({
      resolver: yupResolver(schema),
    });
  
    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
      
      submitMessage(data)
      // alert(JSON.stringify(data))
      
    // setMessage(data)
    
    };

  return (

    <Box sx={{position:'relative', overflow: 'hidden', paddingY:'5rem',}}>
          
                <Grid container sx={{paddingX: {xs:'2.5rem',md:'4.5rem'}}} spacing={4}>
                <Collapse in={alertOpen} sx={{position:'absolute', bottom:0, right:20}} >
        <Alert
        variant="filled" severity={success?"success":"error"}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAlertOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {success?'Message Sent':'Message sending Failed'}
        </Alert>
      </Collapse>
                  <Grid item xs={12} md={6} sx={{display:'flex', alignItems:'center'}}>
                <Slide direction="up" in={checked} container={containerRef.current}>
                        <Box sx={{ color: 'text.primary'}} >
                      <Box className="PortfolioTitle">
                        
                        <Grow in={checked} style={{ transformOrigin: '0 0 0' }}
                            {...(checked ? { timeout: 1000 } : {})}>
                                <Typography variant="h2">Contact me</Typography>
                        </Grow>
                      
                      </Box>
                      <Box className='subTitle'>
                      <Typography variant="body1" sx={{ textAlign:'justify', textJustify:'inter-word'}}>I&apos;m interested in part time / full time or freelance work opportunities - especially ambitious on large projects. However, if you have other request or question, don&apos;t hesitate to use the form.</Typography>
                        </Box>
                        <form onSubmit={handleSubmit(onSubmit)} style={{marginTop:'20px'}}>

        <Controller
            name="name"
            control={control}
            // defaultValue="John Doe"
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                variant="outlined"
                error={!!errors.name}
                helperText={errors.name ? errors.name?.message : ''}
                fullWidth
                margin="dense"
                sx={{ width:{xs: '100%',sm:'100%', md:'50%'}, marginBottom:'10px' , paddingRight:{sm:0,md:'5px'}}}
              />
            )}
          />

        <Controller
            name="email"
            control={control}
            // defaultValue="example@dev.com"
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email ? errors.email?.message : ''}
                sx={{width:{xs: '100%',sm:'100%', md:'50%'}, marginBottom:'10px',paddingLeft:{sm:0,md:'5px'} }}
                fullWidth
                margin="dense"
              />
            )}
          />
          <Controller
            name="subject"
            control={control}
            // defaultValue="Greetings"
            render={({ field }) => (
              <TextField
                {...field}
                label="Subject"
                
                variant="outlined"
                error={!!errors.subject}
                helperText={errors.subject ? errors.subject?.message : ''}
                sx={{width: '100%', marginBottom:'10px', }}
                fullWidth
                margin="dense"
              />
            )}
          />    

        <Controller
            name="message"
            control={control}
            // defaultValue="You are awesome!!"
            render={({ field }) => (
              <TextField
                {...field}
                label="Message"
                
              multiline
              rows={4}
             
                variant="outlined"
                error={!!errors.message}
                helperText={errors.message ? errors.message?.message : ''}
                sx={{width: '100%', marginBottom:'10px', }}
                fullWidth
                margin="dense"
              />
            )}
          />    
           
            <LoadingButton type="submit" variant="contained" loading={sendTrigger?true:false}
          loadingPosition="end"
          endIcon={<Send/>}>
              Send 
            </LoadingButton>
        </form>
                          <Box>
                          </Box>
                        </Box>
                        </Slide>
                  </Grid>
                  <Grid item xs={12} md={6} >
                
                  <Wrapper apiKey={"AIzaSyD52vW7Nc0Dxavo8s5wd_uaPjLr8SuWYJM"} render={render} />
                    
                  </Grid>
                  
                  </Grid>
                  
              </Box>
  );
}