import React from "react";
import fs from 'fs'
import path from 'path'
// import matter from 'gray-matter';

import { useEffect, useState, useRef,useMemo, useCallback } from "react";
// import Announcement from "../components/Announcement";
// import Categories from "../components/Categories";
import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@mui/material/TextField';
import BackgroundText from "../components/BackgroundText";
import CircularProgress from '@mui/material/CircularProgress';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
// import Newsletter from "../components/Newsletter";
import useBreakpoint from 'use-breakpoint';
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
import CancelIcon from '@mui/icons-material/Cancel';
import DetailModel from "../components/DetailModel"
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

import usn from '../../assets/images/usn.png';
import miks from '../../assets/images/miks.png';
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

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const myLoader = () => {
  return (
    <CircularProgress />
  )
}


const InterpersonalData=[
  {'image':travel, 'title':'Communication', 'subtitle':'Basic','subField':['Nonverbal communication','Public speaking','Verbal Communication']},
      {'image':ballSports, 'title':'Conflict Management', 'subtitle':'Good','subField':['Conflict resolution','Constructive criticism','Counseling','Mediating','Problem-solving']},
      {'image':technology, 'title':'Empathy', 'subtitle':'Good','subField':['Caring','Compassion','Diplomacy','Diversity','Helping others','Kindness','Patience','Respect','Sensitivity','Sympathy']},
      {'image':art, 'title':'Leadership', 'subtitle':'Good','subField':['Encouraging',
       'Inspiring trust',
        'Instructing',
        'Management',
        'Mentoring',
        'Motivation',
        'Positive reinforcement']},
      {'image':guitar, 'title':'Listening', 'subtitle':'Good','subField':['Active listening',
        'Curiosity',
        'Focus',
        'Inquiry']},
      {'image':cycling, 'title':'Negotiation', 'subtitle':'Good','subField':['Negotiating',
        'Persuasion',
        'Research']},
      {'image':cycling, 'title':'Positive Attitude', 'subtitle':'Good','subField':['Behavioral skills',
        'Developing rapport',
        'Friendliness',
        'Humor',
        'Networking',
        'Social skills']},
      {'image':cycling, 'title':'Teamwork', 'subtitle':'Good','subField':['Collaboration',
        'Group facilitating',
        'Team building',
        'Teamwork']},
      
      
  ];


 
    const EducationData=[
      {'image':miks, 'title':'KIME Gründerprogram', 'subtitle':'MIKS Ressurssenter','date':'02/2024 - Ongoing'},
      {'image':usn, 'title':'Master of Science in Management Information Systems', 'subtitle':'University of South-Eastern Norway','date':'2020 - 2022'},
      {'image':tu, 'title':'Bachelor of Science in Computer Science and Information Technologies', 'subtitle':'Tribhuvan University','date':'2013 - 2017'},
      {'image':tic, 'title':'Intermediate with Science', 'subtitle':'Trinity International College','date':'2010 - 2012'},
      
      
      ];

      const WorkData = [
        { 'image': usn, 'title': 'Application Developer (Web / Mobile)', 'subtitle': 'I.Click Pvt.Ltd. ', 'date': '07/03/2018 – 30/11/2020', 'list': ['Developed Web and mobile (android / iOS) applications.', 'Cooperated with designers to create clean interfaces and simple, intuitive interactions and experiences.', 'Developed project concepts and maintained optimal workflow.', 'API integration between applications.', 'Updated landing pages, product listings, and checkouts for launches and promotions.', 'Created new page designs for split tests and promotions', 'Worked with testing teams to end tests and make winning variations live.', 'optimized page structures for better performance', 'Incorporated requested QA updates', 'Assisted with tracking and documentation for split tests and funnels'] },
        { 'image': tu, 'title': 'Internship in Web Development', 'subtitle': 'Sherpa Technologies Pvt. Ltd.', 'date': '02/08/2017 – 09/12/2017', 'list': ['Designed company’s website using HTML,CSS,Javascript (Bootstrap framework)', 'Listened to and implemented management’s recommendations into the website', 'Determined customer needs and improved UX in response.', 'Backend coding and developed APIs.', 'Debugged problems with minimal guidance'] },
      
      ];
      
    

      const TrainingData=[
        {'image':spn, 'title':'C# Fundamental', 'subtitle':'Microsoft X FreeCodeCamp','date':'12/2023 - 02/2024'},
        {'image':spn, 'title':'Web development', 'subtitle':'Student Project Nepal','date':'10/2016 - 03/2017'},
        {'image':spn, 'title':'Graphics designing', 'subtitle':'Student Project Nepal','date':'2011'},
        
        
        ];
    const LanguageData=[
      {'image':spn, 'title':'Norwegian', 'subtitle':'Beginner - A2'},
          {'image':spn, 'title':'English', 'subtitle':'Professional'},
          {'image':spn, 'title':'Nepali', 'subtitle':'Native'},
          {'image':spn, 'title':'Hindi', 'subtitle':'Intermediate'},
          
          
      ];
      const InterestData=[
        {'image':travel, 'title':'Travel', 'subtitle':'Basic'},
            {'image':ballSports, 'title':'Sports', 'subtitle':'Good'},
            {'image':technology, 'title':'Technology', 'subtitle':'Good'},
            {'image':art, 'title':'Art', 'subtitle':'Good'},
            {'image':guitar, 'title':'Music', 'subtitle':'Good'},
            {'image':cycling, 'title':'Outdoor Activities', 'subtitle':'Good'},
            {'image':travel, 'title':'Travel', 'subtitle':'Basic'},
            {'image':ballSports, 'title':'Sports', 'subtitle':'Good'},
            {'image':technology, 'title':'Technology', 'subtitle':'Good'},
            {'image':art, 'title':'Art', 'subtitle':'Good'},
            {'image':guitar, 'title':'Music', 'subtitle':'Good'},
            {'image':cycling, 'title':'Outdoor Activities', 'subtitle':'Good'},
            
        ];

        const HardData=[
          {'image':travel, 'title':'HTML', 'subtitle':'Basic','subField':['Nonverbal communication','Public speaking','Verbal Communication']},
              {'image':ballSports, 'title':'CSS', 'subtitle':'Good','subField':['Conflict resolution','Constructive criticism','Counseling','Mediating','Problem-solving']},
              {'image':technology, 'title':'Javascript', 'subtitle':'Good','subField':['Caring','Compassion','Diplomacy','Diversity','Helping others','Kindness','Patience','Respect','Sensitivity','Sympathy']},
              {'image':art, 'title':'Typescript', 'subtitle':'Good','subField':['Encouraging',
               'Inspiring trust',
                'Instructing',
                'Management',
                'Mentoring',
                'Motivation',
                'Positive reinforcement']},
                {'image':technology, 'title':'C#', 'subtitle':'Good','subField':['Caring','Compassion','Diplomacy','Diversity','Helping others','Kindness','Patience','Respect','Sensitivity','Sympathy']},

              {'image':guitar, 'title':'Graphic Designing', 'subtitle':'Good','subField':['Active listening',
                'Curiosity',
                'Focus',
                'Inquiry']},
              {'image':cycling, 'title':'UI/UX designing', 'subtitle':'Good','subField':['Negotiating',
                'Persuasion',
                'Research']},
              {'image':cycling, 'title':'React JS', 'subtitle':'Good','subField':['Behavioral skills',
                'Developing rapport',
                'Friendliness',
                'Humor',
                'Networking',
                'Social skills']},
              {'image':cycling, 'title':'React Native', 'subtitle':'Good','subField':['Collaboration',
                'Group facilitating',
                'Team building',
                'Teamwork']},
                {'image':cycling, 'title':'Express JS', 'subtitle':'Good','subField':['Collaboration',
                'Group facilitating',
                'Team building',
                'Teamwork']},
              
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
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxHeight: '90%',
  overflow: 'hidden',
  // width: {breakpoint!=='mobile'?'90%':'auto'},
  //  overflow:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  paddingY: 5,
};

