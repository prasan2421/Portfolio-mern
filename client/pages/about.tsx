import React from "react";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';

import { useEffect, useState, useRef,useMemo, useCallback } from "react";
// import Announcement from "../components/Announcement";
// import Categories from "../components/Categories";
import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@mui/material/TextField';
import BackgroundText from "../components/BackgroundText";
import CircularProgress from '@mui/material/CircularProgress';

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
import { CardActionArea, CardActions } from '@mui/material';
import styles from '../styles/About.module.css';
import profile from '../public/images/profile.jpg';
import Alert from '@mui/material/Alert';
import FormControlLabel from '@mui/material/FormControlLabel';
import TagSphere from "../components/wordSphere";
import MyMaps from "../components/maps";
import { GoogleMap,LoadScript, useLoadScript, Marker } from "@react-google-maps/api";

 // import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import usn from '../assets/images/usn.png';
import tic from '../assets/images/tic.png';
import tu from '../assets/images/tu.png';
import spn from '../assets/images/spn.png';
import art from '../assets/images/art.png';
import ballSports from '../assets/images/ballsports.png';
import cycling from '../assets/images/cycling.png';
import guitar from '../assets/images/guitar.png';
import technology from '../assets/images/technology.png';
import travel from '../assets/images/travel.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const myLoader = () => {
  return (
    <CircularProgress />
  )
}


