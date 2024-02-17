import React from "react";
import { useEffect, useState, useRef, useMemo, useCallback } from "react";

import { useRouter } from 'next/router'
import CancelIcon from '@mui/icons-material/Cancel';
import useBreakpoint from 'use-breakpoint';
import { styled, alpha, ThemeProvider, useTheme, } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Image from 'next/image'
import BackgroundText from "../../components/BackgroundText";
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import Button, { ButtonProps } from '@mui/material/Button';
import { useSpring, animated } from '@react-spring/web';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from '../../styles/About.module.css';
import DetailModel from "../../components/DetailModel"
import {useLoadScript, Marker } from "@react-google-maps/api";
import technology from '../../../assets/images/technology.png';



import Paper from '@mui/material/Paper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const BREAKPOINTS = { mobile: 0, tablet: 900, desktop: 1280 }



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const objectData = [
  { 'id': '1', 'img': 'images/tedx.png', 'title': 'TedxTrondheim', 'subtitle': 'At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection.', 'technologies': 'React, Wordpress, Typescript, Tailwind CSS, Redux, MySQL', 'link': 'https://tedxtrondheim.com/', 'date': '01/03/2023 – Ongoing', 'list': ['NEXT js, client side framework that use react js, to create front-end.', 'Express, a node js web-application framework, to create backend.', 'Mongoose db, an Object Data Modeling (ODM) library for MongoDB and Node js, connecting backend-end with front-end.', 'Material UI, Google Maps, Redux, SSR, AXIOS for Rest API requests, CRUD, React Spring, and more..',], 'images': ['/images/tedx1.png', '/images/tedx2.png', '/images/tedx3.png'] },
  { 'id': '2', 'img': 'images/spoiq.png', 'title': 'SpoIQ', 'subtitle': 'A mobile application to capture real-time highlights and edit highlights.', 'technologies': 'React Native, Typescript, Express, MongoDB, React Native Paper, Redux', 'link':'https://www.spoiq.com/', 'date': '07/05/2018 – Ongoing', 'list': ['A cross platform React Native mobile application.','- Video recording.',
  '- Capturing highlights from different categories of highlight types.',
  '- Add or edit highlights from the pre recorded videos/ highlights.',
  '- Create a reels from the highlights.'], 'images': ['/images/spoiq1.jpg', '/images/spoiq2.png','/images/spoiq3.png','/images/spoiq4.png','/images/spoiq5.png','/images/spoiq6.png'] },
  { 'id': '3', 'img': 'images/1.png', 'title': 'Prasannat Portfolio', 'subtitle': 'A portfolio website developed in Next JS / React.', 'technologies': 'Next JS / React, React Native, Typescript, MongoDB', 'link': 'https://portfolio-mern-dmpri0lwz-prasan2421.vercel.app/', 'date': '07/03/2018 – 30/11/2020', 'list': ['NEXT js, client side framework that use react js, to create front-end.', 'Express, a node js web-application framework, to create backend.', 'Mongoose db, an Object Data Modeling (ODM) library for MongoDB and Node js, connecting backend-end with front-end.', 'Material UI, Google Maps, Redux, SSR, AXIOS for Rest API requests, CRUD, React Spring, and more..',], 'images': ['/images/Portfolio/1.png', '/images/Portfolio/2.png'] },
  { 'id': '4', 'img': 'images/foodbusters.png', 'title': 'Foodbusters', 'subtitle': 'Food delivery mobile application (customer and delivery application)', 'technologies': 'React Native, Javascript', 'link': 'https://foodbusters.com.np/', 'date': '07/03/2018 – 30/11/2020', 'list': ['Location tracking', 'Google maps features.', 'cart system.', 'API integration between applications.', 'Redux State management', 'Product listing and organising.', 'AXIOS for HTTP requests to rest API.'], 'images': ['/images/Foodbusters/1.jpg', '/images/Foodbusters/2.jpg', '/images/Foodbusters/3.jpg', '/images/Foodbusters/4.jpg', '/images/Foodbusters/5.jpg', '/images/Foodbusters/6.jpg', '/images/Foodbusters/7.jpg', '/images/Foodbusters/8.jpg', '/images/Foodbusters/9.jpg'] },
  { 'id': '5', 'img': 'images/covid.png', 'title': 'Nepal Covid-19 Surveillance', 'subtitle': 'A mobile application for COVID-19 Surveillance in Nepal', 'technologies': 'React Native, Javascript', 'link': 'https://play.google.com/store/apps/details?id=com.iclick.covidnew&hl=en&gl=US', 'date': '07/03/2018 – 30/11/2020', 'list': ['Government of Nepal: Kathmandu Metropolitan City', 'Surveillance app to monitor the spread of covid-19 in the locality.', 'Check ones possibility of covid-19 comparing with the given symptoms.', 'Monitor and notify through push notifications.', 'Covid-19 Surveillance system developed for the residence of Kathmandu city.'], 'images': ['/images/Covid/1.jpg', '/images/Covid/2.jpg', '/images/Covid/3.jpg', '/images/Covid/4.jpg', '/images/Covid/5.jpg', '/images/Covid/6.jpg', '/images/Covid/7.jpg', '/images/Covid/8.jpg',] },
  { 'id': '6', 'img': 'images/patanjalisfa.png', 'title': 'Patanjali SFA', 'subtitle': 'Sales Force Order collection application for internal use of Patanjali employees.', 'technologies': 'React Native, Javascript', 'link': 'https://play.google.com/store/apps/details?id=com.iclick.patanjali&hl=en&gl=US', 'date': '07/03/2018 – 30/11/2020', 'list': ['Location tracking.', 'Google maps features.', 'Cart system.', 'Redux State management', 'Product listing and organising', 'AXIOS for HTTP requests to rest API'], 'images': ['/images/Patanjalisfa/1.jpg', '/images/Patanjalisfa/2.jpg', '/images/Patanjalisfa/3.jpg', '/images/Patanjalisfa/4.jpg', '/images/Patanjalisfa/5.jpg', '/images/Patanjalisfa/6.jpg', '/images/Patanjalisfa/7.jpg', '/images/Patanjalisfa/8.jpg', '/images/Patanjalisfa/9.jpg', '/images/Patanjalisfa/10.jpg', '/images/Patanjalisfa/11.jpg', '/images/Patanjalisfa/12.jpg', '/images/Patanjalisfa/13.jpg', '/images/Patanjalisfa/14.jpg', '/images/Patanjalisfa/15.jpg', '/images/Patanjalisfa/16.jpg', '/images/Patanjalisfa/17.jpg', '/images/Patanjalisfa/18.jpg', '/images/Patanjalisfa/19.jpg', '/images/Patanjalisfa/20.jpg', '/images/Patanjalisfa/21.jpg', '/images/Patanjalisfa/22.jpg',] },
  { 'id': '7', 'img': 'images/pbri.png', 'title': 'Patanjali Bio Research Institute', 'subtitle': 'Sales Force Order collection application for internal use of Patanjali Bio Research employees.', 'technologies': 'React Native, Javascript', 'link': 'https://play.google.com/store/apps/details?id=com.patanjali.pbri&hl=en&gl=US', 'date': '07/03/2018 – 30/11/2020', 'list': ['Location tracking.', 'Google maps features.', 'Cart system.', 'Redux State management', 'Product listing and organising', 'AXIOS for HTTP requests to rest API'], 'images': [] },
  { 'id': '8', 'img': '', 'title': 'Patanjali Dairy Application', 'subtitle': 'Sales Force Order collection application for internal use of Patanjali Dairy employees.', 'technologies': 'React Native, Javascript', 'link': 'https://play.google.com/store/apps/details?id=com.patanjali.dairy&hl=en&gl=US', 'date': '07/03/2018 – 30/11/2020', 'list': ['Location tracking.', 'Google maps features.', 'Cart system.', 'Redux State management', 'Product listing and organising', 'AXIOS for HTTP requests to rest API'], 'images': [] },
  { 'id': '9', 'img': '', 'title': 'Prakriti Organics', 'subtitle': 'Sales Force Order collection application for internal use of Prakriti Organics employees.', 'technologies': 'React Native, Javascript', 'link': 'https://play.google.com/store/apps/details?id=com.prakriti.organics', 'date': '07/03/2018 – 30/11/2020', 'list': ['Location tracking.', 'Google maps features.', 'Cart system.', 'Redux State management', 'Product listing and organising', 'AXIOS for HTTP requests to rest API'], 'images': [] },
  { 'id': '10', 'img': '', 'title': 'Ruchi Soya- Nutrela SOA', 'subtitle': 'Sales Order collection application for internal use of Ruchi Soya - Nutrela SOA employees.', 'technologies': 'React Native, Javascript', 'link': 'https://play.google.com/store/apps/details?id=com.ruchisoya.nutrela&ref=apkcombo.com', 'date': '07/03/2018 – 30/11/2020', 'list': ['Location tracking.', 'Google maps features.', 'Cart system.', 'Redux State management', 'Product listing and organising', 'AXIOS for HTTP requests to rest API'], 'images': ['images/Nutrela/1.jpg', 'images/Nutrela/2.jpg', 'images/Nutrela/3.jpg', 'images/Nutrela/4.jpg', 'images/Nutrela/5.jpg', 'images/Nutrela/6.jpg', 'images/Nutrela/7.jpg', 'images/Nutrela/8.jpg', '/images/Nutrela/9.jpg'] },
  { 'id': '11', 'img': 'images/doe.png', 'title': 'Department of Environment- GIS', 'subtitle': 'GIS Based Industrial Information System', 'technologies': 'Laravel, PHP, HTML, CSS, Javascript (jQuery)', 'link': 'https://play.google.com/store/apps/details?id=com.iclick.giis&hl=en&gl=US', 'date': '07/03/2018 – 30/11/2020', 'list': ['Web application - Laravel (PHP)', 'Government of Nepal: Department of Forest and Environment'], 'images': [] },
  { 'id': '12', 'img': '', 'title': 'IMIS - Jhenaidah', 'subtitle': 'Integrated Municipality Integrated system app of Jhenaidah municipality, Bangladesh', 'technologies': 'Laravel, PHP, HTML, CSS, Javascript (jQuery)', 'link': 'http://178.128.123.39/imis-jhenaidah-new/', 'date': '07/03/2018 – 30/11/2020', 'list': ['Web application - Laravel (PHP)', 'Muicipality Integrated System for Jhenaidah Municipality, Bangladesh'], 'images': [] },
]


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


const Work = ({ posts }) => {
  
  const theme = useTheme();
  const router = useRouter()
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, 'desktop');

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  const [mouseOverItem, setMouseOverItem] = React.useState(null);
  const [activeStep, setActiveStep] = React.useState(0);
// images state AWS S3


  // const colorMode = React.useContext(ColorModeContext);
  const [checked, setChecked] = React.useState(true);



 
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


  const containerRef = React.useRef(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyD52vW7Nc0Dxavo8s5wd_uaPjLr8SuWYJM',
  });

  if (!isLoaded) return <div>Loading...</div>;



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
            <BackgroundText text={'Projects'} />
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
                      <Typography variant="h5" sx={{ textAlign: 'justify', textJustify: 'inter-word' }}>I have had the opportunity to work on several web and mobile application development projects, both in a professional capacity for companies and on personal projects. </Typography>

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
              <Container maxWidth="xl" sx={{ marginTop: '5rem' }}  >
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