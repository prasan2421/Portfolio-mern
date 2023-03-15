import React, { useEffect } from "react";
import { useRouter } from 'next/router'
import Image from 'next/image';
import Head from 'next/head'
// import Layout, { siteTitle } from '../../../components/layout'
import utilStyles from '../../styles/utils.module.css'
// import { getSortedPostsData } from '../../../../lib/posts'
import Link from 'next/link'
import ButtonBase from '@mui/material/ButtonBase';
// import Date from '../../../components/date'
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import { getProjectsIds } from '../../../../lib/posts'
import { CardActionArea, CardActions } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import Paper from '@mui/material/Paper';
import useBreakpoint from 'use-breakpoint';
import deer from '../../assets/images/deer.png';

import BackgroundText from "../../components/BackgroundText";

import { GetStaticProps } from 'next'
// import {Link as Link2} from '@mui/material/Link';

import {Grid, Box, Slide, Grow, Typography, Button, IconButton} from '@mui/material';
import { styled, alpha, ThemeProvider, createTheme, useTheme,responsiveFontSizes, } from '@mui/material/styles';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import DownloadIcon from '@mui/icons-material/Download';
import { url } from "inspector";

const BREAKPOINTS = { mobile: 0, tablet: 900, desktop: 1280 }



const CustomButton = styled(Button)({
 
    padding:'1rem 3rem 1rem 3rem'
   });

   const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    overflow:'hidden',
   
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
     
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .Image-mui': {
        transform: 'scale(1.5)',
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    transition: 'transform .2s',
    
    '&:hover': {
      
     
     
    },
  });
  
  const ImageBox = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,

    

    '&:hover': {
      '& .ImageBox-Text': {
        backgroundColor:theme.palette.mode === 'dark' ?'rgb(48 48 48 / 50%)':'rgb(255 255 255 / 24%)',
      },
     
     
    },
    
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));   

