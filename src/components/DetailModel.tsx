import React, { useEffect } from "react";
import { useSpring, animated } from '@react-spring/web';
import TabScrollButton from '@mui/material/TabScrollButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import Container from '@mui/material/Container';
import {Grid, Box, Slide, Grow, Typography, Button, IconButton} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

type TextProps = {
   
    // text:string,
    // Testdata:string,
    ListData:any
  }

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

const DetailModel = ({ListData, ...props}:TextProps) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


   

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return (
   
   
    <Box sx={{maxHeight:'80vh', overflow:'auto'}} >
      
      <Box sx={{display:'grid'}}>
      <Typography variant='h5'>{ListData?ListData.title:''}</Typography>
      <Typography variant='subtitle1'>{ListData?ListData.subtitle:''}</Typography>
      <Typography variant='subtitle2'>{ListData?ListData.date:''}</Typography>
     
      </Box>
      <List>
     
      
      {ListData?ListData.list.map((item:any) => (
         <ListItem key='index'>
           <ListItemIcon>
                <CircleIcon fontSize='small' sx={{color:'gray'}}/>
              </ListItemIcon>
         <ListItemText>
           {item}
         </ListItemText>
       </ListItem>
      )):''}
     
      </List>
    </Box>

   
  )
  ;
};

export default React.memo(DetailModel);
