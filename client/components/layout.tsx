import { useState, useEffect } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Alert from '@mui/material/Alert';
import { useRouter } from 'next/router';
import { StyledEngineProvider } from '@mui/material/styles';
// import DancingLines from 'react-dancing-lines';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CircleIcon from '@mui/icons-material/Circle';
import { red, green } from '@mui/material/colors';
import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Badge from '@mui/material/Badge';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import  headerStyles from'../styles/Header.module.css';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from "@mui/material/styles";
import useBreakpoint from 'use-breakpoint';
import Move from "./Move";
import Boop from "./Boop";
import playstore from '../assets/images/playstore.png';
const drawerWidth = 150;

const name = 'Prasanna Tuladhar';
export const siteTitle = 'Prasanna Tuladhar';

const BREAKPOINTS = { mobile: 0, tablet: 900, desktop: 1280 }

const navData=[
  {'title':'Home', 'link':'/'},
  {'title':'About', 'link':'/about'},
  {'title':'My Skills', 'link':'/skill'},
  {'title':'Work', 'link':'/work'},
  {'title':'contact', 'link':'/contact'} ]

  const StyledList = styled(List)({
    // selected and (selected + hover) states
    "&& .Mui-selected, && .Mui-selected:hover": {
     fontWeight:"bold",
      color:"inherit",
     
      " & .MuiListItemIcon-root": {
        color: red[500],
        display:'flex',
        fontSize:'10px'
      }
    },
  
    "& .MuiListItemButton-root": {
      color:"gray",
      
      " & .MuiListItemIcon-root": {
        display: "none"
      }
    },
    // hover states
    "& .MuiListItemButton-root:hover": {
      // backgroundColor: "orange",
      " & .MuiListItemIcon-root": {
        display:"block",
        color: "gray"
      }
    }
  });  

