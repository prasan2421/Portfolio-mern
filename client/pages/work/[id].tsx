import React from "react";

import fs from 'fs';
import path from 'path'
import matter from 'gray-matter';
import { useEffect, useState, useRef,useMemo, useCallback } from "react";
import { useRouter } from 'next/router'
// import Announcement from "../components/Announcement";
// import Categories from "../components/Categories";
import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@mui/material/TextField';
import CancelIcon from '@mui/icons-material/Cancel';
import useBreakpoint from 'use-breakpoint';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
// import Newsletter from "../components/Newsletter";
// import Products from "../components/Products";
// import Slider1 from "../components/Slider";
import { styled, alpha, ThemeProvider, createTheme, useTheme,responsiveFontSizes, } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import prasannapng from '../assets/images/prasannapng.png';
import IconButton from '@mui/material/IconButton';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Backdrop from '@mui/material/Backdrop';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Send from '@mui/icons-material/Send';
import Zoom from '@mui/material/Zoom';
import Image from 'next/image'
import BackgroundText from "../../components/BackgroundText";
// import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import Switch from '@mui/material/Switch';
import Button, { ButtonProps } from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from '@mui/material/Link';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import InterestsIcon from '@mui/icons-material/Interests';
import { useSpring, animated } from '@react-spring/web';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { CardActionArea, CardActions } from '@mui/material';
import styles from '../../styles/About.module.css';
import Alert from '@mui/material/Alert';
import FormControlLabel from '@mui/material/FormControlLabel';
import TagSphere from "../../components/wordSphere";
import MyMaps from "../../components/maps";
import DetailWork from "../../components/DetailWork"
import { GoogleMap,LoadScript, useLoadScript, Marker } from "@react-google-maps/api";

 // import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import usn from '../../assets/images/usn.png';
import tic from '../../assets/images/tic.png';
import tu from '../../assets/images/tu.png';
import spn from '../../assets/images/spn.png';
import art from '../../assets/images/art.png';
import ballSports from '../../assets/images/ballsports.png';
import cycling from '../../assets/images/cycling.png';
import guitar from '../../assets/images/guitar.png';
import technology from '../../assets/images/technology.png';
import travel from '../../assets/images/travel.png';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { setMaxListeners } from "events";

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const BREAKPOINTS = { mobile: 0, tablet: 900, desktop: 1280 }

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};



 
    const EducationData=[
      {'subtitle':'Food delivery mobile application (customer and delivery application) - React native','date':'07/03/2018 – 30/11/2020','list':['Developed Web and mobile (android / iOS) applications.','Cooperated with designers to create clean interfaces and simple, intuitive interactions and experiences.','Developed project concepts and maintained optimal workflow.','API integration between applications.','Updated landing pages, product listings, and checkouts for launches and promotions.','Created new page designs for split tests and promotions','Worked with testing teams to end tests and make winning variations live.','optimized page structures for better performance','Incorporated requested QA updates','Assisted with tracking and documentation for split tests and funnels']},
      
      ];

  

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

// carousel end 

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
 
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

interface FadeProps {
  children?: React.ReactElement;
  in: boolean;
  onEnter?: () => {};
  onExited?: () => {};
}

const styleModel = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
 maxHeight:'90%',
 overflow:'hidden',
// width: {breakpoint!=='mobile'?'90%':'auto'},
//  overflow:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  paddingY: 5,
};

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
});

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

const Work = () => {
  const router = useRouter()
  const {id} = router.query
  const data = router.query;
  
 
  const theme = useTheme();
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, 'desktop');

  
// const imgData=['/images/Patanjalisfa/1.jpg','/images/Patanjalisfa/2.jpg','/images/Patanjalisfa/3.jpg','/images/Patanjalisfa/4.jpg','/images/Patanjalisfa/5.jpg','/images/Patanjalisfa/6.jpg','/images/Patanjalisfa/7.jpg','/images/Patanjalisfa/8.jpg','/images/Patanjalisfa/9.jpg','/images/Patanjalisfa/10.jpg','/images/Patanjalisfa/11.jpg','/images/Patanjalisfa/12.jpg','/images/Patanjalisfa/13.jpg','/images/Patanjalisfa/14.jpg','/images/Patanjalisfa/15.jpg','/images/Patanjalisfa/16.jpg','/images/Patanjalisfa/17.jpg','/images/Patanjalisfa/18.jpg','/images/Patanjalisfa/19.jpg','/images/Patanjalisfa/20.jpg','/images/Patanjalisfa/21.jpg','/images/Patanjalisfa/22.jpg',]

  useEffect(()=>{
    window.scrollTo(0,0)
 
  converter()
  },[])

