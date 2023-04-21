import React, { useEffect, useState, useRef, useMemo, useCallback, Suspense } from "react";
 import Moment from "moment";
import useMediaQuery from '@mui/material/useMediaQuery';
import CancelIcon from '@mui/icons-material/Cancel';
import useBreakpoint from 'use-breakpoint';
import { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Card from '@mui/material/Card';
import { useRouter } from 'next/router'
import {CardHeader, CardActionArea, CardMedia, CardContent, CardActions} from '@mui/material';
import Icon from '../../components/muiIcons'
import Avatar from '@mui/material/Avatar';
import { styled, alpha, ThemeProvider, createTheme, useTheme, responsiveFontSizes, } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import BackgroundText from "../../components/BackgroundText";
import IconButton from '@mui/material/IconButton';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import Button, { ButtonProps } from '@mui/material/Button';
// import Link from '@mui/material/Link';
import Link from "next/link";
import { useSpring, animated } from '@react-spring/web';
import styles from '../../styles/About.module.css';
import DetailModel from "../../components/DetailModel"
import { GoogleMap, LoadScript, useLoadScript, Marker } from "@react-google-maps/api";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLess from '@mui/icons-material/ExpandLess';
import axios from 'axios';
import { gql, useQuery } from "@apollo/client";
import {getClient} from "../apollo-client";
import { marked } from 'marked';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { wrapper } from "../../store/store";
import {GET_BLOGS} from '../../queries/contactQueries'

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


const Blog = ({ data }) => {

  
  const theme = useTheme();
  const router = useRouter()
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, 'desktop');
  // const [data, setData] = React.useState([])
  const [listOpen, setListOpen] = React.useState(false);

  function createMarkup(data) {
    return { __html: marked(data) };
  }



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
  // const [data, setData] = React.useState([]);
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




  const listItems = (data)=> {

   return (
    <Suspense fallback={<div>Loading...</div>}>
    <Grid container spacing={2}>
      {
     data && data.map((data, index) => (
      <Grid item  xs={12} sm={6} md={6} lg={4} >
        <Card sx={{height:'100%'}}>
          <Link sx={{height:"100%"}} href={{
            pathname: `/blog/[slug]`,
            query:{
              slug:data.title,
              pid: data._id
            }
        }} >

          <CardActionArea >
          <CardHeader
          sx={{height:'100px',}}
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
          </Link>
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
    </Suspense>
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
                    {data.length !== 0 ? listItems(data.blogs) : (
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
                        <Icon name={'Drafts'} />
                        
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

      </Box>

    </ThemeProvider>
  );
};

export default React.memo(Blog);



export const getServerSideProps = wrapper.getServerSideProps(
  (id) =>
    async ({  }) => {
     
      // const res = await fetch(process.env.HOST+'/blogs/public/all',
      // {
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // })
      // const data = await res.json()

      const client = getClient();

      const { data } = await client.query({
        query: GET_BLOGS
      });
    
      if (!data) {
        return {
          notFound: true,
        }
      }

      console.log('asa')
    
      return {
        props: {data}, // will be passed to the page component as props
      }
    }
);