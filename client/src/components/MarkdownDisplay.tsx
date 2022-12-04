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
import { marked } from 'marked';
import Container from '@mui/material/Container';
import {Grid, Box, Slide, Grow, Typography, Button, IconButton} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

type TextProps = {
   
    data:any
  }


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

const MarkdownDisplay = ({data, ...props}:TextProps) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    function createMarkup(data) {
      return { __html: marked(data) };
    }

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return (
   
   
    <Box>
      
      <Box sx={{display:'grid'}}>
      <div dangerouslySetInnerHTML={createMarkup(data)} />
     
      </Box>
  
    </Box>

   
  )
  ;
};

export default React.memo(MarkdownDisplay);
