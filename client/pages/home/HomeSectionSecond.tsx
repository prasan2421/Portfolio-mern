import React, { useEffect } from "react";
import { useRouter } from 'next/router'
import Image from 'next/image';
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import ButtonBase from '@mui/material/ButtonBase';
import Date from '../../components/date'
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { getProjectsIds } from '../../lib/posts'
import { CardActionArea, CardActions } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import Paper from '@mui/material/Paper';
import useBreakpoint from 'use-breakpoint';
import deer from '../../assets/images/deer.png';

import BackgroundText from "../../components/BackgroundText";

import { GetStaticProps } from 'next'
// import {Link as Link2} from '@mui/material/Link';

import {Grid, Box, Slide, Grow, Typography, Button, IconButton} from '@mui/material';
import { styled, alpha, ThemeProvider, createTheme, useTheme,responsiveFontSizes, } from '@mui/material/styles';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import DownloadIcon from '@mui/icons-material/Download';
import { url } from "inspector";

const BREAKPOINTS = { mobile: 0, tablet: 900, desktop: 1280 }



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
    
    '&:hover': {
      
     
     
    },
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

export default function HomeSectionSecond({posts}) {

  const router = useRouter()
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, 'desktop');

    const [checked, setChecked] = React.useState(true);
    const [mouseOverItem, setMouseOverItem] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    
    const containerRef = React.useRef(null);
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const handleOpen = () => {
      router.push('/projects')
    };

    const handlePopoverOpen = (index:any) => {
      setMouseOverItem(index)
    };
  
  //     useEffect(()=>{
      
  //   // getStaticProps()
  //   alert(JSON.stringify(posts))
  // })

 

  
  const theme = useTheme();
  return (

    <Box sx={{position:'relative', overflow: 'hidden', paddingTop:'3rem',paddingBottom:'10rem'}}>
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
                  // onClick={handleOpen}
                  
                  >See more!</CustomButton></Link>
               
      </Grid>
      </Grid>
      <Grid container className="portfolioGallary" spacing={1}>
     

      {(posts?posts.slice(0, 5):[]).map((text, index) => (
        <Grid key={index} item xs={6} md={2.4} sx={{position:'relative', }}>
          <Link  href={`/projects/${text.slug}`}  passHref >
        <ImageButton
        focusRipple
        key={text.slug}
        style={{
          width: '100%',
          
        }}
        // text.frontmatter.socialImage?`/${text.frontmatter.socialImage}`:deer
      >
       
        <ImageSrc className="Image-mui" sx={{ backgroundImage: text.frontmatter.socialImage?`url(${text.frontmatter.socialImage})`:`url(${'/images/deer.png'})`}} />
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
            {text.slug}
            <ImageMarked className="MuiImageMarked-root" />
          </Typography>
        </ImageBox>
      </ImageButton>
      </Link>
      </Grid>
      ))}
     
      {/* {(posts?posts.slice(0, 5):[]).map((text, index) => (
        <Grid key={index} item xs={6} md={2.4} sx={{position:'relative',}}>
         
            <Link  href={`/projects/${text.slug}`}  passHref={breakpoint=='mobile'?true:false} >
            <Card sx={{borderRadius:0,}}>
          
        <CardActionArea 
        className='media'
       onMouseEnter={()=>handlePopoverOpen(index)}
       onMouseLeave={()=>handlePopoverOpen(null)} 
                        sx={{position:'relative',}} >
          {/* <CardMedia
         
            component="img"
            // image={`/${text.frontmatter.socialImage}`}
            image={deer}
            
          /> 

<Image style={{backgroundColor:theme.palette.mode === 'dark' ?'black':'white'}}
                    // loader={myLoader}
                    src={text.frontmatter.socialImage?`/${text.frontmatter.socialImage}`:deer}
                    alt="deer"
                    width={600}
                    height={600}
                  />
         { breakpoint!=='mobile'?(
          <Link  href={`/projects/${text.slug}`}  passHref >
          { mouseOverItem==index?(
              <Zoom in={true} >
            <Button
          variant="outlined"
           type="button"
          
           className='PortfolioItemWrapper'>
                         <Box className='ViewProject'>
                           
                           <Typography variant='button'>View Project</Typography>
                           
                           
                         </Box>
             
           </Button>
           </Zoom> 
          ):<Zoom in={false} >
          <Box 
         className='PortfolioItemWrapper'/>
         
         </Zoom> }
          </Link>):null}
          
          <Box sx={{position:'absolute', bottom:10,right:10, left:10, textAlign:'center',}}>
      <Paper elevation={3} sx={{backgroundColor:theme.palette.mode === 'dark' ?'rgb(48 48 48 / 24%)':'rgb(255 255 255 / 24%)'}}>

        <p style={{margin:0,padding:'5px'}}>{text.slug}</p>
      </Paper>
      </Box>


        </CardActionArea>
      
      </Card>
      </Link>
          

          
      </Grid>
        ))} */}

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
  );
}



