import React from "react";

import fs from 'fs';
import path from 'path'
// import matter from 'gray-matter';
import { useEffect, useState, useRef,useMemo, useCallback } from "react";
import { useRouter, Router } from 'next/router'
// import Announcement from "../components/Announcement";
// import Categories from "../components/Categories";
import { AppBar, Avatar, IconButton, Toolbar, Tooltip } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Badge, { BadgeProps } from '@mui/material/Badge';
import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@mui/material/TextField';
import CancelIcon from '@mui/icons-material/Cancel';
import useBreakpoint from 'use-breakpoint';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import { styled, alpha, ThemeProvider, createTheme, useTheme,responsiveFontSizes, } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Moment from "moment";
import BackgroundText from "../../components/BackgroundText";
// import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import Image from 'next/image';
import customerexp from '../../../public/images/customer-experience.jpeg';
import Button, { ButtonProps } from '@mui/material/Button';
import { wrapper } from "../../store/store";
import { useSpring, animated } from '@react-spring/web';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {getClient} from "../apollo-client";
import Typography from '@mui/material/Typography';
import { gql } from "@apollo/client";
import styles from '../../styles/About.module.css';

import MarkdownDisplay from "../../components/MarkdownDisplay"
import { GoogleMap,LoadScript, useLoadScript, Marker } from "@react-google-maps/api";

 // import Swiper core and required modules


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { setMaxListeners } from "events";

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const BREAKPOINTS = { mobile: 0, tablet: 900, desktop: 1280 } 

