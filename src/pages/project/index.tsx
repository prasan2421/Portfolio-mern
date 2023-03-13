import React from "react";
import fs from 'fs';
import path from 'path'
// import matter from 'gray-matter';
import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { useRouter } from 'next/router'
// import Announcement from "../components/Announcement";
// import Categories from "../components/Categories";
import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@mui/material/TextField';
import CancelIcon from '@mui/icons-material/Cancel';
import useBreakpoint from 'use-breakpoint';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
// import Newsletter from "../components/Newsletter";
// import Products from "../components/Products";
// import Slider1 from "../components/Slider";
import { styled, alpha, ThemeProvider, createTheme, useTheme, responsiveFontSizes, } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import prasannapng from '../assets/images/prasannapng.png';

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
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
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
// import TagSphere from "../../../components/wordSphere";
// import MyMaps from "../../../components/maps";
import DetailModel from "../../components/DetailModel"
import { GoogleMap, LoadScript, useLoadScript, Marker } from "@react-google-maps/api";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import usn from '../../../assets/images/usn.png';
import tic from '../../../assets/images/tic.png';
import tu from '../../../assets/images/tu.png';
import spn from '../../../assets/images/spn.png';
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

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];


const EducationData = [
  { 'image': usn, 'title': 'Application Developer (Web / Mobile)', 'subtitle': 'I.Click Pvt.Ltd. ', 'date': '07/03/2018 – 30/11/2020', 'list': ['Developed Web and mobile (android / iOS) applications.', 'Cooperated with designers to create clean interfaces and simple, intuitive interactions and experiences.', 'Developed project concepts and maintained optimal workflow.', 'API integration between applications.', 'Updated landing pages, product listings, and checkouts for launches and promotions.', 'Created new page designs for split tests and promotions', 'Worked with testing teams to end tests and make winning variations live.', 'optimized page structures for better performance', 'Incorporated requested QA updates', 'Assisted with tracking and documentation for split tests and funnels'] },
  { 'image': tu, 'title': 'Internship in Web Development', 'subtitle': 'Sherpa Technologies Pvt. Ltd.', 'date': '02/08/2017 – 09/12/2017', 'list': ['Designed company’s website using HTML,CSS,Javascript (Bootstrap framework)', 'Listened to and implemented management’s recommendations into the website', 'Determined customer needs and improved UX in response.', 'Backend coding and developed APIs.', 'Debugged problems with minimal guidance'] },

];