export default function HomeSectionSecond() {

  const router = useRouter()
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, 'desktop');

    const [checked, setChecked] = React.useState(true);
    const [mouseOverItem, setMouseOverItem] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    
    const containerRef = React.useRef(null);
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const handleOpen = () => {
      router.push('/projects')
    };

    const handlePopoverOpen = (index:any) => {
      setMouseOverItem(index)
    };

    
  
  
  
  
  const objectData=[
      {'id':'1','img':'images/1.png','title':'Prasannat Portfolio','subtitle':'A portfolio website developed in MERN stack.','technologies': 'React, React Native, Typescript, Express, MongoDB','link':'http://www.prasannat.com','date':'07/03/2018 – 30/11/2020','list':['NEXT js, client side framework that use react js, to create front-end.','Express, a node js web-application framework, to create backend.','Mongoose db, an Object Data Modeling (ODM) library for MongoDB and Node js, connecting backend-end with front-end.','Material UI, Google Maps, Redux, SSR, AXIOS for Rest API requests, CRUD, React Spring, and more..',],'images':['/images/Portfolio/1.png','/images/Portfolio/2.png']},
      {'id':'2','img':'images/foodbusters.png','title':'Foodbusters','subtitle':'Food delivery mobile application (customer and delivery application)','technologies': 'React Native, Javascript','link':'https://foodbusters.com.np/','date':'07/03/2018 – 30/11/2020','list':['Location tracking','Google maps features.','cart system.','API integration between applications.','Redux State management','Product listing and organising.','AXIOS for HTTP requests to rest API.'],'images':['/images/Foodbusters/1.jpg','/images/Foodbusters/2.jpg','/images/Foodbusters/3.jpg','/images/Foodbusters/4.jpg','/images/Foodbusters/5.jpg','/images/Foodbusters/6.jpg','/images/Foodbusters/7.jpg','/images/Foodbusters/8.jpg','/images/Foodbusters/9.jpg']},
      {'id':'3','img':'images/covid.png','title':'Nepal Covid-19 Surveillance','subtitle':'A mobile application for COVID-19 Surveillance in Nepal','technologies': 'React Native, Javascript','link':'https://play.google.com/store/apps/details?id=com.iclick.covidnew&hl=en&gl=US','date':'07/03/2018 – 30/11/2020','list':['Government of Nepal: Kathmandu Metropolitan City','Surveillance app to monitor the spread of covid-19 in the locality.','Check ones possibility of covid-19 comparing with the given symptoms.','Monitor and notify through push notifications.','Covid-19 Surveillance system developed for the residence of Kathmandu city.'],'images':['/images/Covid/1.jpg','/images/Covid/2.jpg','/images/Covid/3.jpg','/images/Covid/4.jpg','/images/Covid/5.jpg','/images/Covid/6.jpg','/images/Covid/7.jpg','/images/Covid/8.jpg',]  },
      {'id':'4','img':'images/patanjalisfa.png','title':'Patanjali SFA','subtitle':'Sales Force Order collection application for internal use of Patanjali employees.','technologies': 'React Native, Javascript','link':'https://play.google.com/store/apps/details?id=com.iclick.patanjali&hl=en&gl=US','date':'07/03/2018 – 30/11/2020','list':['Location tracking.','Google maps features.','Cart system.','Redux State management','Product listing and organising','AXIOS for HTTP requests to rest API'],'images':['/images/Patanjalisfa/1.jpg','/images/Patanjalisfa/2.jpg','/images/Patanjalisfa/3.jpg','/images/Patanjalisfa/4.jpg','/images/Patanjalisfa/5.jpg','/images/Patanjalisfa/6.jpg','/images/Patanjalisfa/7.jpg','/images/Patanjalisfa/8.jpg','/images/Patanjalisfa/9.jpg','/images/Patanjalisfa/10.jpg','/images/Patanjalisfa/11.jpg','/images/Patanjalisfa/12.jpg','/images/Patanjalisfa/13.jpg','/images/Patanjalisfa/14.jpg','/images/Patanjalisfa/15.jpg','/images/Patanjalisfa/16.jpg','/images/Patanjalisfa/17.jpg','/images/Patanjalisfa/18.jpg','/images/Patanjalisfa/19.jpg','/images/Patanjalisfa/20.jpg','/images/Patanjalisfa/21.jpg','/images/Patanjalisfa/22.jpg',]},
      {'id':'5','img':'images/pbri.png','title':'Patanjali Bio Research Institute','subtitle':'Sales Force Order collection application for internal use of Patanjali Bio Research employees.','technologies': 'React Native, Javascript','link':'https://play.google.com/store/apps/details?id=com.patanjali.pbri&hl=en&gl=US','date':'07/03/2018 – 30/11/2020','list':['Location tracking.','Google maps features.','Cart system.','Redux State management','Product listing and organising','AXIOS for HTTP requests to rest API'],'images':[]},
      {'id':'6','img':'','title':'Patanjali Dairy Application','subtitle':'Sales Force Order collection application for internal use of Patanjali Dairy employees.','technologies': 'React Native, Javascript','link':'https://play.google.com/store/apps/details?id=com.patanjali.dairy&hl=en&gl=US','date':'07/03/2018 – 30/11/2020','list':['Location tracking.','Google maps features.','Cart system.','Redux State management','Product listing and organising','AXIOS for HTTP requests to rest API'],'images':[]},
      {'id':'7','img':'','title':'Prakriti Organics','subtitle':'Sales Force Order collection application for internal use of Prakriti Organics employees.','technologies': 'React Native, Javascript','link':'https://play.google.com/store/apps/details?id=com.prakriti.organics','date':'07/03/2018 – 30/11/2020','list':['Location tracking.','Google maps features.','Cart system.','Redux State management','Product listing and organising','AXIOS for HTTP requests to rest API'],'images':[]},
      {'id':'8','img':'','title':'Ruchi Soya- Nutrela SOA','subtitle':'Sales Order collection application for internal use of Ruchi Soya - Nutrela SOA employees.','technologies': 'React Native, Javascript','link':'https://play.google.com/store/apps/details?id=com.ruchisoya.nutrela&ref=apkcombo.com','date':'07/03/2018 – 30/11/2020','list':['Location tracking.','Google maps features.','Cart system.','Redux State management','Product listing and organising','AXIOS for HTTP requests to rest API'],'images':['images/Nutrela/1.jpg','images/Nutrela/2.jpg','images/Nutrela/3.jpg','images/Nutrela/4.jpg','images/Nutrela/5.jpg','images/Nutrela/6.jpg','images/Nutrela/7.jpg','images/Nutrela/8.jpg','/images/Nutrela/9.jpg']},
      {'id':'9','img':'images/doe.png','title':'Department of Environment- GIS','subtitle':'GIS Based Industrial Information System','technologies': 'Laravel, PHP, HTML, CSS, Javascript (jQuery)','link':'https://play.google.com/store/apps/details?id=com.iclick.giis&hl=en&gl=US','date':'07/03/2018 – 30/11/2020','list':['Web application - Laravel (PHP)','Government of Nepal: Department of Forest and Environment'],'images':[]},
      {'id':'10','img':'','title':'IMIS - Jhenaidah','subtitle':'Integrated Municipality Integrated system app of Jhenaidah municipality, Bangladesh','technologies': 'Laravel, PHP, HTML, CSS, Javascript (jQuery)','link':'http://178.128.123.39/imis-jhenaidah-new/','date':'07/03/2018 – 30/11/2020','list':['Web application - Laravel (PHP)','Muicipality Integrated System for Jhenaidah Municipality, Bangladesh'],'images':[]},
    ]
    
  //     useEffect(()=>{
      
  //   // getStaticProps()
  //   alert(JSON.stringify(posts))
  // })

 

  
  const theme = useTheme();
  return (

    <Box sx={{position:'relative', overflow: 'hidden', paddingTop:'3rem',paddingBottom:'10rem',backgroundColor: 'background.default'}}>
    {/* <Box className="back-text" sx={{color: theme.palette.mode === 'dark' ?'rgba(255,255,255,0.04)':'rgba(78,78,78,0.15)'}}>WORK</Box> */}
    <BackgroundText text={'Work'}/>
    <Grid container sx={{paddingX: {xs:'2.5rem',md:'4.5rem'}, marginBottom:'5rem'}}>
      <Grid item xs={12} md={8}>
    <Slide direction="up" in={checked} container={containerRef.current}>
            <Box sx={{ color: 'inherit'}} >
          <Box className="PortfolioTitle ">
            
            <Grow in={checked} style={{ transformOrigin: '0 0 0' ,color:'inherit'}}
                {...(checked ? { timeout: 1000 } : {})}>
                    <Typography variant="h2">My Portfolio</Typography>
            </Grow>
           
          </Box>

          
          <Box className='subTitle'>
          <Typography variant="body1" sx={{textAlign:'justify', textJustify:'inter-word'}}>A small gallery of recent projects chosen by me. I&apos;ve done them all together with amazing people from companies around the globe. It&apos;s only a drop in the ocean compared to the entire list.</Typography>
            </Box>
            
             
            </Box>
            </Slide>
      </Grid>
      <Grid item xs={12} md={4} sx={{display:'flex', marginTop:{xs:'3rem'}, justifyContent:{sm:'left', md:'center'}, alignItems:{sm:'left',md:'center'}}}>
      <Link  href={'/work#sectProjects'} passHref >
                  <CustomButton type="button" variant="outlined" 
                  // onClick={handleOpen}
                  
                  >See more!</CustomButton></Link>
               
      </Grid>
      </Grid>
      <Grid container className="portfolioGallary" spacing={1}>
     

      {(objectData?objectData.slice(0, 5):[]).map((data, index) => (
        <Grid key={data.id} item xs={6} md={2.4} sx={{position:'relative', }}>
     
        <ImageButton
         onClick={() => {
          router.push({
            pathname: `/work/${data.title}`,
            query: data,
            
          })
        }}
        focusRipple
        key={data.id}
        style={{
          width: '100%',
          
        }}
        // text.frontmatter.socialImage?`/${text.frontmatter.socialImage}`:deer
      >
       
        <ImageSrc className="Image-mui" sx={{ backgroundImage: data.img?`url(${data.img})`:`url(${'/images/deer.png'})`}} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <ImageBox>
          <Typography
            component="span"
            variant="subtitle2"
            color="inherit"

            className="ImageBox-Text"
            sx={{
              
              position: 'relative',
              p: 2,
              pt: 2,
              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            }}
          >
            {data.title}
            <ImageMarked className="MuiImageMarked-root" />
          </Typography>
        </ImageBox>
      </ImageButton>
     
      </Grid>
      ))}
     

        <Grid item xs={6} md={2.4} sx={{position:'relative', }}>
          <Link  href={'/work#sectProjects'}  passHref >
        <ImageButton
        focusRipple
        
        style={{
          width: '100%',
          
        }}
        // text.frontmatter.socialImage?`/${text.frontmatter.socialImage}`:deer
      >
       
        <ImageSrc className="Image-mui" sx={{ backgroundImage: `url('https://www.zmescience.com/mrf4u/statics/i/ps/cdn.zmescience.com/wp-content/uploads/2016/08/600px-Venus_in_Real_Color_28Mosaic29.jpg?width=1200&enable=upscale')`}} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <ImageBox>
          <Typography
            component="span"
            variant="subtitle2"
            color="inherit"

            className="ImageBox-Text"
            sx={{
              
              position: 'relative',
              p: 2,
              pt: 2,
              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            }}
          >
            See More!
            <ImageMarked className="MuiImageMarked-root" />
          </Typography>
        </ImageBox>
      </ImageButton>
      </Link>
      </Grid>


      </Grid>
  </Box>
  );
}