const images = [
  {
    label: 'San Francisco  Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  
];

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

// carousel end 

const Work = (props) => {
  interface keyable {
    [key: string]: any  
}

  const router = useRouter()
  const {id,pid} = router.query;
  const [data, setData] = React.useState<keyable>([])
 
  const theme = useTheme();
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, 'desktop');



  useEffect(()=>{
    // alert(JSON.stringify(props.data.blog))
    setData(props.data.blog)
console.log(props.data)
    // if(pid){
    //   getData()
    // }
   
    
  },[router])




  
  const matches = useMediaQuery('(min-width:600px)');
  const [checkedZoom, setCheckedZoom] = React.useState(null);
  const [mouseOverItem, setMouseOverItem] = React.useState(null);
  
  const [checkedImage, setCheckedImage] = React.useState(true);
  const [activeStep, setActiveStep] = React.useState(0);
  
  // const colorMode = React.useContext(ColorModeContext);
  const [checked, setChecked] = React.useState(true);

  
  const [responsedata, setResponsedata] = React.useState([])

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const maxSteps = images.length;

  const [open, setOpen] = React.useState<boolean>(false);
  const [likeBlog, setLikeBlog] = React.useState<number>(0);
  // const [data, setData] = React.useState('testing');
 

  const containerRef = React.useRef(null);

 


  return (
    <ThemeProvider 
theme={theme}
>
<Box  sx={{  flex:1, justifyContent:'left', display: 'flex' }}>{router.pathname !== "/" && (
    
    <Button sx={{zIndex:100000, marginLeft:'10px', marginTop:'10px'}} variant="contained" 
    onClick={() => router.back()}
    startIcon={<ArrowBackIcon/>}>
        Back 
      </Button>
  )}</Box>
    <Box className='main' component="main" sx={{ color: 'text.primary', flexGrow:1, marginBottom:'15px' }}> 
   
    
    <Box className='ContainerWrapper' sx={{marginX:{ xs: '0.1rem', md:'1rem' },}}>{'<html>'}</Box>
   

    <Box sx={{marginBottom:'2rem'}}>
   
      
      {/* -------------------------------------------- First grid --------------------------------------------------- */}

    <Box sx={{position:'relative', overflow: 'hidden', pt:{xs:'3rem', sm:'3rem', md:'6rem'}}}>
    
    <BackgroundText text={id} topMargin={0}/>
    <Container maxWidth="xl" sx={{mb:'3.5rem'}} >
      <Box sx={{height:{xs:'8rem', sm:'10rem', md:'15rem'}}}>
      <Image style={{width:'100%', objectFit:'cover',height:'inherit'}} src={customerexp} alt="Cover image"/>

      </Box>
      
    <Box sx={{display:'flex', alignItems:'center',mt:'1rem', mb:'2rem'}}>
            {/* <Avatar
            
            sx={{
              cursor: 'pointer',
              height: 40,
              width: 40,
              ml: 1
            }}
            src="/static/images/avatars/avatar_1.png"
          >
            
          </Avatar> */}
          <AccountCircleIcon fontSize="large"/>
          <Box sx={{marginLeft:'1rem'}} >
              <p style={{margin:0}}>Prasanna Tuladhar</p>
              <Box sx={{color:'gray', display:'flex', flexDirection:'row'}}>
          
               <Typography variant="caption">Posted on {Moment(data.createdAt).format('MMMM Do YYYY')}</Typography><span style={{marginLeft:'0.5rem', marginRight:'0.5rem'}}>•</span>
               <Typography variant="caption">Updated on {Moment(data.updatedAt).format('MMMM Do YYYY')}</Typography>
                             </Box>
              <Box>

              </Box>
              </Box>
              <Box>
                {}

                <IconButton sx={{ml:{xs:'0', sm:'1rem'}}} aria-label="Like" onClick={()=>setLikeBlog(likeBlog+1)}>
  <StyledBadge badgeContent={likeBlog} color="secondary">
    <FavoriteTwoToneIcon  sx={{ color: 'red' }} fontSize="large"/>
  </StyledBadge>
</IconButton>
              </Box> 
    </Box>
      <Grid container sx={{mb:'3.5rem'}}>
        <Grid item xs={12} lg={8}> 
      <Slide direction="up" in={checked} container={containerRef.current}>

              <Box sx={{ color: 'text.primary'}} >


            <Box className={styles.PortfolioTitle} >
              
              <Grow in={checked} style={{ transformOrigin: '0 0 0' }}
                  {...(checked ? { timeout: 1000 } : {})}>
                      <Typography variant={breakpoint=='mobile'?"h4":"h2"}>{data.title}</Typography>
                      
              </Grow>

            </Box>
            <Box className={styles.subTitle}>
            
            <Typography variant={breakpoint=='mobile'?"subtitle1":"h5"} sx={{textAlign:'justify', textJustify:'inter-word'}}>{data.description}</Typography>
           
              </Box>
             
              </Box>
              </Slide>
        </Grid>
        <Grid item xs={12} md={4} />
       
        </Grid>

          {/* -------------------------------------------- First grid end --------------------------------------------------- */}
         
          
          {/* -------------------------------------------- Second grid --------------------------------------------------- */}
   
     
     
     <Box className={styles.ProjectsDiv}>
     
        <Card sx={{ borderTop:`2px solid lightgreen`}}>
        
            <CardContent sx={{px:{ sm:2, md: 3}}}>
              {data.length!==0?<MarkdownDisplay data={data.markdown} />:null}
              
            </CardContent>
        
        </Card>
    
        </Box>
        </Container>
    </Box>
    
  
 
   
          {/* -------------------------------------------- Second grid end--------------------------------------------------- */}
    
    
    </Box>
      
    <Box className='ContainerWrapper-base' sx={{marginX:{ xs: '0.1rem', md:'1rem' },}}>{'</html>'}</Box>

      {/* Grid */}
     
      
      {/* -------------------------   ------------ Carousel start ----------- -------------------------- */}
        
            {/* -------------------------   ------------ Carousel end ----------- -------------------------- */}
      
        
     
        {/* Top banners end*/}
      {/* <Slider /> */}
      {/* <Categories /> */}
      {/* <Products/> */}
      {/* <Newsletter/> */}
   
    
    
          
      </Box>
      
      </ThemeProvider>
  );
};

export default React.memo(Work);


export async function getServerSideProps(context) {
  const client = getClient();
      const { id,pid } = context.query;

 
  //     const router = useRouter()
  // const {id,pid} = router.query;
      // const res = await fetch(process.env.HOST+'/blogs/public/all',
      // {
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // })
      // const data = pid


      const { data } = await client.query({
       
        query: gql`
          query blog($pid: ID!) {
            blog(id:$pid) {
              _id
              title
              markdown
              description
              user {
                _id
                name
                email
                status
              }
              createdAt
              updatedAt
            }
          }
        `,
        variables: { pid },
       
      });
    
      


      // if (!data) {
      //   return {
      //     notFound: true,
      //   }
      // }
    
      return {
        props: {data}, // will be passed to the page component as props
      }
    }

