
import React, { useEffect, useState, useRef } from "react";
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { wrapper } from "../store/store";
import MyMaps from "../components/maps";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import { useSpring, animated } from '@react-spring/web';
import Backdrop from '@mui/material/Backdrop';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import Send from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
import Stack from '@mui/material/Stack';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import Move from "../components/Move";
import EmojiEmotionsTwoToneIcon from '@mui/icons-material/EmojiEmotionsTwoTone';
import { gql, useMutation } from '@apollo/client';
import SentimentSatisfiedTwoToneIcon from '@mui/icons-material/SentimentSatisfiedTwoTone';
import SentimentDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentDissatisfiedTwoTone';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TagSphere from "../components/wordSphere";
import BackgroundText from "../components/BackgroundText";
import * as yup from "yup";
import Fab from '@mui/material/Fab';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import useBreakpoint from 'use-breakpoint';
import DancingLinesDark from '../components/dancing-lines-dark';
import DancingLinesLight from '../components/dancing-lines-light';
import { useDispatch, useSelector } from "react-redux";
import { selectProfileState, setProfileCountHappyState,setProfileCountNeutralState, setProfileCountSadState } from "../store/features/profile/profileSlice";
import {Grid, Box, Slide, Grow, Typography, Button, IconButton, Collapse, Card, CardContent, CardActionArea} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { styled, alpha, ThemeProvider, createTheme, useTheme,responsiveFontSizes, } from '@mui/material/styles';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { ADD_CONTACT } from "../mutations/contactMutations";
import { useRouter } from 'next/router'
import Link from 'next/link'
import ButtonBase from '@mui/material/ButtonBase';
import useMediaQuery from '@mui/material/useMediaQuery';

const myLatLng = { lat: 59.9239669, lng: 10.7466753 };

  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return (<p style={{color:'green'}}>Loading..</p>);
      case Status.FAILURE:
        return (<p style={{color:'green'}}>error</p>);
      case Status.SUCCESS:
        return <MyMaps center={myLatLng} zoom={13}/>;
    }
  };

const BREAKPOINTS = { smallScreen:0, mobile: 600, tablet: 900, desktop: 1280 }

