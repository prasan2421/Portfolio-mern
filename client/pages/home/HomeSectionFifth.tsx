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

import BackgroundText from "../../components/BackgroundText";

import { GetStaticProps } from 'next'
// import {Link as Link2} from '@mui/material/Link';

import {Grid, Box, Slide, Grow, Typography, Button, IconButton} from '@mui/material';
import { styled, alpha, ThemeProvider, createTheme, useTheme,responsiveFontSizes, } from '@mui/material/styles';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import DownloadIcon from '@mui/icons-material/Download';

const myLatLng = { lat: 59.9239669, lng: 10.7466753 };

const blogData=[
  {'topic':'Javascript', 'title':'React', 'subtitle':'This is a demo summary.', 'color':'red'},
  {'topic':'Javascript','title':'React Native', 'subtitle':'This is a demo summary.', 'color':'green'},
  {'topic':'Web designing','title':'UI/UX', 'subtitle':'This is a demo summary.', 'color':'#81D8F7'},
  {'topic':'Business development','title':'E-commerce', 'subtitle':'This is a demo summary.', 'color':'yellow'},
  {'topic':'Business growth','title':'Growth Hacking', 'subtitle':'This is a demo summary.', 'color':'cyan'} ]

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


export default function HomeSectionFifth({  }: {  }) {
    const [checked, setChecked] = React.useState(true);
   
    
    const containerRef = React.useRef(null);
    
  

  return (

    <Box sx={{position:'relative', overflow: 'hidden', paddingY:'5rem',}}>
          
                <Grid container sx={{paddingX: {xs:'2.5rem',md:'4.5rem'}}} spacing={4}>
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
                      <Typography variant="body1">I&apos;m interested in part time / full time or freelance work opportunities- especially ambitious or large projects. However, if you have other request or question, don&apos;t hesitate to use the form.</Typography>
                        </Box>
                        <Box className='formBelow'>
                        <TextField id="outlined-basic" label="Name" variant="outlined" sx={{ width:{sm:'100%', md:'50%'}, marginBottom:'10px' , paddingRight:'5px'}}/>
                        <TextField id="outlined-basic" label="Email" variant="outlined" sx={{width:{sm:'100%', md:'50%'}, marginBottom:'10px',paddingLeft:'5px' }}/>

                        <TextField id="outlined-basic" label="Subject" variant="outlined" style={{display:'flex', width:'100%', marginBottom:'10px' }}/>
                        <TextField
                        id="outlined-basic" label="Message" variant="outlined"
                      
                            multiline
                            rows={4}
                            // defaultValue="You are awesome!!"
                            style={{display:'flex', width:'100%',marginBottom:'20px'}}
                          />
                          <Box  sx={{display:'flex', justifyContent:'flex-end'}}>
                          <Button variant="outlined">
                        Send message ! 
                      </Button>
                          </Box>
                      
                        </Box>
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