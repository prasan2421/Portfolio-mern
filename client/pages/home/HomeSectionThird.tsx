import React from "react";
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import Date from '../../components/date'
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TagSphere from "../../components/wordSphere";
import { CardActionArea, CardActions } from '@mui/material';
import Zoom from '@mui/material/Zoom';

import BackgroundText from "../../components/BackgroundText";

import { GetStaticProps } from 'next'
// import {Link as Link2} from '@mui/material/Link';

import {Grid, Box, Slide, Grow, Typography, Button, IconButton} from '@mui/material';
import { styled, alpha, ThemeProvider, createTheme, useTheme,responsiveFontSizes, } from '@mui/material/styles';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import DownloadIcon from '@mui/icons-material/Download';


const CustomButton = styled(Button)({
 
    padding:'1rem 3rem 1rem 3rem'
   });

export default function HomeSectionThird({  }: {  }) {
    const [checked, setChecked] = React.useState(true);
   
    
    const containerRef = React.useRef(null);
    
  

  return (

    <Box style={{position:'relative', overflow: 'hidden', paddingTop:'5rem',paddingBottom:'10rem'}}>
          <BackgroundText text={'Blog'}/>
                <Grid container sx={{paddingX: {xs:'2.5rem',md:'4.5rem'}, marginBottom:'5rem'}}>
                  <Grid item xs={12} md={6} sx={{display:'flex', alignItems:'center'}}>
                <Slide direction="up" in={checked} container={containerRef.current}>
                        <Box  >
                      <Box className="PortfolioTitle">
                        
                        <Grow in={checked} style={{ transformOrigin: '0 0 0' }}
                            {...(checked ? { timeout: 1000 } : {})}>
                                <Typography variant="h2">Me, Myself and I</Typography>
                        </Grow>
                      
                      </Box>
                      <Box className='subTitle'>
                      <Typography variant="body1" sx={{marginBottom:'2rem'}}>Growing up, I took a liking to all things tech and digital, which led me to picking MIS as my master’s degree major and Computer science and Information technologies as my bachelor’s degree major. Apart from all the tech courses during my MIS studies, I thoroughly enjoyed the customer behavior course and IT project management as a way to connect software development  for business development (specially, how project management and customer behavior can help in business development through proper software development).
</Typography>
                      <Typography variant="body1" sx={{marginBottom:'2rem'}}>For over few years I had many opportunities to work in a vast spectrum of web and mobile technologies what let me gather a significant amount of various experience. Working for companies and individuals around the globe I met and learnt from amazing and ambitious people..</Typography>
                      <Typography variant="body1">I currently am working on self projects and exploring new development areas, also being open for new opportunities.</Typography>
                        </Box>
                          <Box>
                          </Box>
                        </Box>
                        </Slide>
                  </Grid>
                  <Grid item xs={12} md={6} sx={{display:'flex', justifyContent:'center', alignItems:'center', }}>
                
                              <Box sx={{marginTop:'3rem',display:{xs:'block',sm:'block',md:'block',lg:'block',xl:'none'}}}><TagSphere radius={195}/></Box>
                              <Box sx={{display:{xs:'none',sm:'none',md:'none',lg:'none',xl:'block'}}}><TagSphere radius={500}/></Box>
                              
                  </Grid>
                  </Grid>
                  
              </Box>
  );
}