const objectData = [
  { 'id': '1', 'img': 'images/tedx.png', 'title': 'TedxTrondheim', 'subtitle': 'A website developed in Next.js and Headless wordpress.', 'technologies': 'React, Wordpress, Typescript, Tailwind CSS, Redux, MySQL', 'link': 'https://tedxtrondheim-prasan2421.vercel.app/', 'date': '01/03/2023 – Ongoing', 'list': ['NEXT js, client side framework that use react js, to create front-end.', 'Express, a node js web-application framework, to create backend.', 'Mongoose db, an Object Data Modeling (ODM) library for MongoDB and Node js, connecting backend-end with front-end.', 'Material UI, Google Maps, Redux, SSR, AXIOS for Rest API requests, CRUD, React Spring, and more..',], 'images': ['/images/tedx1.png', '/images/tedx2.png', '/images/tedx3.png'] },
  { 'id': '2', 'img': 'images/spoiq.png', 'title': 'Highlight capture & Editor', 'subtitle': 'A mobile application to capture highlight and edit highlights.', 'technologies': 'React Native, Typescript, Express, MongoDB, React Native Paper, Redux', 'Link':'https://www.spoiq.com/', 'date': '07/05/2018 – Ongoing', 'list': ['A cross platform React Native mobile application.','- Video recording.',
  '- Capturing highlights from different categories of highlight types.',
  '- Add or edit highlights from the pre recorded videos/ highlights.',
  '- Create a reels from the highlights.'], 'images': ['/images/spoiq1.jpg', '/images/spoiq2.png','/images/spoiq3.png','/images/spoiq4.png','/images/spoiq5.png','/images/spoiq6.png'] },
  { 'id': '3', 'img': 'images/1.png', 'title': 'Prasannat Portfolio', 'subtitle': 'A portfolio website developed in MERN stack.', 'technologies': 'React, React Native, Typescript, Express, MongoDB', 'link': 'http://www.prasannat.com', 'date': '07/03/2018 – 30/11/2020', 'list': ['NEXT js, client side framework that use react js, to create front-end.', 'Express, a node js web-application framework, to create backend.', 'Mongoose db, an Object Data Modeling (ODM) library for MongoDB and Node js, connecting backend-end with front-end.', 'Material UI, Google Maps, Redux, SSR, AXIOS for Rest API requests, CRUD, React Spring, and more..',], 'images': ['/images/Portfolio/1.png', '/images/Portfolio/2.png'] },
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

const blogData=[
  {'topic':'Javascript / Typescript', 'title':'React / Next JS', 'subtitle':'Frontend development.', 'color':'red'},
  {'topic':'Javascript  / Typescript','title':'React Native', 'subtitle':'Cross-platform mobile application development.', 'color':'green'},
  {'topic':'Design System','title':'Material UI', 'subtitle':'This is a demo summary.', 'color':'cyan'},
  {'topic':'Design System','title':'React Native Paper', 'subtitle':'This is a demo summary.', 'color':'cyan'},
  {'topic':'Design System','title':'Bootstrap', 'subtitle':'This is a demo summary.', 'color':'cyan'},
  {'topic':'CSS Framework','title':'Tailwind CSS', 'subtitle':'This is a demo summary.', 'color':'cyan'},
 {'topic':'Web designing','title':'UI/UX', 'subtitle':'Design web / mobile UI/UX.', 'color':'#81D8F7'},
  {'topic':'Business development','title':'E-commerce', 'subtitle':'This is a demo summary.', 'color':'yellow'},
  {'topic':'Business growth','title':'Growth Hacking', 'subtitle':'This is a demo summary.', 'color':'cyan'},
  {'topic':'Web development','title':'Rest API', 'subtitle':'This is a demo summary.', 'color':'cyan'},
  {'topic':'Version Control','title':'GIT', 'subtitle':'This is a demo summary.', 'color':'cyan'},
  {'topic':'Web development','title':'Object Oriented Programming (OOP)', 'subtitle':'This is a demo summary.', 'color':'cyan'},
  {'topic':'Mobile Database','title':'Realm', 'subtitle':'This is a demo summary.', 'color':'cyan'},
  {'topic':'Key-Value Storage','title':'MMKV', 'subtitle':'This is a demo summary.', 'color':'cyan'},
  {'topic':'Multimedia Processing','title':'FFmpeg', 'subtitle':'This is a demo summary.', 'color':'cyan'},
  {'topic':'Web Development','title':'HTML', 'subtitle':'This is a demo summary.', 'color':'cyan'},
  {'topic':'Web Development','title':'CSS', 'subtitle':'This is a demo summary.', 'color':'cyan'},
  {'topic':'Database','title':'Mongo DB', 'subtitle':'This is a demo summary.', 'color':'cyan'},
  {'topic':'Javascript  / Typescript','title':'Node JS', 'subtitle':'This is a demo summary.', 'color':'cyan'},
  {'topic':'Web Development','title':'GraphQl', 'subtitle':'This is a demo summary.', 'color':'cyan'},
  {'topic':'State Management','title':'Redux', 'subtitle':'This is a demo summary.', 'color':'cyan'},
  {'topic':'Graphic Designing','title':'Adobe Photoshop', 'subtitle':'This is a demo summary.', 'color':'cyan'},
  {'topic':'Graphic Designing','title':'Adobe Illustrator', 'subtitle':'This is a demo summary.', 'color':'cyan'},
  {'topic':'Management','title':'IT Project Management', 'subtitle':'This is a demo summary.', 'color':'cyan'},
  

 ]



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
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:{xs:'100%',sm:'auto'},
    
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  interface IFormInputs {
    name: string;
    email: string;
    subject: string;
    message: string;
    // iceCreamType: { label: string; value: string };
    // password: yup.string().min(4).max(20).required(),
  }

  

  const schema = yup.object({
    name: yup.string().required(),
    // age: yup.number().positive().integer().required(),
    email: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required()
  }).required();

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

export default function Home(props) {
  const theme = useTheme();

  const [addContact, { data, loading, error, reset }] = useMutation(ADD_CONTACT);
  
  const {resolvedUrl} = props;

    const count = useSelector(selectProfileState);

    const dispatch = useDispatch();

    const [checked, setChecked] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const [openEmoji, setOpenEmoji] = React.useState(false);
    const [sendTrigger, setSendTrigger] = React.useState(false);
    const [success, setSuccess] = React.useState(true);
    const [alertOpen, setAlertOpen] = React.useState(false);
    const [showTopBtn, setShowTopBtn] = useState(true);
    // const [checked, setChecked] = React.useState(true);
    const router = useRouter()

  
  
      const [mouseOverItem, setMouseOverItem] = React.useState(null);
    
      
      const containerRef = React.useRef(null);
      const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
      const handleOpenProject = () => {
        router.push('/projects')
      };
  
      const handlePopoverOpen = (index:any) => {
        setMouseOverItem(index)
      };
  

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOpenEmoji = () => setOpenEmoji(true);
  const handleCloseEmoji = () => setOpenEmoji(false);

  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, 'desktop');
  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY < 400) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    });

    if(data){
      setOpen(false)
      setSuccess(true)
    }
  
}, [data]);
  const DancingLinesDisplay=()=>{
    if(breakpoint!=='mobile' && theme.palette.mode === 'dark' ){
      return(
        <DancingLinesDark></DancingLinesDark>
      )
    }
    else if(breakpoint!=='mobile' && theme.palette.mode === 'light'){
      return(
        <DancingLinesLight></DancingLinesLight>
      )
    }
    else return null;
  }
  
    const { control, handleSubmit, formState: { errors }  } = useForm<IFormInputs>({
      resolver: yupResolver(schema),
    });
  
    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
      let name = data.name;
      let email = data.email;
      let subject = data.subject;
      let message = data.message;
      
     addContact({variables:{name,email,subject,message}})
    
    };
  
    const goToTop = () => {
      window.scrollTo({
          top: document.documentElement.clientHeight,
          behavior: 'smooth',
      });
  };
  
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
        <Box sx={style} >
        <Container>
        <Box >
        <Button size='small' onClick={handleClose} sx={{position:'absolute',right:0,top:0,minWidth:0}}>
          <CancelIcon fontSize='large' sx={{color:'red',}}/>
        </Button>
          <Box sx={{marginBottom:'20px'}}>
          <h1>Contact Me</h1>
          </Box>
    
          <form onSubmit={handleSubmit(onSubmit)} >
  
          <Controller
              name="name"
              control={control}
              // defaultValue="John Doe"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Name"
                  variant="outlined"
                  error={!!errors.name}
                  helperText={errors.name ? errors.name?.message : ''}
                  fullWidth
                  margin="dense"
                  sx={{ width:{xs: '100%',sm:'100%', md:'50%'}, marginBottom:'10px' , paddingRight:{sm:0,md:'5px'}}}
                />
              )}
            />
  
          <Controller
              name="email"
              control={control}
              // defaultValue="example@dev.com"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email ? errors.email?.message : ''}
                  sx={{width:{xs: '100%',sm:'100%', md:'50%'}, marginBottom:'10px',paddingLeft:{sm:0,md:'5px'} }}
                  fullWidth
                  margin="dense"
                />
              )}
            />
            <Controller
              name="subject"
              control={control}
              // defaultValue="Greetings"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Subject"
                  
                  variant="outlined"
                  error={!!errors.subject}
                  helperText={errors.subject ? errors.subject?.message : ''}
                  sx={{width: '100%', marginBottom:'10px', }}
                  fullWidth
                  margin="dense"
                />
              )}
            />    
  
          <Controller
              name="message"
              control={control}
              // defaultValue="You are awesome!!"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Message"
                  
                multiline
                rows={4}
               
                  variant="outlined"
                  error={!!errors.message}
                  helperText={errors.message ? errors.message?.message : ''}
                  sx={{width: '100%', marginBottom:'10px', }}
                  fullWidth
                  margin="dense"
                />
              )}
            />    
             
              <LoadingButton type="submit" variant="contained" loading={loading}
            loadingPosition="end"
            endIcon={<Send/>}>
                Send 
              </LoadingButton>
          </form>
        </Box>
      </Container>
        </Box>
      </Fade>
    </Modal>
    );
  
    const emojiForm=(
      <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openEmoji}
          onClose={handleCloseEmoji}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openEmoji}>
            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h6" >
                What's your reaction? (Select one or more)
              </Typography>
              <Stack direction="row"  spacing={2} sx={{justifyContent:'center', mt:'1rem'}}>
               
                <IconButton onClick={()=> dispatch(setProfileCountHappyState(count.countHappy+1))} color="primary" aria-label="upload picture" component="label">
               
                  {count.countHappy>0?<EmojiEmotionsTwoToneIcon sx={{color:'#ffd100'}} fontSize="large"/>:<InsertEmoticonIcon sx={{color:'#ffd100'}} fontSize="large"/>}
                </IconButton>
                <IconButton onClick={()=> dispatch(setProfileCountNeutralState(count.countNeutral+1))} color="primary" aria-label="upload picture" component="label">
                {count.countNeutral>0?<SentimentSatisfiedTwoToneIcon sx={{color:'#ffd100'}} fontSize="large"/>:<SentimentSatisfiedIcon sx={{color:'#ffd100'}} fontSize="large"/>}  
                </IconButton>
                <IconButton onClick={()=> dispatch(setProfileCountSadState(count.countSad+1))} color="primary" aria-label="upload picture" component="label">
                {count.countSad>0?<SentimentDissatisfiedTwoToneIcon sx={{color:'#ffd100'}} fontSize="large"/>:<SentimentVeryDissatisfiedIcon sx={{color:'#ffd100'}} fontSize="large"/>}
                </IconButton>
              </Stack>
              
            </Box>
          </Fade>
        </Modal>
    )
  return (
   
    <ThemeProvider theme={theme} >
    
      <Head>
        <title>{siteTitle}</title>
        
      </Head>
       <Box className='ContainerWrapper' >{'<html>'}</Box>   
       <Grid container sx={{height:'100vh',paddingX: {xs:'2.5rem',md:'4.5rem'}}}>  
     {DancingLinesDisplay()}
  {data?(
       <Snackbar open={true} autoHideDuration={6000} onClose={()=>setSuccess(false)}>
       <Alert onClose={()=>setSuccess(false)} severity="success" sx={{ width: '100%' }}>
        Message sent successfully!
       </Alert>
     </Snackbar>
  ):null}
   {error?(
       <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
       <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
         Something went wrong!
       </Alert>
     </Snackbar>
  ):null}
      <div className="top-to-btm">
      {showTopBtn && (
        <Move scale={1.5} springConfig={{ tension: 150, friction: 10 }} >
          <Fab size="small" color="primary"  aria-label="add"  onClick={goToTop}>
            <ArrowDownwardIcon color="inherit"/>
          </Fab>
          </Move>  
      )}
      </div>
    <Collapse in={alertOpen} sx={{position:'absolute', bottom:50, right:20}} >
        <Alert
        variant="filled" severity={success?"success":"error"}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAlertOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2, }}
        >
          {success?'Message Sent':'Message sending Failed'}
        </Alert>
      </Collapse>
    {renderForm}
    {emojiForm}
    <Grid item xs={12} style={{display:'flex', alignItems:'center'}}>
        <Slide direction="up" in={checked} 
        // container={containerRef.current}
        >
          <Box sx={{ color: 'inherit',marginTop:'30px'}} >
        <Box className="introText">
          <Grow in={checked} style={{ transformOrigin: '0 0 0' }}>
          <Typography variant="h1"> Hi,</Typography>
          </Grow>
          <Grow in={checked} style={{ transformOrigin: '0 0 0' }}
              {...(checked ? { timeout: 1000 } : {})}>
                   <Typography variant="h1">I&apos;m Prasanna,</Typography>
          </Grow>
          <Grow in={checked} style={{ transformOrigin: '0 0 0' }} className='introTextLast'
              {...(checked ? { timeout: 2000 } : {})}>
                  <Typography variant="h1">Full Stack Developer</Typography>
                 
          </Grow>
          <Box>
          

          </Box>
          
        </Box>
    <Box className='subTitle'><Typography  variant="subtitle1">React | React Native | Node | JS / TS | <Box className='subTitleUIUX'> UI / UX</Box></Typography></Box>
      <Box  sx={{marginTop:'50px', display:{sm:'flex'}, alignContent:'center' }}>
                <Box sx={{display:{xs:'flex'}, border:'5px solid ',borderColor:'inherit', borderRadius:'20px', overflow:'hidden', alignItems:{sm:'center'}, width:{xs:'100%',sm:'auto'},marginTop:{xs:'10px',sm:'0'} }}>
                  <CustomButton variant="text" 
                  onClick={handleOpen}
                   sx={{width:{xs:'100%',sm:'auto'},  color:"inherit", padding:{
                    xs:'1rem', sm:'1rem 3rem 1rem 3rem'
                  } }}>Contact Me</CustomButton>
               
                
                </Box>
                  <Box sx={{display:'flex', alignItems:'center', marginLeft:{xs:'0',sm:'2rem'}, marginTop:{xs:'1rem',sm:'0'}, justifyContent:{xs:'center',sm:'left'} }}>
                  <IconButton disableRipple
                  onClick={handleOpenEmoji} 
                    color="primary" aria-label="upload picture" component="label" sx={{padding:0,margoin:0}}>
                      <Move  scale={1.5} springConfig={{ tension: 150, friction: 10 }} >
       
                        <AddReactionIcon   sx={{fontSize:'50px',color: '#ffd100', display:'flex'}}/>
                     </Move>
                  </IconButton>
                 
                  </Box>
                </Box>
                
                
            <Box>
            </Box>
          </Box>
          </Slide>
    </Grid>
