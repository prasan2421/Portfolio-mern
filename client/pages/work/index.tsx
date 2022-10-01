import React from "react";
import fs from 'fs';
import path from 'path'
import matter from 'gray-matter';
import { useEffect, useState, useRef,useMemo, useCallback } from "react";

// import Announcement from "../components/Announcement";
// import Categories from "../components/Categories";
import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@mui/material/TextField';
import CancelIcon from '@mui/icons-material/Cancel';
import useBreakpoint from 'use-breakpoint';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
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
import { CardActionArea, CardActions } from '@mui/material';
import styles from '../../styles/About.module.css';
import Alert from '@mui/material/Alert';
import FormControlLabel from '@mui/material/FormControlLabel';
import TagSphere from "../../components/wordSphere";
import MyMaps from "../../components/maps";
import DetailModel from "../../components/DetailModel"
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
      {'image':usn, 'title':'Application Developer (Web / Mobile)', 'subtitle':'I.Click Pvt.Ltd. ','date':'07/03/2018 – 30/11/2020','list':['Developed Web and mobile (android / iOS) applications.','Cooperated with designers to create clean interfaces and simple, intuitive interactions and experiences.','Developed project concepts and maintained optimal workflow.','API integration between applications.','Updated landing pages, product listings, and checkouts for launches and promotions.','Created new page designs for split tests and promotions','Worked with testing teams to end tests and make winning variations live.','optimized page structures for better performance','Incorporated requested QA updates','Assisted with tracking and documentation for split tests and funnels']},
      {'image':tu, 'title':'Internship in Web Development', 'subtitle':'Sherpa Technologies Pvt. Ltd.','date':'02/08/2017 – 09/12/2017','list':['Designed company’s website using HTML,CSS,Javascript (Bootstrap framework)','Listened to and implemented management’s recommendations into the website','Determined customer needs and improved UX in response.','Backend coding and developed APIs.','Debugged problems with minimal guidance']},
      
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



const Work = ({posts}) => {
  const theme = useTheme();
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, 'desktop');

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
    <Box sx={[styleModel,{width:breakpoint=='mobile'?'90%':'auto'},{paddingX:breakpoint=='mobile'?'15px':'32px'}]} >
       <Button size='small' onClick={handleClose} sx={{position:'absolute',right:0,top:0,minWidth:0}}>
        <CancelIcon fontSize='large' sx={{color:'red',}}/>
      </Button>
       
    <DetailModel ListData={listData} />
       
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
   
    <Box sx={{marginBottom:'7rem'}}>
    {renderForm}
      
      {/* -------------------------------------------- First grid --------------------------------------------------- */}

    <Box style={{position:'relative', overflow: 'hidden', paddingTop:'6rem',paddingBottom:'10rem'}}>
    <BackgroundText text={'Work'}/>
      <Grid container sx={{paddingX: {xs:'2.5rem',md:'4.5rem'}, marginBottom:'5rem'}}>
        <Grid item xs={12} lg={8}> 
      <Slide direction="up" in={checked} container={containerRef.current}>
              <Box sx={{ color: 'text.primary'}} >
            <Box className={styles.PortfolioTitle} sx={{boxShadow: 10}}>
              
              <Grow in={checked} style={{ transformOrigin: '0 0 0' }}
                  {...(checked ? { timeout: 1000 } : {})}>
                      <Typography variant="h1">Work Experience</Typography>
              </Grow>

            </Box>
            <Box className={styles.subTitle}>
            <Typography variant="h5">I have worked as a Web / Mobile application developer in my professional career where I was involved in the development of various applications throughout my few years of involvement in the field. </Typography>
            
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
            <Typography gutterBottom variant="h5" component="div" color="lightgreen">
                Work Experience
              </Typography>
              {EducationData.map((text, index) => (
                <CardActionArea key='index' onClick={()=>handleOpen(text)} sx={{display:'flex', justifyContent:'space-between'}}>
                <Box  key={index} sx={{display:{sm:'flex'}, margin:'15px',}}>
                  <Box sx={{width:{xs:'100%',sm:'auto'},marginRight:'10px',justifyContent:'center', alignItems:'center',display:{xs:'flex',sm:'block'}}}>
                    <Image
                    // loader={myLoader}
                    src={text.image}
                    alt="Picture of the Company"
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
              <Box>
                <ChevronRightIcon fontSize="large"/>
              </Box>
              </CardActionArea>
              ))}
            </CardContent>
        
        </Card>
      </Grid>


      <Grid xs={12} >
      
        <Card id="sectProjects" sx={{margin:'7px', borderTop:`2px solid lightgreen`}}>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="lightgreen">
                Projects
              </Typography>
              <Grid container >
              {posts.map((text, index) => (
                <Grid  key={index} xs={6} sm={6} md={3} sx={{display:'flex',justifyContent:'center'}}>
                <CardActionArea sx={{borderRadius:'20px',overflow:'hidden'}}>
              <Box sx={{ marginY:'15px', }}>
                <Box sx={{   justifyContent: 'center',
  display: 'flex'}}>
                <Image
                    // loader={myLoader}
                    src={text.frontmatter.socialImage?`/${text.frontmatter.socialImage}`:technology}
                    alt="Project"
                    width={70}
                    height={70}
                  />
                </Box>
                  
                  <Box sx={{marginY:'1rem', justifyContent:'center', display:'flex'}}>
                    <Typography variant="body1" >
                      {text.slug}
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

export default React.memo(Work);



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