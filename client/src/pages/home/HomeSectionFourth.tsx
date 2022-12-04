import React from "react";
import Head from 'next/head'
import Layout, { siteTitle } from '../../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../../../lib/posts'
import Link from 'next/link'
import Date from '../../../components/date'
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TagSphere from "../../../components/wordSphere";
import { CardActionArea, CardActions } from '@mui/material';
import Zoom from '@mui/material/Zoom';

import BackgroundText from "../../../components/BackgroundText";

import { GetStaticProps } from 'next'
// import {Link as Link2} from '@mui/material/Link';

import {Grid, Box, Slide, Grow, Typography, Button, IconButton} from '@mui/material';
import { styled, alpha, ThemeProvider, createTheme, useTheme,responsiveFontSizes, } from '@mui/material/styles';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import DownloadIcon from '@mui/icons-material/Download';


const blogData=[
  {'topic':'Javascript', 'title':'React', 'subtitle':'This is a demo summary.', 'color':'red'},
  {'topic':'Javascript','title':'React Native', 'subtitle':'This is a demo summary.', 'color':'green'},
  {'topic':'Web designing','title':'UI/UX', 'subtitle':'This is a demo summary.', 'color':'#81D8F7'},
  {'topic':'Business development','title':'E-commerce', 'subtitle':'This is a demo summary.', 'color':'yellow'},
  {'topic':'Business growth','title':'Growth Hacking', 'subtitle':'This is a demo summary.', 'color':'cyan'} ]


export default function HomeSectionFourth({  }: {  }) {
    const [checked, setChecked] = React.useState(true);
   
    
    const containerRef = React.useRef(null);
    
  

  return (
<Box sx={{paddingTop:'3rem',paddingBottom:'3rem',backgroundColor: 'background.default'}}>
    <Container  maxWidth="xl" >
     <Grid container > 
     {blogData.map((text, index) => (
      <Grid key={index} xs={6} sm={4}>
        <Card sx={{margin:'7px', borderTop:`2px solid  ${text.color}`,}}>
          <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" color={`${text.color}`}>
                {text.topic}
              </Typography>
              <Typography gutterBottom variant="h4" component="div">
                {text.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {text.subtitle}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
     ))}
     </Grid>
     <Box sx={{justifyContent:'center', display:'flex', margin:'2rem'}}>
     <Link href="#" 
    //  underline="none" 
     >
        See all articles.....
      </Link>
      
      </Box>
   </Container>
   </Box>
  );
}