const PersonalData=[
  {'title':'Name', 'subtitle':'Prasanna Tuladhar'},
  {'title':'Birth Date', 'subtitle':'23/03/1993'},
  {'title':'Email', 'subtitle':'tuladharprasan@gmail.com'},
  {'title':'Website', 'subtitle':'www.prasannat.com'},
  {'title':'Address', 'subtitle':'Storgata 63, 0182, Oslo'},
  
  ];
 
    const EducationData=[
      {'image':usn, 'title':'Master of Science in Management Information Systems', 'subtitle':'University of South-Eastern Norway','date':'2020 - 2022'},
      {'image':tu, 'title':'Bachelor of Science in Computer Science and Information Technologies', 'subtitle':'Tribhuvan University','date':'2013 - 2017'},
      {'image':tic, 'title':'Intermediate with Science', 'subtitle':'Trinity International College','date':'2010 - 2012'},
      
      
      ];

      const TrainingData=[
        {'image':spn, 'title':'Web development', 'subtitle':'Student Project Nepal','date':'10/2016 - 03/2017'},
        {'image':spn, 'title':'Graphics designing', 'subtitle':'Student Project Nepal','date':'2011'},
        
        
        ];
    const LanguageData=[
      {'image':spn, 'title':'Norwegian', 'subtitle':'Basic'},
          {'image':spn, 'title':'English', 'subtitle':'Good'},
          {'image':spn, 'title':'Nepali', 'subtitle':'Good'},
          {'image':spn, 'title':'Hindi', 'subtitle':'Good'},
          
          
      ];
      const InterestData=[
        {'image':travel, 'title':'Travel', 'subtitle':'Basic'},
            {'image':ballSports, 'title':'Sports', 'subtitle':'Good'},
            {'image':technology, 'title':'Technology', 'subtitle':'Good'},
            {'image':art, 'title':'Art', 'subtitle':'Good'},
            {'image':guitar, 'title':'Music', 'subtitle':'Good'},
            {'image':cycling, 'title':'Outdoor Activities', 'subtitle':'Good'},
            
            
        ]



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

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function  About(){
  const theme = useTheme();

  useEffect(()=>{
   
    window.scrollTo(0,0);
    fetchPersonalDetails()
  },[])
  

 
  const [activeStep, setActiveStep] = React.useState(0);
  const [personalDetailsData, setPersonalDetailsData] = React.useState([
    {'title':'Name', 'subtitle':'Prasanna Tuladhar'},
    // {'title':'Birth Date', 'subtitle':'23/03/1993'},
    {'title':'Email', 'subtitle':'tuladharprasan@gmail.com'},
    {'title':'Website', 'subtitle':'www.prasannat.com'},
    {'title':'Address', 'subtitle':'Storgata 63, 0182, Oslo'},
    
    ]);
  
  // const colorMode = React.useContext(ColorModeContext);
  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const maxSteps = images.length;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


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

  const fetchPersonalDetails = async () =>{
    
    const response = await fetch('/api/personalDetails')
    const data = await response.json()


    setPersonalDetailsData(data)

  }

  

  const renderForm = (
    
    <Modal
    aria-labelledby="spring-modal-title"
    aria-describedby="spring-modal-description"
    open={open}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={open}>
      <Box sx={style}  component="form"
     
      noValidate
      autoComplete="off">
      <Container>
      <Box >
        <Box sx={{marginBottom:'20px'}}>
        <h1>Contact Me</h1>
        </Box>
        
        <TextField id="outlined-basic" label="Name" variant="outlined" style={{ width:'50%', marginBottom:'10px' , paddingRight:'5px'}}/>
                        <TextField id="outlined-basic" label="Email" variant="outlined" style={{width:'50%', marginBottom:'10px',paddingLeft:'5px' }}/>

                        <TextField id="outlined-basic" label="Subject" variant="outlined" style={{display:'flex', width:'100%', marginBottom:'10px' }}/>
                        <TextField
                        id="outlined-basic" label="Message" variant="outlined"
                      
                            multiline
                            rows={4}
                            // defaultValue="You are awesome!!"
                            style={{display:'flex', width:'100%',marginBottom:'20px'}}
                          />      <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          defaultValue="You are awesome!!"
          style={{display:'flex', width:'100%',marginBottom:'20px'}}
        />
        <Button sx={{display:'flex'}}>
          Send <Send />
        </Button>
      </Box>
    </Container>
      </Box>
    </Fade>
  </Modal>
  );



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


  
  return (
    <ThemeProvider 
theme={theme}
>
    <Box className={styles.main} component="main" sx={{ flexGrow:1, marginBottom:'15px' }}>  
    <Box className='ContainerWrapper' sx={{marginX:{ xs: '0.1rem', md:'1rem' },}}>{'<html>'}</Box>
    {renderForm}
    <Box sx={{marginBottom:'7rem'}}>
    
      
      {/* -------------------------------------------- First grid --------------------------------------------------- */}

    <Box style={{position:'relative', overflow: 'hidden', paddingTop:'6rem',paddingBottom:'10rem'}}>
    <BackgroundText  text={'About'}/>
      <Grid container sx={{paddingX: {xs:'2.5rem',md:'4.5rem'}, marginBottom:'5rem'}}>
        <Grid item xs={12} lg={8}>
      <Slide direction="up" in={checked} container={containerRef.current}>
              <Box>
            <Box className={styles.PortfolioTitle}>
              
              <Grow in={checked} style={{ transformOrigin: '0 0 0' }}
                  {...(checked ? { timeout: 1000 } : {})}>
                      <Typography variant="h1">About Me</Typography>
              </Grow>
             
            </Box>
            <Box className={styles.subTitle}>
            <Typography variant="h5">I&apos;m a <b style={{color:'turquoise'}}>Web / Mobile application</b> developer, involved in the development of various applications throughout my few years of involvement in the field. I have a background in Computer science and Information Technologies and Information Systems.</Typography>
            
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
     
      <Grid xs={12} sm={6} >
        <Card sx={{margin:'7px', borderTop:`2px solid crimson`, height:'97%'}}>
          <CardActionArea >
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="crimson">
                Personal Details
              </Typography>
              {personalDetailsData.map((text, index) => (
                <Box key={index} sx={{marginTop:'10px'}}>
                  
                    <Typography gutterBottom variant="body2" component="div">
                {text.title}
              </Typography>
                    
                    <Typography variant="body1" color="text.secondary" >
              {text.subtitle}
              </Typography>
                
              </Box>
              ))}
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid xs={12} sm={6}>
        <Card sx={{margin:'7px', borderTop:`2px solid darkorange`,}}>
          <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="darkorange">
                My Interests
              </Typography>
              <Grid container >
              {InterestData.map((text, index) => (
                 
                <Grid key={index} xs={6} sm={6} md={3} sx={{display:'flex',justifyContent:'center'}}>
                <Box sx={{ marginY:'15px', }}>
                  <Box sx={{    justifyContent: 'center',display: 'flex'}}>
                  <Image
                    // loader={myLoader}
                    src={text.image}
                    alt="Picture of the author"
                    width={70}
                    height={70}
                  />
                    
                  {/* <img
                      src={`${text.image}`}
                      style={{height:'70px', width:'70px',  justifyContent:'center', alignItems:'center'}}
                      // alt={item.title}
                      loading="lazy"
                    /> */}
                  </Box>
                    
                    <Box sx={{marginY:'1rem'}}>
                      <Typography variant="body1" sx={{justifyContent:'center', display:'flex'}}>
                        {text.title}
                      </Typography>
                      
                     
                    </Box>
              </Box>
              </Grid>
              ))}</Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid xs={12} >
        <Card sx={{margin:'7px', borderTop:`2px solid lightgreen`}}>
          <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="lightgreen">
                Education
              </Typography>
              {EducationData.map((text, index) => (
                <Box key={index} sx={{display:{sm:'flex'}, marginY:'15px',}}>
                  <Box sx={{width:{xs:'100%',sm:'auto'},justifyContent:'center',marginRight:'10px', alignItems:'center',display:{xs:'flex',sm:'block'}}}>
                 
                    <Image
                    // loader={myLoader}
                    src={text.image}
                    alt="Picture of the author"
                    width={70}
                    height={70}
                  
                  />
                  </Box>
                    
                    <Box sx={{marginY:{xs:'1rem',sm:0}}}>
                      <Typography variant="body1" >
                        {text.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {text.subtitle}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {text.date}
                      </Typography>
                    </Box>
              </Box>
              ))}
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid xs={12} sm={6} >
        <Card sx={{margin:'7px', borderTop:`2px solid cyan`, height:'97%'}}>
          <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="cyan">
                Trainings
              </Typography>
              {TrainingData.map((text, index) => (
                <Box key={index} sx={{display:{sm:'flex'}, marginY:'15px',}}>
                  <Box sx={{width:{xs:'100%',sm:'auto'},marginRight:'10px',justifyContent:'center', alignItems:'center',display:{xs:'flex',sm:'block'}}}>
                 
                    <Image
                    // loader={myLoader}
                    src={text.image}
                    alt="Picture of the author"
                    width={70}
                    height={70}
                  
                  />
                  </Box>
                    
                    <Box sx={{marginY:{xs:'1rem',sm:0}}}>
                      <Typography variant="body1" >
                        {text.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {text.subtitle}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {text.date}
                      </Typography>
                    </Box>
              </Box>
              ))}
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid xs={12} sm={6} id="sectLanguages">
        <Card sx={{margin:'7px', borderTop:`2px solid #f2c204`}}>
          <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="#f2c204">
                Languages
              </Typography>
              <Grid container >
              {LanguageData.map((text, index) => (
                 
                <Grid key={index} xs={6} sm={6} md={3} sx={{display:'flex',justifyContent:'center'}}>
                <Box sx={{ marginY:'15px', }}>
                  <Box >
                  
                    <Image
                    // loader={myLoader}
                    src={text.image}
                    alt="Picture of the author"
                    width={70}
                    height={70}
                  />
                  </Box>
                    
                    <Box sx={{marginY:'1rem'}}>
                      <Typography variant="body1" >
                        {text.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {text.subtitle}
                      </Typography>
                     
                    </Box>
              </Box>
              </Grid>
              ))}</Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
     </Grid>
     
   </Container>
     </Box>
  
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


