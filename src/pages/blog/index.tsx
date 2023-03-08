import React, { useEffect, useState, useRef, useMemo, useCallback } from "react";
import fs from 'fs';
import path from 'path'
// import matter from 'gray-matter';
 import Moment from "moment";

// import Announcement from "../components/Announcement";
// import Categories from "../components/Categories";
import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@mui/material/TextField';
import CancelIcon from '@mui/icons-material/Cancel';
import useBreakpoint from 'use-breakpoint';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Card from '@mui/material/Card';
import { useRouter } from 'next/router'
import {CardHeader, CardActionArea, CardMedia, CardContent, CardActions} from '@mui/material';

import Avatar from '@mui/material/Avatar';
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

import styles from '../../styles/About.module.css';
import Alert from '@mui/material/Alert';
import FormControlLabel from '@mui/material/FormControlLabel';
import TagSphere from "../../components/wordSphere";
import MyMaps from "../../components/maps";
import DetailModel from "../../components/DetailModel"
import { GoogleMap, LoadScript, useLoadScript, Marker } from "@react-google-maps/api";

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

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import Checkbox from '@mui/material/Checkbox';
import StarBorder from '@mui/icons-material/StarBorder';
import ListItem from '@mui/material/ListItem';
import axios from 'axios';
import { marked } from 'marked';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { setMaxListeners } from "events";
import { list } from "mdast-util-to-hast/lib/handlers/list";

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const BREAKPOINTS = { mobile: 0, tablet: 900, desktop: 1280 }

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore1 = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



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



const Blog = ({ posts }) => {
  const theme = useTheme();
  const router = useRouter()
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, 'desktop');
  const [data, setData] = React.useState([])
  const [listOpen, setListOpen] = React.useState(false);

  function createMarkup(data) {
    return { __html: marked(data) };
  }

  const getData = async () => {
    try {
     await axios.get(process.env.HOST+'/blogs/public/all',
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then(function (response) {
          // alert(JSON.stringify(response))

          setData(response.data)

        })
    }
    catch (error) {
      alert(JSON.stringify(error))
      console.log('Error is :' + error);
    };


  }

  useEffect(() => {
    window.scrollTo(0, 0)
    getData()
  }, [])

  const matches = useMediaQuery('(min-width:600px)');
  const [checkedZoom, setCheckedZoom] = React.useState(null);
  const [mouseOverItem, setMouseOverItem] = React.useState(null);

  const [checkedImage, setCheckedImage] = React.useState(true);
  const [activeStep, setActiveStep] = React.useState(0);
  const [checked1, setChecked1] = React.useState(0);
  // const colorMode = React.useContext(ColorModeContext);
  const [checked, setChecked] = React.useState(true);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
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

  const containerRef = React.useRef(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyD52vW7Nc0Dxavo8s5wd_uaPjLr8SuWYJM',
  });

  if (!isLoaded) return <div>Loading...</div>;




  const listItems = (data)=> {

   return (
    <Grid container spacing={2}>
      {
     data.map((data, index) => (
      <Grid item  xs={12} sm={6} md={6} lg={4} >
        <Card >
          <CardActionArea onClick={() => {
          router.push({
            pathname: `/blog/${data.title}`,
            query: data,
          })}}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                M
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={data.title}
            subheader={Moment(data.createdAt).format('DD-MM-YYYY')}
          />
          <CardMedia
            component="img"
            height="194"
            image="/images/deer.png"
            alt="Module Federation"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {data.description}          </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            {/* <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore> */}
          </CardActions>
          </CardActionArea>
          {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
  
              <Typography paragraph>
                <div dangerouslySetInnerHTML={createMarkup(data.markdown)} />
              </Typography>
  
            </CardContent>
          </Collapse> */}
        </Card>
      </Grid>
    ))
  }
    </Grid>
    );
  }
  
  const handleClick = () => {
   
    setListOpen(!listOpen);
    
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
            <BackgroundText text={'Blog'} />
            <Grid container sx={{ paddingX: { xs: '2.5rem', md: '4.5rem' }, marginBottom: '5rem' }}>
              
                <Slide direction="up" in={checked} container={containerRef.current}>
                  <Box sx={{ color: 'text.primary' }} >
                    <Box className={styles.PortfolioTitle} >

                      <Grow in={checked} style={{ transformOrigin: '0 0 0' }}
                        {...(checked ? { timeout: 1000 } : {})}>
                        <Typography variant="h1">Blog</Typography>
                      </Grow>

                    </Box>
                    <Box className={styles.subTitle}>
                      <Typography variant="h5" sx={{ textAlign: 'justify', textJustify: 'inter-word' }}>Enjoy my Blogs below !!!! </Typography>

                    </Box>
                   
                  </Box>
                </Slide>
              
              <Grid item xs={12} md={4} />

            </Grid>

          </Box>

          {/* -------------------------------------------- First grid end --------------------------------------------------- */}


          {/* -------------------------------------------- Second grid --------------------------------------------------- */}
          <Box sx={{ position: 'relative' }}>
            <Box className={styles.AboutDiv}>
              <Container maxWidth="xl" sx={{ marginTop: '-5rem' }}  >
                <Grid container spacing={2}  sx={{flexDirection:{sm: "column-reverse" ,md:'row'}}}>
                  <Grid item sm={12} md={9} >
                    {data.length !== 0 ? listItems(data) : (
                      <Box sx={{ width: '100%', }}>
                        <Paper variant="outlined" sx={{ px: 2, width: '100%', minHeight: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Typography variant="h5" >No blogs to display!!</Typography>

                        </Paper>
                      </Box>)}
                  </Grid>

                  {/* Side bar */}
                  <Grid item  sm={12} md={3}>
                    <List
                      sx={{ width: '100%', bgcolor: 'background.paper' }}
                      component="nav"
                      aria-labelledby="nested-list-subheader"
                      subheader={
                        <ListItemButton onClick={()=> handleClick()}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Select Category" />
        {breakpoint == 'mobile'?(listOpen ? <ExpandLess /> : <ExpandMore />):null}
      </ListItemButton>
                      }
                    >
                      <Collapse in={breakpoint == 'mobile'?listOpen: true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ pl: {sm:4, md:0} }}>
                      <ListItemButton>
                        <ListItemIcon>
                          <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Technologies" />
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon>
                          <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Travel" />
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon>
                          <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sports" />
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon>
                          <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Lifestyle" />
                      </ListItemButton>
</List></Collapse>
                    </List>

                    
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

export default React.memo(Blog);



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