</Grid>

       {/* // second  */}

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
                  // onClick={handleOpenProject}
                  
                  >See more!</CustomButton></Link>
               
      </Grid>
      </Grid>
      <Grid container className="portfolioGallary" spacing={1}>
     

      {(objectData?objectData.slice(0, 5):[]).map((data, index) => (
        <Grid key={data.id} item xs={6} md={2.4} sx={{position:'relative', }}>
     
        <ImageButton
         onClick={() => {
          router.push({
            pathname: `/project/${data.title}`,
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
        {/* third */}

        <Box style={{position:'relative', overflow: 'hidden', paddingTop:'5rem',paddingBottom:'10rem'}}>
          <BackgroundText text={'Blog'}/>
                <Grid container sx={{paddingX: {xs:'2.5rem',md:'4.5rem'}, marginBottom:'5rem'}}>
                  <Grid item xs={12} md={6} sx={{display:'flex', alignItems:'center'}}>
                <Slide direction="up" in={checked} container={containerRef.current}>
                        <Box  >
                      <Box className="PortfolioTitle">
                        
                        <Grow in={checked} style={{ transformOrigin: '0 0 0' }}
                            {...(checked ? { timeout: 1000 } : {})}>
                                <Typography variant="h2">Me, Myself and I</Typography>
                        </Grow>
                      
                      </Box>
                      <Box className='subTitle'>
                      
                        <Typography variant="subtitle1"  style={{marginBottom:'2rem', textAlign:'justify', textJustify:'inter-word'}}>
                        Growing up, I took a liking to all things tech and digital, which fueled my interest in pursuing a career in software engineering. I find inspiration in the constantly evolving field of technology, particularly in computer-related advancements. My passion lies in web and mobile application development, as it provides me with an opportunity to create digital solutions that enhance the end-user experience. I am committed to innovating new strategies and integrating useful features into my software to ensure exceptional customer satisfaction, and in turn, can drive business growth.  💻  📱 🌟 📈 .
                        </Typography>
                        <Typography variant="subtitle1"  style={{marginBottom:'2rem', textAlign:'justify', textJustify:'inter-word'}}>For over few years I had many opportunities to work in a vast spectrum of web and mobile technologies that let me gather a significant amount of various experience. Working for companies and individuals around the globe I met and learnt from amazing and ambitious people. 
                        </Typography>
                        {/* <Typography variant="subtitle1"  style={{marginBottom:'2rem', textAlign:'justify', textJustify:'inter-word'}}>I am currently working on self projects and exploring new development technologies, also being open for new opportunities. 
                        </Typography> */}
                     
                        </Box>
                          <Box>
                          </Box>
                        </Box>
                        </Slide>
                  </Grid>
                  <Grid item xs={12} md={6} sx={{display:'flex', justifyContent:'center', alignItems:'center', }}>
                
                              <Box sx={{marginTop:'3rem',display:{xs:'block',sm:'block',md:'block',lg:'block',xl:'none'}}}><TagSphere radius={195}/></Box>
                              <Box sx={{display:{xs:'none',sm:'none',md:'none',lg:'none',xl:'block'}}}><TagSphere radius={500}/></Box>
                              
                  </Grid>
                  </Grid>
                  
              </Box>
        {/* fourth */}

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
              {/* <Typography variant="body2" color="text.secondary">
              {text.subtitle}
              </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
     ))}
     </Grid>
    
   </Container>
   </Box>
      {/* Fifth */}
      <Box sx={{position:'relative', overflow: 'hidden', paddingY:'5rem',backgroundColor: 'background.default'}}>
          
          <Grid container sx={{paddingX: {xs:'2.5rem',md:'4.5rem'}}} spacing={4}>
          <Collapse in={alertOpen} sx={{position:'absolute', bottom:0, right:20}} >
  <Alert
  variant="filled" severity={success?"success":"error"}
    action={
      <IconButton
        aria-label="close"
        color="inherit"
        size="small"
        onClick={() => {
          setAlertOpen(false);
        }}
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>
    }
    sx={{ mb: 2 }}
  >
    {success?'Message Sent':'Message sending Failed'}
  </Alert>
</Collapse>
            <Grid item xs={12} md={6} sx={{display:'flex', alignItems:'center'}}>
          <Slide direction="up" in={checked} container={containerRef.current}>
                  <Box sx={{ color: 'text.primary'}} >
                <Box className="PortfolioTitle">
                  
                  <Grow in={checked} style={{ transformOrigin: '0 0 0' }}
                      {...(checked ? { timeout: 1000 } : {})}>
                          <Typography variant="h2">Contact me</Typography>
                  </Grow>
                
                </Box>
                <Box className='subTitle'>
                <Typography variant="body1" sx={{ textAlign:'justify', textJustify:'inter-word'}}>I&apos;m interested in part time / full time or freelance work opportunities - especially ambitious on large projects. However, if you have other request or question, don&apos;t hesitate to use the form.</Typography>
                  </Box>
                  <form onSubmit={handleSubmit(onSubmit)} style={{marginTop:'20px'}}>

  <Controller
      name="name"
      control={control}
      // defaultValue="John Doe"
      render={({ field }) => (
        <TextField
          {...field}
          label="Name"
          variant="outlined"
          error={!!errors.name}
          helperText={errors.name ? errors.name?.message : ''}
          fullWidth
          margin="dense"
          sx={{ width:{xs: '100%',sm:'100%', md:'50%'}, marginBottom:'10px' , paddingRight:{sm:0,md:'5px'}}}
        />
      )}
    />

  <Controller
      name="email"
      control={control}
      // defaultValue="example@dev.com"
      render={({ field }) => (
        <TextField
          {...field}
          label="Email"
          variant="outlined"
          error={!!errors.email}
          helperText={errors.email ? errors.email?.message : ''}
          sx={{width:{xs: '100%',sm:'100%', md:'50%'}, marginBottom:'10px',paddingLeft:{sm:0,md:'5px'} }}
          fullWidth
          margin="dense"
        />
      )}
    />
    <Controller
      name="subject"
      control={control}
      // defaultValue="Greetings"
      render={({ field }) => (
        <TextField
          {...field}
          label="Subject"
          
          variant="outlined"
          error={!!errors.subject}
          helperText={errors.subject ? errors.subject?.message : ''}
          sx={{width: '100%', marginBottom:'10px', }}
          fullWidth
          margin="dense"
        />
      )}
    />    

  <Controller
      name="message"
      control={control}
      // defaultValue="You are awesome!!"
      render={({ field }) => (
        <TextField
          {...field}
          label="Message"
          
        multiline
        rows={4}
       
          variant="outlined"
          error={!!errors.message}
          helperText={errors.message ? errors.message?.message : ''}
          sx={{width: '100%', marginBottom:'10px', }}
          fullWidth
          margin="dense"
        />
      )}
    />    
     
      <LoadingButton type="submit" variant="contained" loading={sendTrigger?true:false}
    loadingPosition="end"
    endIcon={<Send/>}>
        Send 
      </LoadingButton>
  </form>
                    <Box>
                    </Box>
                  </Box>
                  </Slide>
            </Grid>
            <Grid item xs={12} md={6} >
          
            <Wrapper apiKey={"AIzaSyD52vW7Nc0Dxavo8s5wd_uaPjLr8SuWYJM"} render={render} />
              
            </Grid>
            
            </Grid>
            
        </Box>
        <Box className='ContainerWrapper-base' sx={{marginX:{ xs: '0.1rem', md:'1rem' },}}>{'</html>'}</Box>
    </ThemeProvider>
    
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ resolvedUrl }) => {
      store.dispatch( setProfileCountHappyState(100))
      return {
        props: {
          resolvedUrl
        },
      };
    }
);