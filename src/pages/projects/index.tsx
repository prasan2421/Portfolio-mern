import fs from 'fs';
import path from 'path'
import matter from 'gray-matter';
import React from "react";
import Link from 'next/link';
import { useEffect, useState, useRef,useMemo, useCallback } from "react";
// import Announcement from "../components/Announcement";
// import Categories from "../components/Categories";
import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@mui/material/TextField';
import BackgroundText from "../../components/BackgroundText";
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
import styles from '../../styles/About.module.css';
import Alert from '@mui/material/Alert';
import FormControlLabel from '@mui/material/FormControlLabel';

import { GoogleMap,LoadScript, useLoadScript, Marker } from "@react-google-maps/api";

 // import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import art from '../../../assets/images/art.png';
import ballSports from '../../../assets/images/ballsports.png';
import cycling from '../../../assets/images/cycling.png';
import guitar from '../../../assets/images/guitar.png';
import technology from '../../../assets/images/technology.png';
import travel from '../../../assets/images/travel.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });







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
      {'image':guitar, 'title':'Graphic Designing', 'subtitle':'Good','subField':['Active listening',
        'Curiosity',
        'Focus',
        'Inquiry']},
      {'image':cycling, 'title':'UI/UX designing', 'subtitle':'Good','subField':['Negotiating',
        'Persuasion',
        'Research']},
      {'image':cycling, 'title':'PHP', 'subtitle':'Good','subField':['Behavioral skills',
        'Developing rapport',
        'Friendliness',
        'Humor',
        'Networking',
        'Social skills']},
      {'image':cycling, 'title':'Video Editing', 'subtitle':'Good','subField':['Collaboration',
        'Group facilitating',
        'Team building',
        'Teamwork']},
      
      
  ];

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

const CustomButton = styled(Button)({
 
 padding:'1rem 3rem 1rem 3rem'
});



const Projects = () => {
  const theme = useTheme();

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  const matches = useMediaQuery('(min-width:600px)');
  const [checkedZoom, setCheckedZoom] = React.useState(null);
  const [mouseOverItem, setMouseOverItem] = React.useState(null);
  
  const [checkedImage, setCheckedImage] = React.useState(true);
  const [activeStep, setActiveStep] = React.useState(0);
  
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
    <Box className='main' component="main" sx={{ color: 'text.primary', flexGrow:1, marginBottom:'15px' }}>  
    <Box className='ContainerWrapper' sx={{marginX:{ xs: '0.1rem', md:'1rem' },}}>{'<html>'}</Box>
    {renderForm}
    <Box sx={{marginBottom:'7rem'}}>
    
      
      {/* -------------------------------------------- First grid --------------------------------------------------- */}

    <Box style={{position:'relative', overflow: 'hidden', paddingTop:'6rem',paddingBottom:'10rem'}}>
    <BackgroundText text={'Skills'}/>
      <Grid container sx={{paddingX: {xs:'2.5rem',md:'4.5rem'}, marginBottom:'5rem'}}>
        <Grid item xs={12} lg={8}>
      <Slide direction="up" in={checked} container={containerRef.current}>
              <Box sx={{ color: 'text.primary'}} >
            <Box className={styles.PortfolioTitle}>
              
              <Grow in={checked} style={{ transformOrigin: '0 0 0' }}
                  {...(checked ? { timeout: 1000 } : {})}>
                      <Typography variant="h1">My Projects</Typography>
              </Grow>
             
            </Box>
            <Box className={styles.subTitle}>
            <Typography variant="h5">Throughout my life both as a student and as a work employee, I have developed great skills to perform my activities. These skills were rewarding and helpful for my to achieve my goals as well as help me to improve myself.</Typography>
            
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
     
     <Grid xs={12} sm={6}>
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
      <Grid xs={12} sm={6}>
        <Card sx={{margin:'7px', borderTop:`2px solid crimson`,}}>
          
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="crimson">
                Soft Skills
              </Typography>
              <Grid container >
              {InterestData.map((text, index) => (
                 
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
      <Grid xs={12} >
        <Card sx={{margin:'7px', borderTop:`2px solid lightgreen`}}>
         
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="lightgreen">
                Projects
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

export default React.memo(Projects);



export async function getStaticProps() {
  const files = fs.readdirSync('projects');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`projects/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}