export default function Layout({ children, home }: {
  children: React.ReactNode
  home?: boolean
}) {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, 'desktop');
  

  const [swipabledrawer, setSwipabledrawer] = React.useState(false);
  // const [boop, setBoop] = React.useState(true);

  const router = useRouter();

  // const [mode, setMode] =useState<any | null>(null);

  // useEffect(() => {
    
  //       setMode(prefersDarkMode?'black':'white');
      
  // }, [prefersDarkMode]);

  const toggleDrawer =
    (  open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setSwipabledrawer(open);
    };

  const drawerHeader=(
    <Box sx={{  padding:'20px', height:'7rem', display:{xs:'flex', md:'block'}, justifyContent:'space-between'}}>
                  <Box sx={{marginY:'10px'}}>
                  {/* <p>{mode}</p> */}
                  <h1 className={headerStyles.logoText}>
                    {/* <h1 className={theme.palette.mode === 'dark' ? "neonText":"logoText"}> */}
                    Prasanna
                    </h1>
                    <h1 className={headerStyles.logoText} style={{marginLeft:'20px'}}>
                    {/* <h1 className={theme.palette.mode === 'dark' ? "neonText":"logoText"}> */}
                   Tuladhar
                    </h1>
                  </Box>
                  <Box sx={{display: {  md: 'none' }}}>
                  <IconButton
                    sx={{marginRight:'7px'}}
                    edge="start"
                    color="inherit"
                    aria-label="close drawer"
                   
                    onClick={toggleDrawer(false)}
                    // onClick={() => dispatch(decrement())}
                    // onClick={() => alert('fsdfs')}
                    
                  >
                    <CancelOutlinedIcon sx={{margin:'0', padding:'0', color:'inherit'}} fontSize='large'/>
                  </IconButton>
                  </Box>
                 
              </Box>
  )
  const drawerList=(text:any)=>{
    return(
    <ListItemButton selected={router.pathname == text.link} 
   
    >
      
      <ListItemText primary={text.title} disableTypography={true}
      />
       <Boop scale={1.5}  springConfig={{ tension: 150, friction: 10 }} >
      <ListItemIcon sx={{minWidth:'inherit'}}>
     
          <CircleIcon fontSize='small'/>
          
      {/* {router.pathname == text.link ?(<CircleIcon sx={{ color: red[500], fontSize: 18  }}/>):(<CircleIcon sx={{ fontSize: 18  }} className={headerStyles.inactiveStyles}/>)} */}

      </ListItemIcon>
      </Boop>
    </ListItemButton>)
            
  }
  const drawerContent = (

      <StyledList>
          {navData.map((text, index) => (
            <>
            <Divider className={headerStyles.dividerColor}/>
            
            <ListItem key={index} disablePadding>
              
              <Link href={`${text.link}`} 
            
              className={router.pathname !== text.link ? headerStyles.inactiveLink:null} passHref>
                {breakpoint=='mobile'?
              (
               
                <a onClick={()=>{setSwipabledrawer(false)}} style={{width:'100%', alignItems:'center'}}>
               {drawerList(text)}
                </a>
              )  :(
                drawerList(text)
                
              )

              }
                
                
            
              </Link>
            </ListItem>
            </>
          ))}
           <Divider className={headerStyles.dividerColor}/>
        </StyledList>
    )
  
  const drawerContentSocial=(
    <Box sx={{  display:'block', textAlign:'center'}} className={headerStyles.socialButton}>
                  <Box>
                      <Link href="https://www.facebook.com/prasan.tuladhar" passHref={true}>
                      <IconButton size="large" aria-label="facebook" color="inherit" disableRipple>
                        <Move y={-10}>
                         <FacebookIcon sx={{color:'inherit'}}/>
                        </Move>
                      </IconButton>
                      </Link>
                      <Link href="https://www.linkedin.com/in/prasanna-tuladhar-9b567510a/" passHref={true}>
                      <IconButton size="large" aria-label="LinkedIn" color="inherit" disableRipple>
                      <Move y={-10}>
                          <LinkedInIcon  sx={{color:'inherit'}}/>
                          </Move>
                      </IconButton>
                      </Link>
                      <Link href="https://github.com/prasan2421" passHref={true}>
                      <IconButton size="large" aria-label="Instagram" color="inherit" disableRipple>
                      <Move y={-10}>
                      <GitHubIcon  sx={{color:'inherit'}}/>
                      </Move>
                      </IconButton>
                      </Link>
                  </Box>    
                  <Box >
                  <Link href={'files/app-portfolio.apk'} >
                      <IconButton sx={{maxWidth:'150px'}} aria-label="Instagram" color="inherit" disableRipple>
                      <Move y={-10}>
                      <Image 
                    src={playstore}
                    alt="Click to doenload the app."
                    
                  />
                      </Move>
                      </IconButton>
                      </Link>
                  </Box>
                  
        </Box>
  )


  return (

    <StyledEngineProvider>
    <Box sx={{ display: 'flex' }} >

{/* {prefersDarkMode? 
<DancingLines backgroundColor={'black'}/>:
<DancingLines backgroundColor={'#eaeaea'}/>
} */}
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ background: 'transparent',  color:"inherit", boxShadow: 'none', width:'100%' 
        // `calc(100% - ${drawerWidth}px)`
        , ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Box  sx={{  flex:1, justifyContent:'left', display: 'flex' }}></Box>
       
        <Alert severity="info" sx={{justifyContent:'center',display:'flex',  borderRadius:'15px',width:'max-content'}}>Portfolio under construction !!</Alert>
       
        <Box  sx={{  flex:1, justifyContent:'right', display: 'flex' }}>
            <Box>
            
                                             
              <IconButton  
              // to="/cart"  
              // component={NavLink} 
              disableRipple
              sx={{display: { xs: 'none', md: 'inline-flex' }}}
                size="large"
                aria-label="show 4 new notifications"
                color="inherit"
              >
                 <Move y={10}>
                <Badge badgeContent={4} color="error" anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}>
                  <EmojiEmotionsIcon />
                </Badge>
                </Move>
              </IconButton>
              <IconButton
              disableRipple
               sx={{display: { xs: 'none', md: 'inline-flex' }, marginTop:'8px'}}
                size="large"
                aria-label="show 17 new notifications"
                // onClick={handleProfileMenuOpen }
                color="inherit"
              >
               <Move y={10}>
                <AccountCircle />
                </Move> 
                
              </IconButton>
              <IconButton
               
              size="large"
              // edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ display: { xs: 'inline-flex', md: 'none' }
              // , ...(open && { display: 'none' }) 
            }}
              onClick={toggleDrawer(true)}
              // onClick={toggleDrawer('top', true)}
              // onClick={() => dispatch(increment())}
              // onClick={() => alert('fsdfs')}
              
            >
              <MenuIcon sx={{color:'inherit'}} fontSize='large'/>
            </IconButton>
  
            </Box>
            
            </Box>
        </Toolbar>
      </AppBar>
      <Drawer
      
        sx={{
          display: { xs: 'none', md: 'flex' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
           
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >

      <Box sx={{height:'100vh', justifyContent:'space-between', display:'flex', flexDirection:'column'}}> 
        
              {drawerHeader}
              {drawerContent}
              {drawerContentSocial}
        
        
      </Box>
      </Drawer>
      
      <Box
        component="main"
        sx={{ flexGrow: 1, }}
      >

          <SwipeableDrawer
            anchor={'top'}
            open={swipabledrawer}
            onClose={toggleDrawer(false)}
            sx={{display:{ md: 'none'}}}
            onOpen={toggleDrawer(true)}
            
          >
            <Box sx={{height:'100vh', justifyContent:'space-between', display:'flex', flexDirection:'column'}}>
              {drawerHeader}
            {drawerContent}
            {drawerContentSocial}
            </Box>
            
          </SwipeableDrawer>
          
        <main>{children}</main>
      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )} */}
      </Box>
    </Box>
    </StyledEngineProvider>
  );
}