const converter=()=>{
  let imgData1=[]
    for(let i=0; i<data.images.length; i++){

    // imgData.push(i)
    imgData1.push(data.images[i])
}

setImgData(imgData1)
}


  
  const matches = useMediaQuery('(min-width:600px)');
  const [checkedZoom, setCheckedZoom] = React.useState(null);
  const [mouseOverItem, setMouseOverItem] = React.useState(null);
  
  const [checkedImage, setCheckedImage] = React.useState(true);
  const [activeStep, setActiveStep] = React.useState(0);
  
  // const colorMode = React.useContext(ColorModeContext);
  const [checked, setChecked] = React.useState(true);
  const [imgData, setImgData] = React.useState([]);
  

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const maxSteps = images.length;

  const [open, setOpen] = React.useState(false);
  const [listData, setListData] = React.useState({});
  // const [data, setData] = React.useState('testing');
  const handleOpen = (list) => {
    setListData(list);
    setOpen(true);
  }
  const handleClose = () => {
    setListData('');
    setOpen(false);
  }


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleStepChange = () => (
  //   setCheckedZoom(true)
  // )
   
  // const handleHireForm = () => (
  //   setCheckedZoom(false)
  // );

  

  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const containerRef = React.useRef(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyD52vW7Nc0Dxavo8s5wd_uaPjLr8SuWYJM',
  });

  if (!isLoaded) return <div>Loading...</div>;

  

  // const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handlePopoverClose = () => {
  //   setAnchorEl(null);
  // };

  const handlePopoverOpen = (index:any) => {
    setMouseOverItem(index)
  };
 
  
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
   
    <Box sx={{marginBottom:'7rem'}}>
   
      
      {/* -------------------------------------------- First grid --------------------------------------------------- */}

    <Box style={{position:'relative', overflow: 'hidden', paddingTop:'6rem',paddingBottom:'10rem'}}>
    <BackgroundText text={id}/>
      <Grid container sx={{paddingX: {xs:'2.5rem',md:'4.5rem'}, marginBottom:'5rem'}}>
        <Grid item xs={12} lg={8}> 
      <Slide direction="up" in={checked} container={containerRef.current}>
              <Box sx={{ color: 'text.primary'}} >
            <Box className={styles.PortfolioTitle} >
              
              <Grow in={checked} style={{ transformOrigin: '0 0 0' }}
                  {...(checked ? { timeout: 1000 } : {})}>
                      <Typography variant="h2">{id}</Typography>
              </Grow>

            </Box>
            <Box className={styles.subTitle}>
            
            <Typography variant="h5" sx={{textAlign:'justify', textJustify:'inter-word'}}>{data.subtitle}</Typography>
            
              </Box>
              <Box className={styles.projectLink}>
            
            <Typography variant="h5" >Project : <Link  href={`${data.link}`} target="_blank" underline="hover"><u>{data.link}</u></Link></Typography>
            
              </Box>
                <Box >
                </Box>
              </Box>
              </Slide>
        </Grid>
        <Grid item xs={12} md={4} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
       
                    {/* <CustomButton variant="outlined" onClick={handleOpen}>See more!</CustomButton> */}
                 
        </Grid>
        </Grid>
       
    </Box>

          {/* -------------------------------------------- First grid end --------------------------------------------------- */}
         
          
          {/* -------------------------------------------- Second grid --------------------------------------------------- */}
   <Box sx={{position:'relative'}}>
     <Box className={styles.AboutDiv}>
     <Container maxWidth="xl" sx={{marginTop:'-5rem'}}  >
     <Grid container > 
      <Grid xs={12} >
        <Card sx={{margin:'7px', borderTop:`2px solid lightgreen`}}>
        
            <CardContent>
              <Box sx={{display:'flex'}}>
                <Typography gutterBottom variant="h5" component="div" color="lightgreen">
                Technologies Used : 
                </Typography>
                <Typography variant="h6" sx={{marginLeft:'5px',fontWeight:'bold'}}> {data.technologies}</Typography>
              </Box>
              <DetailWork ListData={data} />
            </CardContent>
        
        </Card>
      </Grid>
      
     </Grid>
     
   </Container>
 
     </Box>
  
   </Box>
   <Grid container  sx={{marginTop:'40px'}}>
      {imgData?imgData.map((item:any)=>(
        <Grid item xs={1} sm={1} md={3}  >
                  <img
        src={`${item}?w=164&h=164&fit=crop&auto=format`}
        width='200px'
        // alt={''}
        loading="lazy"
      />
                
                    
                    
                
                  
                  </Grid>
      ))
       :null
      }
     
      

  </Grid>
   
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