const BREAKPOINTS = { mobile: 0, tablet: 900, desktop: 1280 }

export default function  About(){
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, 'desktop');
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
    {'title':'Website', 'subtitle':'https://portfolio-mern-dmpri0lwz-prasan2421.vercel.app/'},
    {'title':'Address', 'subtitle':'Bergen, Norway'},
    
    ]);
  
  // const colorMode = React.useContext(ColorModeContext);
  const [checked, setChecked] = React.useState(true);
  const [listData, setListData] = React.useState({});

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const maxSteps = images.length;

  const [open, setOpen] = React.useState(false);
  const handleOpen = (list) => {
    setListData(list);
    setOpen(true);
  }
  const handleClose = () => {
    setListData('');
    setOpen(false);
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
        <Box sx={[styleModel, { width: breakpoint == 'mobile' ? '90%' : 'auto' }, { paddingX: breakpoint == 'mobile' ? '15px' : '32px' }]} >
          <Button size='small' onClick={handleClose} sx={{ position: 'absolute', right: 0, top: 0, minWidth: 0 }}>
            <CancelIcon fontSize='large' sx={{ color: 'red', }} />
          </Button>

          <DetailModel ListData={listData} />

        </Box>

      </Fade>
    </Modal>
  );


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
    <BackgroundText  text={'My Profile'}/>
      <Grid container sx={{paddingX: {xs:'2.5rem',md:'4.5rem'}, marginBottom:'5rem'}}>
        <Grid item xs={12} lg={8}>
      <Slide direction="up" in={checked} container={containerRef.current}>
              <Box>
            <Box className={styles.PortfolioTitle}>
              
              <Grow in={checked} style={{ transformOrigin: '0 0 0' }}
                  {...(checked ? { timeout: 1000 } : {})}>
                      <Typography variant="h1">My Profile</Typography>
              </Grow>
             
            </Box>
            <Box className={styles.subTitle}>
            <Typography variant="h5" sx={{textAlign:'justify', textJustify:'inter-word'}}>Software Engineer with a specialization in Web and mobile applications, experienced in developing user interfaces that are intuitive, responsive, and engaging.