const objectData = [
  { 'id': '1', 'img': 'images/1.png', 'title': 'Prasannat Portfolio', 'subtitle': 'A portfolio website developed in MERN stack.', 'technologies': 'React, React Native, Typescript, Express, MongoDB', 'link': 'http://www.prasannat.com', 'date': '07/03/2018 – 30/11/2020', 'list': ['NEXT js, client side framework that use react js, to create front-end.', 'Express, a node js web-application framework, to create backend.', 'Mongoose db, an Object Data Modeling (ODM) library for MongoDB and Node js, connecting backend-end with front-end.', 'Material UI, Google Maps, Redux, SSR, AXIOS for Rest API requests, CRUD, React Spring, and more..',], 'images': ['/images/Portfolio/1.png', '/images/Portfolio/2.png'] },
  { 'id': '2', 'img': 'images/foodbusters.png', 'title': 'Foodbusters', 'subtitle': 'Food delivery mobile application (customer and delivery application)', 'technologies': 'React Native, Javascript', 'link': 'https://foodbusters.com.np/', 'date': '07/03/2018 – 30/11/2020', 'list': ['Location tracking', 'Google maps features.', 'cart system.', 'API integration between applications.', 'Redux State management', 'Product listing and organising.', 'AXIOS for HTTP requests to rest API.'], 'images': ['/images/Foodbusters/1.jpg', '/images/Foodbusters/2.jpg', '/images/Foodbusters/3.jpg', '/images/Foodbusters/4.jpg', '/images/Foodbusters/5.jpg', '/images/Foodbusters/6.jpg', '/images/Foodbusters/7.jpg', '/images/Foodbusters/8.jpg', '/images/Foodbusters/9.jpg'] },
  { 'id': '3', 'img': 'images/covid.png', 'title': 'Nepal Covid-19 Surveillance', 'subtitle': 'A mobile application for COVID-19 Surveillance in Nepal', 'technologies': 'React Native, Javascript', 'link': 'https://play.google.com/store/apps/details?id=com.iclick.covidnew&hl=en&gl=US', 'date': '07/03/2018 – 30/11/2020', 'list': ['Government of Nepal: Kathmandu Metropolitan City', 'Surveillance app to monitor the spread of covid-19 in the locality.', 'Check ones possibility of covid-19 comparing with the given symptoms.', 'Monitor and notify through push notifications.', 'Covid-19 Surveillance system developed for the residence of Kathmandu city.'], 'images': ['/images/Covid/1.jpg', '/images/Covid/2.jpg', '/images/Covid/3.jpg', '/images/Covid/4.jpg', '/images/Covid/5.jpg', '/images/Covid/6.jpg', '/images/Covid/7.jpg', '/images/Covid/8.jpg',] },
  { 'id': '4', 'img': 'images/patanjalisfa.png', 'title': 'Patanjali SFA', 'subtitle': 'Sales Force Order collection application for internal use of Patanjali employees.', 'technologies': 'React Native, Javascript', 'link': 'https://play.google.com/store/apps/details?id=com.iclick.patanjali&hl=en&gl=US', 'date': '07/03/2018 – 30/11/2020', 'list': ['Location tracking.', 'Google maps features.', 'Cart system.', 'Redux State management', 'Product listing and organising', 'AXIOS for HTTP requests to rest API'], 'images': ['/images/Patanjalisfa/1.jpg', '/images/Patanjalisfa/2.jpg', '/images/Patanjalisfa/3.jpg', '/images/Patanjalisfa/4.jpg', '/images/Patanjalisfa/5.jpg', '/images/Patanjalisfa/6.jpg', '/images/Patanjalisfa/7.jpg', '/images/Patanjalisfa/8.jpg', '/images/Patanjalisfa/9.jpg', '/images/Patanjalisfa/10.jpg', '/images/Patanjalisfa/11.jpg', '/images/Patanjalisfa/12.jpg', '/images/Patanjalisfa/13.jpg', '/images/Patanjalisfa/14.jpg', '/images/Patanjalisfa/15.jpg', '/images/Patanjalisfa/16.jpg', '/images/Patanjalisfa/17.jpg', '/images/Patanjalisfa/18.jpg', '/images/Patanjalisfa/19.jpg', '/images/Patanjalisfa/20.jpg', '/images/Patanjalisfa/21.jpg', '/images/Patanjalisfa/22.jpg',] },
  { 'id': '5', 'img': 'images/pbri.png', 'title': 'Patanjali Bio Research Institute', 'subtitle': 'Sales Force Order collection application for internal use of Patanjali Bio Research employees.', 'technologies': 'React Native, Javascript', 'link': 'https://play.google.com/store/apps/details?id=com.patanjali.pbri&hl=en&gl=US', 'date': '07/03/2018 – 30/11/2020', 'list': ['Location tracking.', 'Google maps features.', 'Cart system.', 'Redux State management', 'Product listing and organising', 'AXIOS for HTTP requests to rest API'], 'images': [] },
  { 'id': '6', 'img': '', 'title': 'Patanjali Dairy Application', 'subtitle': 'Sales Force Order collection application for internal use of Patanjali Dairy employees.', 'technologies': 'React Native, Javascript', 'link': 'https://play.google.com/store/apps/details?id=com.patanjali.dairy&hl=en&gl=US', 'date': '07/03/2018 – 30/11/2020', 'list': ['Location tracking.', 'Google maps features.', 'Cart system.', 'Redux State management', 'Product listing and organising', 'AXIOS for HTTP requests to rest API'], 'images': [] },
  { 'id': '7', 'img': '', 'title': 'Prakriti Organics', 'subtitle': 'Sales Force Order collection application for internal use of Prakriti Organics employees.', 'technologies': 'React Native, Javascript', 'link': 'https://play.google.com/store/apps/details?id=com.prakriti.organics', 'date': '07/03/2018 – 30/11/2020', 'list': ['Location tracking.', 'Google maps features.', 'Cart system.', 'Redux State management', 'Product listing and organising', 'AXIOS for HTTP requests to rest API'], 'images': [] },
  { 'id': '8', 'img': '', 'title': 'Ruchi Soya- Nutrela SOA', 'subtitle': 'Sales Order collection application for internal use of Ruchi Soya - Nutrela SOA employees.', 'technologies': 'React Native, Javascript', 'link': 'https://play.google.com/store/apps/details?id=com.ruchisoya.nutrela&ref=apkcombo.com', 'date': '07/03/2018 – 30/11/2020', 'list': ['Location tracking.', 'Google maps features.', 'Cart system.', 'Redux State management', 'Product listing and organising', 'AXIOS for HTTP requests to rest API'], 'images': ['images/Nutrela/1.jpg', 'images/Nutrela/2.jpg', 'images/Nutrela/3.jpg', 'images/Nutrela/4.jpg', 'images/Nutrela/5.jpg', 'images/Nutrela/6.jpg', 'images/Nutrela/7.jpg', 'images/Nutrela/8.jpg', '/images/Nutrela/9.jpg'] },
  { 'id': '9', 'img': 'images/doe.png', 'title': 'Department of Environment- GIS', 'subtitle': 'GIS Based Industrial Information System', 'technologies': 'Laravel, PHP, HTML, CSS, Javascript (jQuery)', 'link': 'https://play.google.com/store/apps/details?id=com.iclick.giis&hl=en&gl=US', 'date': '07/03/2018 – 30/11/2020', 'list': ['Web application - Laravel (PHP)', 'Government of Nepal: Department of Forest and Environment'], 'images': [] },
  { 'id': '10', 'img': '', 'title': 'IMIS - Jhenaidah', 'subtitle': 'Integrated Municipality Integrated system app of Jhenaidah municipality, Bangladesh', 'technologies': 'Laravel, PHP, HTML, CSS, Javascript (jQuery)', 'link': 'http://178.128.123.39/imis-jhenaidah-new/', 'date': '07/03/2018 – 30/11/2020', 'list': ['Web application - Laravel (PHP)', 'Muicipality Integrated System for Jhenaidah Municipality, Bangladesh'], 'images': [] },
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

const CustomButton = styled(Button)({

  padding: '1rem 3rem 1rem 3rem'
});



const Work = ({ posts }) => {
  const theme = useTheme();
  const router = useRouter()
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, 'desktop');

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
        <Box sx={[styleModel, { width: breakpoint == 'mobile' ? '90%' : 'auto' }, { paddingX: breakpoint == 'mobile' ? '15px' : '32px' }]} >
          <Button size='small' onClick={handleClose} sx={{ position: 'absolute', right: 0, top: 0, minWidth: 0 }}>
            <CancelIcon fontSize='large' sx={{ color: 'red', }} />
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

  const handlePopoverOpen = (index: any) => {
    setMouseOverItem(index)
  };


  return (
    <ThemeProvider
      theme={theme}
    >
      <Box className='main' component="main" sx={{ color: 'text.primary', flexGrow: 1, marginBottom: '15px' }}>
        <Box className='ContainerWrapper' sx={{ marginX: { xs: '0.1rem', md: '1rem' }, }}>{'<html>'}</Box>

        <Box sx={{ marginBottom: '7rem' }}>
          {renderForm}

          {/* -------------------------------------------- First grid --------------------------------------------------- */}

          <Box style={{ position: 'relative', overflow: 'hidden', paddingTop: '6rem', paddingBottom: '10rem' }}>
            <BackgroundText text={'Work'} />
            <Grid container sx={{ paddingX: { xs: '2.5rem', md: '4.5rem' }, marginBottom: '5rem' }}>
              <Grid item xs={12} lg={8}>
                <Slide direction="up" in={checked} container={containerRef.current}>
                  <Box sx={{ color: 'text.primary' }} >
                    <Box className={styles.PortfolioTitle} >

                      <Grow in={checked} style={{ transformOrigin: '0 0 0' }}
                        {...(checked ? { timeout: 1000 } : {})}>
                        <Typography variant="h1">Projects</Typography>
                      </Grow>

                    </Box>
                    <Box className={styles.subTitle}>
                      <Typography variant="h5" sx={{ textAlign: 'justify', textJustify: 'inter-word' }}>I have worked in few web and mobile application development projects, both for the companies and personal. </Typography>

                    </Box>
                    <Box >
                    </Box>
                  </Box>
                </Slide>
              </Grid>
              <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                {/* <CustomButton variant="outlined" onClick={handleOpen}>See more!</CustomButton> */}

              </Grid>
            </Grid>

          </Box>

          {/* -------------------------------------------- First grid end --------------------------------------------------- */}


          {/* -------------------------------------------- Second grid --------------------------------------------------- */}
          <Box sx={{ position: 'relative' }}>
            <Box className={styles.AboutDiv}>
              <Container maxWidth="xl" sx={{ marginTop: '-5rem' }}  >
                <Grid container >
                


                  <Grid xs={12} >

                    <Card id="sectProjects" sx={{ margin: '7px', borderTop: `2px solid lightgreen` }}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color="lightgreen">
                          Projects
                        </Typography>
                        <Grid container >
                          {objectData.map((data, index) => (
                            <Grid key={data.id} xs={6} sm={6} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                              <Button onClick={() => {
                                router.push({
                                  pathname: `/project/${data.title}`,
                                  query: data,
                                })
                              }}>
                                <Box sx={{ borderRadius: '20px', overflow: 'hidden' }} >
                                  <Box sx={{ marginY: '15px', }}>
                                    <Box sx={{
                                      justifyContent: 'center',
                                      display: 'flex'
                                    }}>
                                      <Image
                                        // loader={myLoader}
                                        src={data.img ? `/${data.img}` : technology}
                                        alt="Project"
                                        width={70}
                                        height={70}
                                      />
                                    </Box>

                                    <Box sx={{ marginY: '1rem', justifyContent: 'center', display: 'flex' }}>
                                      <Typography variant="body1" >
                                        {data.title}
                                      </Typography>


                                    </Box>
                                  </Box>
                                </Box>
                              </Button>
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

        <Box className='ContainerWrapper-base' sx={{ marginX: { xs: '0.1rem', md: '1rem' }, }}>{'</html>'}</Box>

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



// export async function getStaticProps() {
//   const files = fs.readdirSync('projects');

//   const posts = files.map((fileName) => {
//     const slug = fileName.replace('.md', '');
//     const readFile = fs.readFileSync(`projects/${fileName}`, 'utf-8');
//     const { data: frontmatter } = matter(readFile);
//     return {
//       slug,
//       frontmatter,
//     };
//   });

//   return {
//     props: {
//       posts,
//     },
//   };
// }