I am mainly involved in Customer focused and Enterprise-level <b style={{color:'turquoise'}}>Web / Mobile application</b> development using - React JS, React Native, Express JS, C#. ⚛️ 💻 📱 🌟 📈
</Typography>
            
              </Box>
              <Box className={styles.subTitle}>
            <Typography variant="h5" sx={{textAlign:'justify', textJustify:'inter-word'}}>I have great enthusiasm for the customer behaviour and satisfaction in software applications, and stay current with the latest design trends and development methodologies to ensure that every project I undertake is at the forefront of user expectations.</Typography>
            
              </Box>
              <Box className={styles.subTitle}>
            <Typography variant="h5" sx={{textAlign:'justify', textJustify:'inter-word'}}>My goal is to create captivating online experiences that eases users and leave a lasting impression.</Typography>
            
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
     <Container maxWidth="xl"   >
     <Grid container > 
     
      <Grid container xs={12} sm={6} >
      <Grid container item >
      <Card sx={{margin:'7px', borderTop:`2px solid lightblue`, width:'100%' }}>
       
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="lightblue">
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
          
        </Card>
        </Grid>
        <Grid container item >
        <Card sx={{margin:'7px', borderTop:`2px solid lightgreen` , width:'100%'}}>
         
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
         
        </Card>
          </Grid>
      </Grid>
      <Grid xs={12} sm={6}>
      <Grid container item >
      <Card sx={{margin:'7px', borderTop:`2px solid lightgreen`}}>
         
         <CardContent>
         <Typography gutterBottom variant="h5" component="div" color="lightgreen">
             Hard Skills
           </Typography>
           <Grid container >
           {HardData.map((text, index) => (
             <Grid  key={index} xs={6} sm={6} md={3} sx={{display:'flex',justifyContent:'center'}}>
             <CardActionArea sx={{borderRadius:'20px',overflow:'hidden'}}>
           <Box sx={{ marginY:'15px', }}>
             <Box sx={{    justifyContent: 'center',
display: 'flex'}}>
             <Image
                 // loader={myLoader}
                 src={text.image}
                 alt="Picture of the author"
                 width={70}
                 height={70}
               />
             </Box>
               
               <Box sx={{marginY:'1rem', justifyContent:'center', display:'flex'}}>
                 <Typography variant="body1" >
                   {text.title}
                 </Typography>
                 
                
               </Box>
         </Box>
         </CardActionArea>
         </Grid>
           ))}</Grid>
         </CardContent>
     
     </Card>
     </Grid>
     <Grid container item >
     <Card sx={{margin:'7px', borderTop:`2px solid darkorange`,}}>
          
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="darkorange">
                Interpersonal Skills
              </Typography>
              <Grid container >
              {InterpersonalData.map((text, index) => (
                
                <Grid key={index} xs={6} sm={6} md={3} sx={{display:'flex',justifyContent:'center'}}>
                  <CardActionArea sx={{borderRadius:'20px',overflow:'hidden'}}>
                <Box sx={{ marginY:'15px', }}>
                  <Box sx={{    justifyContent: 'center',
    display: 'flex'}}>
                 
                    <Image
                    // loader={myLoader}
                    src={text.image}
                    alt="Picture of the author"
                    width={70}
                    height={70}
                  />
                  </Box>
                    
                    <Box sx={{marginY:'1rem', justifyContent:'center', display:'flex'}}>
                      <Typography variant="body1" >
                        {text.title}
                      </Typography>
                      
                     
                    </Box>
              </Box>
              </CardActionArea>
              </Grid>
              
              ))}</Grid>
            </CardContent>
          
        </Card>
        </Grid>
      </Grid>
      <Grid xs={12}>
      <Card sx={{ margin: '7px', borderTop: `2px solid #fe3939`,  }} >

<CardContent >
  <Typography gutterBottom variant="h5" component="div" color="#fe3939">
    Work Experience
  </Typography>
  {WorkData.map((text, index) => (
    <CardActionArea key='index' onClick={() => handleOpen(text)} sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box key={index} sx={{ display: { sm: 'flex' }, margin: '15px', }}>
        <Box sx={{ width: { xs: '100%', sm: 'auto' }, marginRight: '10px', justifyContent: 'center', alignItems: 'center', display: { xs: 'flex', sm: 'block' } }}>
          <Image
            // loader={myLoader}
            src={text.image}
            alt="Picture of the Company"
            width={70}
            height={70}
          />
        </Box>

        <Box sx={{ marginY: { xs: '1rem', sm: 0 } }}>
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
      <Box>
        <ChevronRightIcon fontSize="large" />
      </Box>
    </CardActionArea>
  ))}
</CardContent>

</Card>
      </Grid>
      <Grid xs={12} sm={6} >
        <Card sx={{margin:'7px', borderTop:`2px solid cyan`, height:'97%'}}>
         
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="cyan">
                Certification
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
        
        </Card>
      </Grid>
      <Grid xs={12} sm={6} id="sectLanguages">
        <Card sx={{margin:'7px', borderTop:`2px solid #f2c204`}}>
         
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


